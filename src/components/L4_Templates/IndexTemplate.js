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

// let prevLength = 0;
const IndexTemplate = (props) => {
  // console.log('viewCount', props.views.pageCount);
  // console.log('prevLength', prevLength);
  // prevLength = props.pages.length;
  // console.log('pageLength', props.pages.length);
  return (
    <Wrapper bGColor={props.bGColor}>
      <IndexPosts>
        {props.pages.map((page, num) => {
          if (num < props.views.pageCount) {
            // num
            //   ? console.log(num, 'prevID:', props.pages[num - 1].id)
            //   : console.log(num, 'prevID: None');

            // console.log(num, 'main:', props.pages[num].id);

            // num < props.views.pageCount - 1
            //   ? console.log(num, 'nextId:', props.pages[num + 1].id)
            //   : console.log(num, 'nextId: None');

            return (
              <ArticleCardTurquoiseBlue
                key={`${page.id}_${num}`}
                src={page.thumbnail.url}
                title={page.title}
                id={page.id}
                createdAt={page.createdAt}
                updatedAt={page.updatedAt}
                keywords={page.keyword.split(',')}
              />
            );
          }
        })}
      </IndexPosts>
    </Wrapper>
  );
};

IndexTemplate.propTypes = {
  bGColor: PropTypes.string,
  posts: PropTypes.array,
  views: PropTypes.object,
};

IndexTemplate.defaultProps = {
  bGColor: '#61b1c8',
  pages: pages,
  views: {
    pageCount: 4,
  },
};

const mapStateToProps = (state) => {
  // console.log('IT-state:', state);
  return {
    pages: state.pages,
    views: state.views,
  };
};

export default connect(mapStateToProps)(IndexTemplate);
export { IndexTemplate };
