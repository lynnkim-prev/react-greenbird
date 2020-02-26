import React from 'react';

const Tr = ({ rowData }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map(td => (
          <td>{''}</td>
        ))}
    </tr>
  );
};

export default Tr;
