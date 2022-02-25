import React from 'react';
import styled, {keyframes} from "styled-components";
import Circle from "./Circle";

function App() {
  return ( 
    <div>
      <Circle bgColor="teal" radius={200}/>
      <Circle bgColor="tomato" radius={100}/>
    </div>
  );
}

export default App;
