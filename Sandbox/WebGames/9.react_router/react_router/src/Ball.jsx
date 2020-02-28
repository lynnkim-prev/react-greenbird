import React, { memo } from 'react';

const Ball = memo(({ number }) => {
  let backgroundColor;
  if (number <= 10) {
    backgroundColor = 'red';
  } else if (number <= 20) {
    backgroundColor = 'orange';
  } else if (number <= 30) {
    backgroundColor = 'yellow';
  } else if (number <= 40) {
    backgroundColor = 'blue';
  } else {
    backgroundColor = 'green';
  }
  return (
    <div className='ball' style={{ backgroundColor }}>
      {number}
    </div>
  );
});

export default Ball;
