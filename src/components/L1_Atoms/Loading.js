import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RaccoonRun from '../../img/raccoon_run.gif';

const Wrapper = styled.div.attrs((props) => {
  return {
    style: {
      backgroundColor: `${props.bgColor}`,
      height: `${props.height}`,
    },
  };
})`
  transition: all 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoadingContainer = styled.div.attrs((props) => {
  return {
    style: {
      backgroundColor: `${props.rdColor}`,
    },
  };
})`
  height: 200px;
  width: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 100px;
  flex-direction: column;
`;

const LoadingImg = styled.img`
  width: 117px;
  height: 54px;
`;

const LoadingMessage = styled.p`
  color: #deabab;
  font-size: 12px;
  margin-top: 15px;
`;

/** 背景色を可変にするより、Wrapperの有無を操作できたほうが良いかもしれない。 */
const Loading = (props) => {
  return (
    <Wrapper bgColor={props.bgColor} height={props.height}>
      <LoadingContainer rdColor={props.rdColor}>
        <LoadingImg src={RaccoonRun} alt="loading" />
        <LoadingMessage>Now Loading ...</LoadingMessage>
      </LoadingContainer>
    </Wrapper>
  );
};

Loading.propTypes = {
  bgColor: PropTypes.string,
  height: PropTypes.string,
  rdColor: PropTypes.string,
};

Loading.defaultProps = {
  bgColor: '#61b1c8',
  height: '75vh',
  rdColor: '#e6e6e6',
};

export default Loading;
