import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArticleHeadline = styled.h1.attrs((props) => {
  return {
    style: {
      fontSize: `${props.titleSize}px`,
      margin: `${props.titleMargin}`,
      fontFamily: `${props.fontFamily}`
    },
  };
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 8px;
  text-align: center;
`;

const ArticleLink = styled.a.attrs((props) => {
  return {
    href: `${props.link}`,
    style: {
      color: `${props.color}`,
    }
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
      titleSize={props.titleSize}
    >
      <ArticleLink
        color={props.color}
        link={props.link}
      >{props.title}</ArticleLink>
    </ArticleHeadline>
  );
};

ArticleTitle.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.oneOf(['source-code-pro',"kan415typos-std","monospace","sans-serif"]),
  titleSize: PropTypes.number,
  titleMargin: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};

ArticleTitle.defaultProps = {
  color: '#787878',
  fontFamily: 'source-code-pro',
  titleSize: 25,
  titleMargin: "20px auto 0 auto",
  link: '#',
  title: 'Article Title',
};

export default ArticleTitle;
