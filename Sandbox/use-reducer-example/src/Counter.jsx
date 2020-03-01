import React, { useState } from "react";
import styled, {css} from "styled-components";




const ButtonStyle = styled.button`
  width: 5rem;
  height: 2rem;
  margin: 1rem;
`;



const Counter = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(prevState => prevState + 1);
  };

  const onDecrement = () => {
    setCount(prevState => prevState - 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <ButtonStyle value={count} onClick={onIncrement}>
        increment
      </ButtonStyle>
      <ButtonStyle value={count} onClick={onDecrement}>
        decrement
      </ButtonStyle>
    </>
  );
};

export default Counter;
