import React from 'react';
import Tr from './Tr';

const Table = ({ onClick, tableData }) => {
  return (
    <Table onClick={onClick}>
      {Array(tableData.length) // tableData.length = 3 -> 요소가 3개인 배열이 만들어진다. -> 그 배열을 각각 Tr로 만드는 것
        .fill()
        .map(tr => (
          <Tr />
        ))}
    </Table>
  );
};

export default Table;
