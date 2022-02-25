import React from 'react';
import styled, {keyframes} from "styled-components";
import Circle from "./Circle";

function App() {
  return ( 
    <div>
      <Circle bgColor="teal" radius={200} borderColor="black"/>
      <Circle bgColor="tomato" radius={100} text="안녕"/>
    </div>
  );
}

export default App;
