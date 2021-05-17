import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
  console.log('FT-state:', state);
  return {
    pages: state.pages,
  };
};

export default connect(mapStateToProps)(FooterTurquoiseBlue);
export { FooterTurquoiseBlue };
