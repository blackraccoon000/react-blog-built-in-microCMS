import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ViewButton from '../L1_Atoms/ViewButton';

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
  return (
    <Wrapper bGColor={props.bGColor}>
      <Container>
        <ViewButton
          btnMargin={props.btnMargin}
          bGColor={props.bGColor}
          color={props.color}
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

export default FooterIndexPageLink;
