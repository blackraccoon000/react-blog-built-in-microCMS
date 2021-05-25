import React from 'react';
import styled from 'styled-components';
import RaccoonRun from '../../img/raccoon_run.gif';

const Wrapper = styled.div`
  height: 75vh;
  transition: all 1s;
  background-color: #61b1c8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoadingImg = styled.img`
  /* position: relative; */
  width: 117px;
  height: 54px;
  /* animation: imgAnimation 12s infinite ease-in-out;

  @keyframes imgAnimation {
    0% {
      right: -100%;
    }
    100% {
      right: 100%;
    }
  } */
`;

const LoadingMessage = styled.p`
  color: #e6e6e6;
  font-size: 12px;
  margin-top: 15px;
`;

const Loading = (props) => {
  return (
    <Wrapper>
      <LoadingImg src={RaccoonRun} alt="loading" />
      <LoadingMessage>Now Loading ...</LoadingMessage>
    </Wrapper>
  );
};

export default Loading;
