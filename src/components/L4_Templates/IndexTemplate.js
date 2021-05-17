import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeaderTurquoiseBlue from '../L3_Organisms/HeaderTurquoiseBlue';
import FooterTurquoiseBlue from '../L3_Organisms/FooterTurquoiseBlue';
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
  return (
    <Wrapper bGColor={props.bGColor}>
      <HeaderTurquoiseBlue />
      <IndexPosts>
        {props.posts.map((post, num) => {
          return <ArticleCardTurquoiseBlue key={`${post}_${num}`} />;
        })}
      </IndexPosts>
      <FooterTurquoiseBlue />
    </Wrapper>
  );
};

IndexTemplate.propTypes = {
  bGColor: PropTypes.string,
  posts: PropTypes.array,
};

IndexTemplate.defaultProps = {
  bGColor: '#61b1c8',
  posts: ['', '', '', '', '', '', '', '', '', ''],
  // posts: ['', ''],
};

export default IndexTemplate;
