import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterTurquoiseBlue from '../components/L3_Organisms/FooterTurquoiseBlue';
import ArticleCardList from '../components/L5_Pages/ArticleCardList';
import Loading from '../components/L1_Atoms/Loading';
import fetchPages from '../microcms/fetchPages';
import acquiredUpdater from '../selectors/acquiredUpdater';

const ArticleCardListRoute = (props) => {
  console.log(props);
  return (
    <Route
      component={() => {
        return props.articles.length === 0 ? (
          <>
            <HeaderTurquoiseBlue />
            <Loading />
            <FooterTurquoiseBlue />
          </>
        ) : (
          <>
            <HeaderTurquoiseBlue />
            <ArticleCardList {...props} />
            <FooterTurquoiseBlue />
          </>
        );
      }}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const { articles, views, status } = state;
  return {
    articles,
    views,
    status,
  };
};

export { ArticleCardListRoute };
export default connect(mapStateToProps)(ArticleCardListRoute);
