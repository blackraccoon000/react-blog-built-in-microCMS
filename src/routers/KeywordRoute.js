import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterCopyrightAria from '../components/L2_Molecules/FooterCopyrightAria';
import KeywordContainer from '../components/L4_Templates/KeywordContainer';

const KeywordRoute = (props) => {
  return (
    <Route
      {...props.rest}
      component={() => (
        <>
          <HeaderTurquoiseBlue />
          <KeywordContainer {...props} />
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

export { KeywordRoute };
export default connect(mapStateToProps, mapDispatchToProps)(KeywordRoute);
