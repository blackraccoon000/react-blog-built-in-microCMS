import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ViewButton from '../L1_Atoms/ViewButton';
import fetchPages from '../../microcms/fetchPages';

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
    props.viewsUpdater('acquired', 4);
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
  viewsUpdater: (queries, getLimit) => fetchPages(queries, getLimit),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterIndexPageLink);

export { FooterIndexPageLink };
