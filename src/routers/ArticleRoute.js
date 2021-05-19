import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterCopyrightAria from '../components/L2_Molecules/FooterCopyrightAria';
import ArticleContainer from '../components/L3_Organisms/ArticleContainer';
import Loading from '../components/L1_Atoms/Loading';
import pageGetter from '../microcms/pageGetter';

const ArticleRoute = (props) => {
  console.log('AR:', props);
  const { id, ...rest } = props;
  console.log('id:', id);
  return (
    <Route
      {...rest}
      component={(props) =>
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
            {pageGetter(props)}
            <Loading />
            <FooterCopyrightAria />
          </>
        )
      }
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log('state: ', state);
  console.log('ownProps: ', ownProps);
  console.log('id:', ownProps.computedMatch.params.id);
  const pageData = state.pages.find(
    (page) => page.id === ownProps.computedMatch.params.id
  );
  return {
    id: pageData ? pageData.id : null,
    pages: state.pages,
    views: state.views,
  };
};

const mapDispatchToProps = (dispatch) => ({
  viewsUpdater: (views) => dispatch(viewPages(views)),
});

export { ArticleRoute };
export default connect(mapStateToProps, mapDispatchToProps)(ArticleRoute);
