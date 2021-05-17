import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeaderStart from '../L2_Molecules/HeaderStart';
import HeaderEnd from '../L2_Molecules/HeaderEnd';

const Header = styled.header.attrs(props => {
  return {
    style: {
      position: `${props.position}`,
    }
  }
})`
  background-color: #fafbfc;
  border-bottom:  calc(.1rem/1.6) solid #e5e5e5;
  height:  calc(4.5rem/1.6);
  left: 0;
  top: 0;
  width: 100%;
  z-index: 50;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width:  calc(60rem/1.6);
  max-width:  calc(120rem/1.6);
  margin: 0 auto;
  padding:  calc(.5rem/1.6)  calc(2rem/1.6);
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
  position: PropTypes.oneOf(["relative","fixed"])
}

HeaderContainer.defaultProps = {
  position: "relative"
}

export default HeaderContainer;
