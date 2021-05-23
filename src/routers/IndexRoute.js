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
  props.views.availableViews < 4 &&
    props.views.obtainable !== 0 &&
    props.views.contentsList.length !== 0 &&
    props.updater(4 - props.views.availableViews);

  return (
    <Route
      {...rest}
      component={() => {
        return props.views.availableViews === 0 ? (
          <>
            <HeaderTurquoiseBlue />
            <Loading />
            <FooterTurquoiseBlue />
          </>
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

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.contents.pages,
    views: state.contents.views,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updater: (getLimit) => fetchPages('acquired', '', getLimit),
  };
};

export { IndexRoute };
export default connect(mapStateToProps, mapDispatchToProps)(IndexRoute);
