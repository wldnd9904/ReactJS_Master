import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
from{
  transform:rotate(0deg);
  border-radius:10px;
}
to{
  transform:rotate(360deg);
  border-radius:100px;
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
      <Box>
        <span>asdf</span>
      </Box>
    </Wrapper>
  );
}

export default App;
