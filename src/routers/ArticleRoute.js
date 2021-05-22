import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterCopyrightAria from '../components/L2_Molecules/FooterCopyrightAria';
import ArticleContainer from '../components/L3_Organisms/ArticleContainer';
import Loading from '../components/L1_Atoms/Loading';
import fetchPages from '../microcms/fetchPages';

const ArticleRoute = (props) => {
  console.log('AR:', props);
  props.pages.length === 0 &&
    props.views.obtainable === 0 &&
    props.faster(props.id);
  // : props.pages.map((page) => {
  //     page.id !== props.id && console.log('なんか変', page, props.id);
  //   });

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
            <FooterCopyrightAria />
          </>
        )
      }
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log('mapState:', state);
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
  const beforePage = state.contents.pages.find((page) => page.id === id);
  const workingPage = beforePage === undefined ? defaultPage : beforePage;
  const pidAry = state.contents.pages.map((page) => page.id);
  const now = pidAry.indexOf(id);
  const afterPage = {
    ...workingPage,
    prevId: state.contents.pages[now - 1]
      ? state.contents.pages[now - 1].id
      : undefined,
    prevTitle: state.contents.pages[now - 1]
      ? state.contents.pages[now - 1].title
      : undefined,
    nextId: state.contents.pages[now + 1]
      ? state.contents.pages[now + 1].id
      : undefined,
    nextTitle: state.contents.pages[now + 1]
      ? state.contents.pages[now + 1].title
      : undefined,
  };

  return {
    id,
    page: afterPage,
    pages: state.contents.pages,
    views: state.contents.views,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    faster: (id) => {
      fetchPages(
        `?ids=${id}&fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&limit=1`
      );
    },
  };
};

export { ArticleRoute };
export default connect(mapStateToProps, mapDispatchToProps)(ArticleRoute);
