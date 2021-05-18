import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterTurquoiseBlue from '../components/L3_Organisms/FooterTurquoiseBlue';
import ArticleContainer from '../components/L3_Organisms/ArticleContainer';
import Loading from '../components/L1_Atoms/Loading';

const ArticleRoute = (props) => {
  const { id, ...rest } = props;
  console.log('Article ID', id);
  return (
    <Route
      {...rest}
      component={(props) =>
        id ? (
          <>
            <HeaderTurquoiseBlue />
            <ArticleContainer {...props} />
            <FooterTurquoiseBlue />
          </>
        ) : (
          // 直リンクで飛んできた場合、dataのloadができていないため、
          // ArticleContainerを呼び出すことを防ぐ必要がある。
          // ArticleContainerでは、pageDataがあることが前提になっているため、
          // pageDataが読み込めない状態では表示ができない。
          <>
            <HeaderTurquoiseBlue />
            <Loading />
            <FooterTurquoiseBlue />
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
  console.log(pageData);
  return {
    id: pageData ? pageData.id : null,
  };
};

export { ArticleRoute };
export default connect(mapStateToProps)(ArticleRoute);
