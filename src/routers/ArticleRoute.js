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
  props.page.nextId !== undefined
    ? console.log(
        '次ページ ID',
        props.page.nextId,
        '-> 記事情報取得済み',
        props.pages.length,
        props.views.pageCount
      )
    : props.pages.length !== props.views.totalCount
    ? console.log(
        '次ページ ID',
        props.page.nextId,
        '-> 記事情報未取得 更新します'
      ) &
      props.updater() &
      console.log(props)
    : props.pages.length === 0
    ? console.log('現在の記事情報なし -> 取得します') & props.faster(props.id)
    : console.log('AR: props.pages.length:', props.pages.length);

  // props.pages.length === 0
  // ? console.log('現在の記事情報なし -> 取得します') & props.faster(props.id)
  // : console.log('bbbbbbb');

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
            {props.updater()}
            <FooterCopyrightAria />
          </>
        )
      }
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.computedMatch.params.id;
  const defaultPage = {
    id,
    title: '',
    keywords: [''],
    createdAt: '',
    updatedAt: '',
    thumbnail: {
      url: '',
    },
    body: '',
  };
  const beforePage = state.pages.find((page) => page.id === id);
  const workingPage = beforePage === undefined ? defaultPage : beforePage;
  const pidAry = state.pages.map((page) => page.id);
  const now = pidAry.indexOf(id);
  const afterPage = {
    ...workingPage,
    prevId: state.pages[now - 1] ? state.pages[now - 1].id : undefined,
    prevTitle: state.pages[now - 1] ? state.pages[now - 1].title : undefined,
    nextId: state.pages[now + 1] ? state.pages[now + 1].id : undefined,
    nextTitle: state.pages[now + 1] ? state.pages[now + 1].title : undefined,
  };

  return {
    id,
    page: afterPage,
    pages: state.pages,
    views: state.views,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updater: () => {
      fetchPages(
        `?fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&limit=4`
      );
    },
    faster: (id) => {
      fetchPages(
        `?ids=${id}&fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&limit=4`
      );
    },
  };
};

export { ArticleRoute };
export default connect(mapStateToProps, mapDispatchToProps)(ArticleRoute);
