import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavA = styled.a.attrs((props) => {
  return {
    href: `${props.link}`,
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
  text-decoration: none;
`;

const SpanItem = styled.span.attrs((props) => {})`
  vertical-align: middle;
`;

const NavItem = (props) => {
  return (
    <NavA {...props}>
      <SpanItem>{props.value}</SpanItem>
    </NavA>
  );
};

NavItem.propTypes = {
  color: PropTypes.string,
  link: PropTypes.string,
  value: PropTypes.string,
};

NavItem.defaultProps = {
  color: '#8b8c8e',
  link: '/',
  value: 'Sign In',
};

export default NavItem;
