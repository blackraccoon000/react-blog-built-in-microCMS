import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { viewPages } from '../../actions/viewActions';
import ViewButton from '../L1_Atoms/ViewButton';
import pageUpdater from '../../microcms/pageUpdater';

const Wrapper = styled.div.attrs((props) => {
  return {
    style: {
      backgroundColor: `${props.bGColor}`,
    },
  };
})`
  height: auto;
  left: 0;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
`;

const FooterIndexPageLink = (props) => {
  const updater = (e) => {
    // console.log('PropsPages:', props.pages.length);
    // console.log('PropsViewsPC:', props.views.pageCount);
    // console.log('PropsViewsTC:', props.views.totalCount);
    pageUpdater(props, props.views.pageCount, props.views.limitCount);
  };
  return (
    <Wrapper bGColor={props.bGColor}>
      <Container>
        <ViewButton
          btnMargin={props.btnMargin}
          bGColor={props.bGColor}
          color={props.color}
          onClick={updater}
        />
      </Container>
    </Wrapper>
  );
};

FooterIndexPageLink.propTypes = {
  btnMargin: PropTypes.string,
  bGColor: PropTypes.string,
  color: PropTypes.string,
};

FooterIndexPageLink.defaultProps = {
  btnMargin: 'calc(30rem/16) 0 0 0',
  bGColor: '#61b1c8',
  color: '#e6e6e6',
};

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    views: state.views,
  };
};

const mapDispatchToProps = (dispatch) => ({
  viewsUpdater: (views) => dispatch(viewPages(views)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterIndexPageLink);

export { FooterIndexPageLink };
