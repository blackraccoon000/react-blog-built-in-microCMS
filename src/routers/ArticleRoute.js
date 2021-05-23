import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// import articleDefaultData from '../tests/fixtures/articleDefaultData';
import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterCopyrightAria from '../components/L2_Molecules/FooterCopyrightAria';
import ArticleContainer from '../components/L3_Organisms/ArticleContainer';
import Loading from '../components/L1_Atoms/Loading';
import fetchPages from '../microcms/fetchPages';
import getPageSelector from '../selectors/getPageSelector';
import pagePropCreator from '../selectors/pagePropCreator';

const ArticleRoute = (props) => {
  // console.log('AR:', props);
  getPageSelector(props);

  return (
    <Route
      {...props.rest}
      component={() =>
        props.views.viewsSortByIds.indexOf(props.id) === -1 ? (
          <>
            <HeaderTurquoiseBlue />
            <Loading />
            <FooterCopyrightAria />
          </>
        ) : (
          <>
            <HeaderTurquoiseBlue />
            <ArticleContainer {...props} />
            <FooterCopyrightAria />
          </>
        )
      }
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log('mapState:', state);
  const id = ownProps.computedMatch.params.id;
  const page = pagePropCreator(state, id);

  return {
    id,
    page,
    pages: state.contents.pages,
    views: state.contents.views,
  };
};

const mapDispatchToProps = () => {
  return {
    faster: (id) => fetchPages('select', id),
  };
};

export { ArticleRoute };
export default connect(mapStateToProps, mapDispatchToProps)(ArticleRoute);
