import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleHeadline = styled.h1.attrs((props) => {
  return {
    style: {
      fontFamily: `${props.fontFamily}`,
      fontSize: `${props.titleFontSize / 16}rem`,
      margin: `${props.titleMargin}`,
      order: `${props.order}`,
    },
  };
})`
  align-items: center;
  display: flex;
  /* flex-direction: column; */
  padding: calc(8rem / 16);
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.color};
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
      order={props.order}
    >
      <StyledLink color={props.color} to={props.link}>
        {props.title}
      </StyledLink>
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
  order: PropTypes.number,
};

ArticleTitle.defaultProps = {
  color: '#787878',
  fontFamily: 'kan415typos-std',
  titleFontSize: 25,
  // titleMargin: 'calc(20rem/16) auto 0 auto',
  titleMargin: 'calc(20rem/16) 0 calc(5rem/16)',
  link: '#',
  title: 'Article Title',
  order: 0,
};

export default ArticleTitle;
