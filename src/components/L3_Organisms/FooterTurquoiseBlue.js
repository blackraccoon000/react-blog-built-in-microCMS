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
      {props.status.availableViews < props.status.totalCount && (
        <FooterIndexPageLink />
      )}
      <FooterCopyrightAria />
    </Footer>
  );
};

FooterTurquoiseBlue.propTypes = {
  articles: PropTypes.array,
  status: PropTypes.object,
};

FooterTurquoiseBlue.defaultProps = {
  articles: pages,
  status: {
    availableViews: 2,
    totalCount: 8,
  },
};

const mapStateToProps = (state) => {
  const { articles, views, status } = state;
  return {
    // articles,
    // views,
    status,
  };
};

export default connect(mapStateToProps)(FooterTurquoiseBlue);
export { FooterTurquoiseBlue };
