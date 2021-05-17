import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArticleImg from '../L2_Molecules/ArticleImg';
import ArticleTitle from '../L2_Molecules/ArticleTitle';
import ArticleKeywords from '../L2_Molecules/ArticleKeywords';
import ArticleDate from '../L2_Molecules/ArticleDate';

const Post = styled.article.attrs((props) => {})`
  background-color: #f5f5f5;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const ArticleCardTurquoiseBlue = (props) => {
  return (
    <Post>
      <ArticleTitle order={2} />
      <ArticleKeywords order={3} />
      <ArticleDate order={4} />
      <ArticleImg
        order={1}
        imageMargin={props.imageMargin}
        imageRadius={props.imageRadius}
        width={props.imageWidth}
      />
    </Post>
  );
};

ArticleCardTurquoiseBlue.propTypes = {
  imageMargin: PropTypes.string,
  imageRadius: PropTypes.string,
  imageWidth: PropTypes.string,
};

ArticleCardTurquoiseBlue.defaultProps = {
  imageMargin: '0',
  imageRadius: '0',
  imageWidth: '100%',
};

export default ArticleCardTurquoiseBlue;
