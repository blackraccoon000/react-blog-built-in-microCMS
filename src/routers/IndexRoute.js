import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterTurquoiseBlue from '../components/L3_Organisms/FooterTurquoiseBlue';
import IndexTemplate from '../components/L4_Templates/IndexTemplate';
import Loading from '../components/L1_Atoms/Loading';
import updatePages from '../microcms/updatePages';
import fetchPages from '../microcms/fetchPages';

const IndexRoute = (props) => {
  // console.log('IR:', props);
  const { id, ...rest } = props;
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
            {props.updatePager()}
            <Loading />
            <FooterTurquoiseBlue />
          </>
        );
      }}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log('IRS:', state);
  // console.log('IRO:', ownProps);
  return {
    pages: state.pages,
    views: state.views,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const queries = `?fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&offset=0&limit=9`;
  return {
    updatePager: () => {
      // fetchPages(queries);
      fetchPages(
        `?fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&offset=0&limit=4`
      );
      // fetchPages(
      //   `?fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&offset=4&limit=4`
      // );
      // fetchPages(
      //   `?fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&offset=8&limit=4`
      // );
    },
  };
};

export { IndexRoute };
export default connect(mapStateToProps, mapDispatchToProps)(IndexRoute);
