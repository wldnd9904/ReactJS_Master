import React from 'react';
import styled, {keyframes} from "styled-components";

const Title = styled.h1`
color: ${(props) => props.theme.textColor};
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  text-color: ${(props) => props.theme.textColor};
`;
const animation = keyframes`
from{
  transform:rotate(0deg);
  border-radius:30px;
}
50%{
  border-radius:100px;
}
to{
  transform:rotate(360deg);
  border-radius:30px;
}`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 36px;
    transition: 1s;
    &:hover {
      font-size: 46px;
      color: white;
    }
  }
`;

function App() {
  return ( 
       <Wrapper>
    <span>Hihi</span>
    <Box>
      <span>asdf</span>
    </Box>
  </Wrapper>
  );
}

export default App;
