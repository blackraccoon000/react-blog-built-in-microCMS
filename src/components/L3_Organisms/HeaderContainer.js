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
  border-bottom: 1px solid #e5e5e5;
  height: 45px;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 50;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 600px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px 20px;
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
