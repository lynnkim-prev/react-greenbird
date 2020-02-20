import React from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: '0',
  tableData: [['', '', ''], ['', '', ''], , ['', '', '']],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_WINNER':
      return {
        ...state,
        winner: action.winner,
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('0');
  // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], , ['', '', '']]);

  const onClickTable = useCallback(() => {
    dispatch({ type: 'SET_WINNER', winner: '0' });
  }, []);

  return (
    <>
      <Table onClick={onClickTable} />
      {winner && <div>{winner}님의 승리!</div>}
    </>
  );
};

export default TicTacToe;
