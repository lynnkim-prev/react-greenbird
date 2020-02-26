import React from 'react';
import Tr from './Tr';

const Table = ({ onClick, tableData }) => {
  return (
    <>
      {console.log(tableData.length)}
      <table onClick={onClick}>
        {/* // tableData.length = 3 -> 요소가 3개인 배열이 만들어진다. -> 그 배열을 각각 Tr로 만드는 것 */}
        {Array(tableData.length)
          .fill()
          .map((tr, i) => (
            <Tr rowData={tableData[i]} />
          ))}
      </table>
    </>
  );
};

export default Table;
