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
            {props.updater()}
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
  };
};

export { IndexRoute };
export default connect(mapStateToProps, mapDispatchToProps)(IndexRoute);
