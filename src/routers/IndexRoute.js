import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterTurquoiseBlue from '../components/L3_Organisms/FooterTurquoiseBlue';
import IndexTemplate from '../components/L4_Templates/IndexTemplate';
import Loading from '../components/L1_Atoms/Loading';
import fetchPages from '../microcms/fetchPages';

const IndexRoute = (props) => {
  const { id, ...rest } = props;
  console.log('IR Props:', props);
  return (
    <Route
      {...rest}
      component={() => {
        return props.pages[0] !== undefined ? (
          <>
            <HeaderTurquoiseBlue />
            <IndexTemplate {...rest} />
            <FooterTurquoiseBlue />
          </>
        ) : (
          <>
            <HeaderTurquoiseBlue />
            <Loading />
            <FooterTurquoiseBlue />
          </>
        );
      }}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.contents.pages,
    views: state.contents.views,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updater: () => {
      fetchPages(
        `?fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&limit=4`
      );
    },
  };
};

export { IndexRoute };
export default connect(mapStateToProps, mapDispatchToProps)(IndexRoute);
