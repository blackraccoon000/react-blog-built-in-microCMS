import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArticleHeadline = styled.h1.attrs((props) => {
  return {
    style: {
      fontSize: `${props.titleFontSize / 16}rem`,
      margin: `${props.titleMargin}`,
      fontFamily: `${props.fontFamily}`,
    },
  };
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: calc(8rem / 16);
  text-align: center;
`;

const ArticleLink = styled.a.attrs((props) => {
  return {
    href: `${props.link}`,
    style: {
      color: `${props.color}`,
    },
  };
})`
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  margin: 0;
`;

const ArticleTitle = (props) => {
  return (
    <ArticleHeadline
      fontFamily={props.fontFamily}
      titleMargin={props.titleMargin}
      titleFontSize={props.titleFontSize}
    >
      <ArticleLink color={props.color} link={props.link}>
        {props.title}
      </ArticleLink>
    </ArticleHeadline>
  );
};

ArticleTitle.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.oneOf([
    'source-code-pro',
    'kan415typos-std',
    'monospace',
    'sans-serif',
  ]),
  titleFontSize: PropTypes.number,
  titleMargin: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};

ArticleTitle.defaultProps = {
  color: '#787878',
  fontFamily: 'source-code-pro',
  titleFontSize: 25,
  titleMargin: 'calc(20rem/16) auto 0 auto',
  link: '#',
  title: 'Article Title',
};

export default ArticleTitle;
