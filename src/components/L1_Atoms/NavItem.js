import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Wrapper = styled.div.attrs((props) => {
  return {
    style: {
      margin: `${props.margin}`,
      padding: `${props.padding}`,
    },
  };
})`
  background: transparent;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.color};
  text-decoration: none;
`;

const SpanItem = styled.span.attrs((props) => {
  return {
    style: {
      color: `${props.color}`,
      fontFamily: `${props.fontFamily}`,
      fontSize: `calc(${props.fontSize / 16}rem)`,
    },
  };
})`
  vertical-align: middle;
`;

const NavItem = (props) => {
  return (
    <Wrapper margin={props.margin} padding={props.padding}>
      <SpanItem fontFamily={props.fontFamily} fontSize={props.fontSize}>
        {props.flag ? (
          <StyledLink color={props.color} to={props.link}>
            {props.value}
          </StyledLink>
        ) : (
          <SpanItem color={props.color}>{props.value}</SpanItem>
        )}
      </SpanItem>
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
  fontSize: PropTypes.number,
  flag: PropTypes.bool,
  link: PropTypes.string,
  value: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

NavItem.defaultProps = {
  color: '#8b8c8e',
  fontFamily: 'kan415typos-std',
  fontSize: 15,
  flag: true,
  link: '/',
  value: 'Sign In',
  margin: '0 0 0 calc(15rem / 16)',
  padding: 'calc(10rem / 16)',
};

export default NavItem;
