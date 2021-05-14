import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavA = styled.a.attrs((props) => {
  return {
    href: '#',
    style: {
      color: `${props.color}`,
    },
  };
})`
  background: transparent;
  font-size: 15px;
  font-weight: 500;
  margin-left: 15px;
  padding: 10px;
  text-decoration: none;
`;

const SpanItem = styled.span.attrs(props => {})`
  vertical-align: middle;
`

const NavItem = (props) => {
  return (
      <NavA {...props}>
        <SpanItem>{props.value}</SpanItem>
      </NavA>
  );
};

NavItem.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
};

NavItem.defaultProps = {
  color: '#8b8c8e',
  value: 'Sign In',
};

export default NavItem;
