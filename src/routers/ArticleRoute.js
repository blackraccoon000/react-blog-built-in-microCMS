import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterCopyrightAria from '../components/L2_Molecules/FooterCopyrightAria';
import ArticleContainer from '../components/L3_Organisms/ArticleContainer';
import Loading from '../components/L1_Atoms/Loading';
import fetchPages from '../microcms/fetchPages';

const ArticleRoute = (props) => {
  // console.log('AR:', props);
  props.views.viewsSortByIds.indexOf(props.id) === -1 &&
    props.views.obtainable !== 0 &&
    props.views.contentsList.length !== 0 &&
    props.faster(props.id);

  return (
    <Route
      {...props.rest}
      component={() =>
        props.views.viewsSortByIds.indexOf(props.id) === -1 ? (
          <>
            <HeaderTurquoiseBlue />
            <Loading />
            <FooterCopyrightAria />
          </>
        ) : (
          <>
            <HeaderTurquoiseBlue />
            <ArticleContainer {...props} />
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
    faster: (id) => fetchPages('onlyOne', id),
  };
};

export { ArticleRoute };
export default connect(mapStateToProps, mapDispatchToProps)(ArticleRoute);
