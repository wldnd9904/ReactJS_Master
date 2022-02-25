import { useState } from "react";
import styled from "styled-components";

const Container = styled.div<ContainerProps>`
    width:${props=>props.radius*2}px;
    height:${props=>props.radius*2}px;
    background-color: ${props=>props.bgColor};
    border-radius:${props=>props.radius}px;
    border:3px solid ${props => props.borderColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface ContainerProps {
    bgColor:string;
    borderColor:string;
    radius:number;
    text?:string;
}
interface CircleProps {
    bgColor:string;
    borderColor?:string;
    radius:number;
    text?:string;
}

function Circle({bgColor, radius, borderColor, text = "default text"}: CircleProps) {
    const [counter, setCounter] = useState(1);
    setCounter(2)
    return <Container radius={radius} bgColor={bgColor} borderColor={borderColor ?? bgColor}>{text}</Container>;
}

export default Circle;