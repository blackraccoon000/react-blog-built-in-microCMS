import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArticleHeadline = styled.h1.attrs((props) => {
  return {
    style: {
      color: `${props.color}`,
      fontSize: `${props.titleSize}px`,
      margin: `${props.titleMargin}`
    },
  };
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'source-code-pro';
  font-weight: 600;
  padding: 8px;
  text-align: center;
`;

const ArticleLink = styled.a.attrs((props) => {
  return {
    href: `${props.link}`,
  };
})`
  display: inline-block;
  text-decoration: none;
  margin: 0;
`;

const ArticleTitle = (props) => {
  return (
    <ArticleHeadline
      color={props.color}
      titleSize={props.titleSize}
      titleMargin={props.titleMargin}
    >
      <ArticleLink link={props.link}>{props.title}</ArticleLink>
    </ArticleHeadline>
  );
};

ArticleTitle.propTypes = {
  color: PropTypes.string,
  titleSize: PropTypes.number,
  titleMargin: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};

ArticleTitle.defaultProps = {
  color: '#787878',
  titleSize: 25,
  titleMargin: "20px auto 0 auto",
  link: '#',
  title: 'Article Title',
};

export default ArticleTitle;
