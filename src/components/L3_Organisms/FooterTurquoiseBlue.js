import React from 'react';
import styled from 'styled-components';
import FooterIndexPageLink from "../L2_Molecules/FooterIndexPageLink"
import FooterCopyrightAria from "../L2_Molecules/FooterCopyrightAria"

const Footer = styled.footer`
  border-top:  calc(.1rem/1.6) solid #e5e5e5;
  height:  calc(5rem/1.6);
  left: 0;
  width: 100%;
  z-index: 50;
`;

const FooterTurquoiseBlue = (props) => {
  return (
    <Footer>
      <FooterIndexPageLink/>
      <FooterCopyrightAria/>
    </Footer>
  );
};

export default FooterTurquoiseBlue;
