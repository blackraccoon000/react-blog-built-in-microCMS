import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterCopyrightAria from '../components/L2_Molecules/FooterCopyrightAria';
import ArticleContainer from '../components/L3_Organisms/ArticleContainer';
import Loading from '../components/L1_Atoms/Loading';
import updatePages from '../microcms/updatePages';
import { setPages } from '../actions/articleActions';
import consoleLog from '../utils/consoleLog';
import fetchPages from '../microcms/fetchPages';

const ArticleRoute = (props) => {
  // ここの設定を更に調整する。
  // console.log('AR:', props.views.totalCount);
  // && props.pages.length < props.views.totalCount
  props.page.nextId !== undefined
    ? console.log('props.page.nextId : ', props.page.nextId)
    : props.updatePager(); // ここどうしよっかなー。

  const { id, ...rest } = props;
  return (
    <Route
      {...rest}
      component={() =>
        id ? (
          <>
            <HeaderTurquoiseBlue />
            <ArticleContainer {...props} />
            <FooterCopyrightAria />
          </>
        ) : (
          // 直リンクで飛んできた場合、dataのloadができていないため、
          // ArticleContainerを呼び出すことを防ぐ必要がある。
          // ArticleContainerでは、pageDataがあることが前提になっているため、
          // pageDataが読み込めない状態では表示ができない。
          <>
            <HeaderTurquoiseBlue />
            <Loading />
            {props.updatePager()}
            <FooterCopyrightAria />
          </>
        )
      }
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.computedMatch.params.id;
  const beforePage = state.pages.find((page) => page.id === id);
  const pidAry = state.pages.map((page) => page.id);
  const now = pidAry.indexOf(id);
  const afterPage = {
    ...beforePage,
    prevId: state.pages[now - 1] ? state.pages[now - 1].id : undefined,
    prevTitle: state.pages[now - 1] ? state.pages[now - 1].title : undefined,
    nextId: state.pages[now + 1] ? state.pages[now + 1].id : undefined,
    nextTitle: state.pages[now + 1] ? state.pages[now + 1].title : undefined,
  };
  console.log('AP:', afterPage);

  return {
    id,
    page: afterPage,
    pages: state.pages,
    views: state.views,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updatePager: () => {
      // ここのoffsetとlimitの番号を変更できるようにする。
      fetchPages(
        `?fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&offset=4&limit=4`
      );
    },
  };
};

export { ArticleRoute };
export default connect(mapStateToProps, mapDispatchToProps)(ArticleRoute);
