import React, { useReducer } from 'react';
import Form from './Form';
import Table from './Table';

const initialState = { 
  tableData: [],
  timer: 0,
  result: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, timer, result } = state;

  return (
    <>
      <Form />
      <div>{timer}</div>
      <Table />
      <div>{result}</div>
    </>
  );
};

export default MineSearch;
