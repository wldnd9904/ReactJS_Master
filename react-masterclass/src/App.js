import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  width: 100vw;
  height: 100vh;
`;

const rotationAnimation = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
`;

const Emoji = styled.span`
  font-size: 50px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
  animation: ${rotationAnimation} linear 3s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    animation: none;
    &:hover {
      animation: ${rotationAnimation} linear 0.5s infinite;
    }
  }
`;

/*const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;
*/
function App() {
  return (
    <Father>
      <Box bgColor="tomato">
        <Emoji>^_^</Emoji>
      </Box>
    </Father>
  );
}

export default App;
