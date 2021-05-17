import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeaderStart from '../L2_Molecules/HeaderStart';
import HeaderEnd from '../L2_Molecules/HeaderEnd';

const Header = styled.header.attrs((props) => {
  return {
    style: {
      position: `${props.position}`,
    },
  };
})`
  background-color: #fafbfc;
  border-bottom: calc(1rem / 16) solid #e5e5e5;
  height: calc(45rem / 16);
  left: 0;
  top: 0;
  width: 100%;
  z-index: 50;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: calc(600rem / 16);
  max-width: calc(1200rem / 16);
  margin: 0 auto;
  padding: calc(5rem / 16) calc(20rem / 16);
`;

const HeaderContainer = (props) => {
  return (
    <Header {...props}>
      <Container>
        <HeaderStart />
        <HeaderEnd />
      </Container>
    </Header>
  );
};

HeaderContainer.propTypes = {
  position: PropTypes.oneOf(['relative', 'fixed']),
};

HeaderContainer.defaultProps = {
  position: 'relative',
};

export default HeaderContainer;
