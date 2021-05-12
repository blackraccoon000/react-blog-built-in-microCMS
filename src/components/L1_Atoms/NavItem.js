import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavDiv = styled.div.attrs((props) => {})`
  margin: 10px 0 0 15px;
`;

const NavA = styled.a.attrs((props) => {
  return {
    href: '#',
    style: {
      border: `2px solid ${props.color}`,
      color: `${props.color}`,
    },
  };
})`
  background: transparent;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 800;
  padding: 8px;
  text-decoration: none;
`;

const NavItem = (props) => {
  return (
    <NavDiv {...props}>
      <NavA {...props}>
        <span>{props.value}</span>
      </NavA>
    </NavDiv>
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
