import React, { useCallback, useReducer } from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: '0',
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
      return {
        ...state, // state.winner = action.winner 하면 안됨! 항상 새로운 객체를 만들어줘야 함
        winner: action.winner, // 기존 state를 복사해놓고 + 바뀌는 부분(winner)만 바꿔주기
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('0');
  // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], , ['', '', '']]);

  const onClickTable = useCallback(() => {
    // dispatch - action. dispatch안에 들어가는건 action이라고 부름. action object.
    // dispatch한다 = action을 실행한다. conduct action
    // 액션만 해서는 자동으로 state가 바뀌는게 아니고, action을 해석해서 state를 해석해서 직접 바꿔주는 역할이 필요하다 (reducer)
    // 액션을 dispatch -> reducer 실행
    dispatch({ type: SET_WINNER, winner: '0' });
  }, []);

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} />
      {state.winner && <div>{state.winner}님의 승리!</div>}
    </>
  );
};

export default TicTacToe;
