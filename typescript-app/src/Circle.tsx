import styled from "styled-components";

const Container = styled.div<ContainerProps>`
    width:${props=>props.radius}px;
    height:${props=>props.radius}px;
    background-color: ${props=>props.bgColor};
    border-radius:${props=>props.radius/2}px;
`;

interface ContainerProps {
    bgColor: string;
    radius:number;
}

interface CircleProps {
    bgColor:string;
    radius:number;
}

function Circle({bgColor, radius}: CircleProps) {
    return <Container radius={radius} bgColor={bgColor}/>;
}

export default Circle;