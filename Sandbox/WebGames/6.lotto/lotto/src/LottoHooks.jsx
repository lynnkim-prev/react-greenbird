import React, { useEffect, useRef, useState } from 'react';
import Ball from './Ball';

function getSelectedNumbers() {
  console.log('selectedNumbers');
  const candidate = Array(45)
    .fill()
    .map((v, i) => {
      return i + 1;
    });
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const winningNumberArr = shuffle.slice(0, 6).sort((a, b) => {
    return a - b;
  });
  const bonusNumber = shuffle.pop();

  return [...winningNumberArr, bonusNumber];
}

const Lotto = () => {
  const [selectedNumbers, setSelectedNumbers] = useState(getSelectedNumbers());
  console.log(selectedNumbers);
  const [winningNumberArr, setWinningNumberArr] = useState([]);
  const [bonusNumber, setBonusNumber] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    console.log('useEffect');
    for (let i = 0; i < selectedNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinningNumberArr(prevState => {
          return [...prevState, selectedNumbers[i]];
        });
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonusNumber(selectedNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach(v => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); // input이 빈 배열이면 componentDidMount와 동일하다.

  const onClickRedo = () => {
    setSelectedNumbers(getSelectedNumbers());
    setWinningNumberArr([]);
    setBonusNumber(null);
    setRedo(false);
    timeouts.current = [];
  };

  return (
    <>
      <p>winning numbers</p>
      <div id='resultScreen'>
        {winningNumberArr.map(v => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <p>Bonus number</p>
      {bonusNumber && <Ball number={bonusNumber} />}
      {redo && <button onClick={redo ? onClickRedo : () => {}}>one more time? </button>}
    </>
  );
};

export default Lotto;
