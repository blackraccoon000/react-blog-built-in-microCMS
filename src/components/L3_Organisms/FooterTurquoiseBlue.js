import React from 'react';
import styled from 'styled-components';
import FooterIndexPageLink from '../L2_Molecules/FooterIndexPageLink';
import FooterCopyrightAria from '../L2_Molecules/FooterCopyrightAria';

const Footer = styled.footer`
  height: calc(50rem / 16);
  left: 0;
  width: 100%;
  z-index: 50;
`;

const FooterTurquoiseBlue = (props) => {
  return (
    <Footer>
      <FooterIndexPageLink />
      <FooterCopyrightAria />
    </Footer>
  );
};

export default FooterTurquoiseBlue;
