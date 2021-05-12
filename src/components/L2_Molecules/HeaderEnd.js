import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import NavItem from '../L1_Atoms/NavItem';

const EndDiv = styled.div`
  display: flex;
  margin: 18px 16px 0 0;
  overflow: visible;
  z-index: 30;
`;

const HeaderEnd = (props) => {
  return (
    <EndDiv>
      <SearchForm />
      <NavItem value="Sign In" />
      <NavItem value="Sign up" />
    </EndDiv>
  );
};

export default HeaderEnd;
