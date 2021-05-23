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

const IndexPosts = styled.div.attrs((props) => {})`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const IndexTemplate = (props) => {
  // console.log('props:', props);
  document.title = 'PlayWell | よく遊びよく学べ';
  return (
    <Wrapper bGColor={props.bGColor}>
      <IndexPosts>
        {props.views.viewsSortByIds.map((id) => {
          /** viewsSortByIdsの順番で表示する */
          const ACPage = props.pages.find((page) => page.id === id);
          return (
            <ArticleCardTurquoiseBlue
              key={ACPage.id}
              src={ACPage.thumbnail !== undefined ? ACPage.thumbnail.url : ''}
              title={ACPage.title}
              id={ACPage.id}
              createdAt={ACPage.createdAt}
              updatedAt={ACPage.updatedAt}
              keywords={
                ACPage.keyword !== undefined ? ACPage.keyword.split(',') : ['']
              }
            />
          );
        })}
      </IndexPosts>
    </Wrapper>
  );
};

IndexTemplate.propTypes = {
  bGColor: PropTypes.string,
  pages: PropTypes.array,
  views: PropTypes.object,
};

IndexTemplate.defaultProps = {
  bGColor: '#61b1c8',
  pages: pages,
  views: {
    availableViews: 4,
    acquisition: 11,
    viewsSortByIds: [
      'uhrjbmf8xqz3',
      'kf9j-jzze',
      'q0qtwov5f4q6',
      'ww2vpab1815b',
    ],
  },
};

const mapStateToProps = (state) => {
  // console.log('IT-state:', state);
  return {
    pages: state.contents.pages,
    views: state.contents.views,
  };
};

export default connect(mapStateToProps)(IndexTemplate);
export { IndexTemplate };
