import React, { useCallback, useReducer } from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: 'o',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
};

const SET_WINNER = 'SET_WINNER';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return { ...state, winner: action.winner }; // 새 객체 만들어서 spread로 기존state복사 + 바뀐 값만 바꿔주기
  }
};

const TicTacToe = () => {
  const [{winner, turn, tableData}, dispatch] = useReducer(reducer, initialState);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: 'o' }); // action.type, action.winner
  }, []);

  return (
    <>
      <Table onClick={onClickTable} tableData={tableData} />
      {winner && <div>{winner}님의 승리!</div>}
    </>
  );
};

export default TicTacToe;
