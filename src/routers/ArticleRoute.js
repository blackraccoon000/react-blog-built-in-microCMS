import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterCopyrightAria from '../components/L2_Molecules/FooterCopyrightAria';
import ArticleContainer from '../components/L4_Templates/ArticleContainer';

const ArticleRoute = (props) => {
  return (
    <Route
      {...props.rest}
      component={() => (
        <>
          <HeaderTurquoiseBlue />
          <ArticleContainer {...props} />
          <FooterCopyrightAria />
        </>
      )}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const { articles, views, status } = state;
  return {
    articles,
    views,
  };
};

const mapDispatchToProps = () => {
  return {
    faster: (id) => fetchPages('select', id),
  };
};

export { ArticleRoute };
export default connect(mapStateToProps, mapDispatchToProps)(ArticleRoute);
