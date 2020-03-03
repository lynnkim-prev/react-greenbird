import React, { useState } from "react";
import styled, { css } from "styled-components";

// styled component button
const ButtonStyle = styled.button`
  width: 5rem;
  height: 2rem;
  margin: 1rem;
  &:hover {
    opacity: 0.5;
  }

  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#f1f3f5");
  const onIncrement = () => {
    setCount(prevState => prevState + 1);
    setColor("#d3f9d8");
  };

  const onDecrement = () => {
    setCount(prevState => prevState - 1);
    setColor("#ffe3e3");
  };

  return (
    <>
      <h2>{count}</h2>
      <ButtonStyle count={count} color={color} onClick={onIncrement}>
        increment
      </ButtonStyle>
      <ButtonStyle count={count} color={color} onClick={onDecrement}>
        decrement
      </ButtonStyle>
    </>
  );
};

export default Counter;
