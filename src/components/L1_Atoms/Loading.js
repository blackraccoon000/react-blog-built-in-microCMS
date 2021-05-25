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

const LoadingContainer = styled.div`
  background-color: #e6e6e6;
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

const Loading = (props) => {
  return (
    <Wrapper>
      <LoadingContainer>
        <LoadingImg src={RaccoonRun} alt="loading" />
        <LoadingMessage>Now Loading ...</LoadingMessage>
      </LoadingContainer>
    </Wrapper>
  );
};

export default Loading;
