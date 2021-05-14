import React from 'react';
import styled from 'styled-components';
import FooterItems from '../L2_Molecules/FooterItems';
import FooterIcons from '../L2_Molecules/FooterIcons';

const Footer = styled.footer`
  background-color: #fafbfc;
  border-top: 1px solid #e5e5e5;
  height: 50px;
  left: 0;
  position: fixed;
  bottom: 0;
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

const FooterContainer = (props) => {
  return (
    <Footer>
      <Container>
        <FooterItems />
        <FooterIcons />
      </Container>
    </Footer>
  );
};

export default FooterContainer;
