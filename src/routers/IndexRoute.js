import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterTurquoiseBlue from '../components/L3_Organisms/FooterTurquoiseBlue';
import IndexTemplate from '../components/L4_Templates/IndexTemplate';

const ArticleRoute = (props) => {
  const { id, ...rest } = props;
  return (
    <Route
      {...rest}
      component={() => {
        return props.pages[0] === undefined ? (
          <h1>データが見つかりません</h1>
        ) : (
          <>
            <HeaderTurquoiseBlue />
            <IndexTemplate {...rest} />
            <FooterTurquoiseBlue />
          </>
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  // console.log('IR-state:', state);
  return {
    pages: state.pages,
  };
};

export { ArticleRoute };
export default connect(mapStateToProps)(ArticleRoute);