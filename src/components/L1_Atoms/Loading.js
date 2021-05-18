import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 75vh;
  transition: all 1s;
  background-color: #61b1c8;
  display: flex;
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  margin: 200px auto;
  background-color: #fff;
  border-radius: 100%;
  animation: sk-scaleout 1s infinite ease-in-out;

  @keyframes sk-scaleout {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

const Loading = (props) => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default Loading;
