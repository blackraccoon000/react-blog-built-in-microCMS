import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import pages from '../../tests/fixtures/pages';
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
      {props.views.availableViews < props.views.obtainable && (
        <FooterIndexPageLink />
      )}
      <FooterCopyrightAria />
    </Footer>
  );
};

FooterTurquoiseBlue.propTypes = {
  pages: PropTypes.array,
  views: PropTypes.object,
};

FooterTurquoiseBlue.defaultProps = {
  pages: pages,
  views: {
    availableViews: 2,
    obtainable: 8,
  },
};

const mapStateToProps = (state) => {
  // console.log('FT-state:', state);
  return {
    pages: state.contents.pages,
    views: state.contents.views,
  };
};

export default connect(mapStateToProps)(FooterTurquoiseBlue);
export { FooterTurquoiseBlue };
