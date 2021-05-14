import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeaderStart from '../L2_Molecules/HeaderStart';
import HeaderEnd from '../L2_Molecules/HeaderEnd';

const Header = styled.header`
  background-color: #fafbfc;
  border-bottom: 1px solid #e5e5e5;
  height: 70px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 600px;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderContainer = (props) => {
  return (
    <Header>
      <Container>
        <HeaderStart />
        <HeaderEnd />
      </Container>
    </Header>
  );
};

export default HeaderContainer;
