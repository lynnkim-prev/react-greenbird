import React, { useReducer } from "react";
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

const initialState = {
  count: 0,
  color: "#f1f3f5"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, color: "#d3f9d8" };
    case "DECREMENT":
      return { count: state.count - 1, color: "#ffe3e3" };
    default:
      return Error("error!");
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  console.log(state)
  return (

    <>
      <h2>{state.count}</h2>
      <ButtonStyle count={state.count} color={state.color} onClick={onIncrement}>
        increment
      </ButtonStyle>
      <ButtonStyle count={state.count} color={state.color} onClick={onDecrement}>
        decrement
      </ButtonStyle>
    </>
  );
};

export default Counter;
