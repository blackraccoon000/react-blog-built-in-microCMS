import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Wrapper = styled.div.attrs((props) => {
  return {
    style: {
      color: `${props.color}`,
    },
  };
})`
  background: transparent;
  font-size: calc(15rem / 16);
  font-weight: 500;
  margin-left: calc(15rem / 16);
  padding: calc(10rem / 16);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SpanItem = styled.span.attrs((props) => {
  return {
    style: {
      fontFamily: `${props.fontFamily}`,
    },
  };
})`
  vertical-align: middle;
`;

const NavItem = (props) => {
  return (
    <Wrapper color={props.color}>
      <StyledLink to={props.link}>
        <SpanItem fontFamily={props.fontFamily}>{props.value}</SpanItem>
      </StyledLink>
    </Wrapper>
  );
};

NavItem.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.oneOf([
    'source-code-pro',
    'kan415typos-std',
    'monospace',
    'sans-serif',
  ]),
  link: PropTypes.string,
  value: PropTypes.string,
};

NavItem.defaultProps = {
  color: '#8b8c8e',
  fontFamily: 'kan415typos-std',
  link: '/',
  value: 'Sign In',
};

export default NavItem;
