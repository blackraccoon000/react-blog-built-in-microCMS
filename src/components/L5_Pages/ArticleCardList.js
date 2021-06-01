import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import pages from '../../tests/fixtures/pages';

import ArticleCardTurquoiseBlue from '../L3_Organisms/ArticleCardTurquoiseBlue';

const Wrapper = styled.div.attrs((props) => {
  return {
    style: {
      backgroundColor: `${props.bGColor}`,
    },
  };
})``;

const ArticleCardWrapper = styled.div.attrs((props) => {})`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;

  @media screen and (min-width: 400px) and (max-width: 766px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ArticleCardList = (props) => {
  document.title = 'PlayWell | よく遊びよく学べ';
  return (
    <Wrapper bGColor={props.bGColor}>
      <ArticleCardWrapper>
        {props.views.viewArticles.map((article) => {
          return (
            <ArticleCardTurquoiseBlue
              key={article.id}
              src={article.thumbnail !== undefined ? article.thumbnail.url : ''}
              title={article.title}
              id={article.id}
              createdAt={article.createdAt}
              updatedAt={article.updatedAt}
              keywords={
                article.keyword !== undefined
                  ? article.keyword.split(',')
                  : ['']
              }
            />
          );
        })}
      </ArticleCardWrapper>
    </Wrapper>
  );
};

ArticleCardList.propTypes = {
  bGColor: PropTypes.string,
  articles: PropTypes.array,
  views: PropTypes.object,
  viewArticles: PropTypes.array,
};

ArticleCardList.defaultProps = {
  bGColor: '#61b1c8',
  articles: pages,
  views: {
    availableViews: 4,
    acquisition: 11,
    viewsSortByIds: [
      'uhrjbmf8xqz3',
      'kf9j-jzze',
      'q0qtwov5f4q6',
      'ww2vpab1815b',
    ],
    viewArticles: pages,
  },
};

const mapStateToProps = (state) => {
  const { articles, views, status } = state;
  return {
    articles,
    views,
    status,
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     acquiredUpdater: (props) => acquiredUpdater(dispatch, props),
//   };
// };

export default connect(mapStateToProps)(ArticleCardList);
export { ArticleCardList };
