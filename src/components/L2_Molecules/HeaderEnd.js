import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavItem from '../L1_Atoms/NavItem';
import HeaderMenu from "./HeaderMenu"
import SearchForm from './SearchForm';

const EndWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 30px 0 0;
  overflow: visible;
  width:1100px;
`;

const EndDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 auto;
`;

const HeaderEnd = (props) => {
  return (
    <EndWrapper>
      <HeaderMenu />
      <EndDiv>
        <SearchForm />
        <NavItem value="Sign In" />
        <NavItem value="Sign up" />
      </EndDiv>
    </EndWrapper>
  );
};

export default HeaderEnd;
