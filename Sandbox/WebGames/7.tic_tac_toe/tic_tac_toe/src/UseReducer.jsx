import React, { useReducer } from 'react';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onClickDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <>
      <div>{state.count}</div>
      <button onClick={onClickIncrement}>INCREMENT</button>
      <button onClick={onClickDecrement}>DECREMENT</button>
    </>
  );
};

export default App;
