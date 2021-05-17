import React from 'react';
import styled from 'styled-components';
import FooterItems from '../L2_Molecules/FooterItems';
import FooterIcons from '../L2_Molecules/FooterIcons';

const Footer = styled.footer`
  background-color: #fafbfc;
  border-top:  calc(.1rem/1.6) solid #e5e5e5;
  height:  calc(5rem/1.6);
  left: 0;
  width: 100%;
  z-index: 50;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width:  calc(60rem/1.6);
  max-width:  calc(120rem/1.6);
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
