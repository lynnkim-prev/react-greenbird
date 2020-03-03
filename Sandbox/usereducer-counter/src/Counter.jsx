import React, { useReducer } from "react";
import styled, { css } from "styled-components";

const initialState = {
  count: 0
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {count: state.count + 1};
    case "DECREMENT":
      return {count: state.count - 1};
    default:
      return state;
  }
};



const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const onIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  console.log(state);
  return (
    <>
      <h2>Counter</h2>
      <div>{state.count}</div>
      <button onClick={onIncrement} >INCREMENT</button>
      <button onClick={onDecrement} >DECREMENT</button>
    </>
  );
  console.log(state);
};

export default Counter;
