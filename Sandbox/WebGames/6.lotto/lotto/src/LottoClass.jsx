import React, { Component } from 'react';
import Ball from './Ball';

function selectedNumbers() {
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

  const winningNumber = shuffle.slice(0, 6).sort((a, b) => {
    return a - b;
  });

  const bonusNumber = shuffle.pop();

  return { winningNumber: winningNumber, bonusNumber: bonusNumber };
}

class Lotto extends Component {
  state = {
    selectedNumberArr: selectedNumbers(),
    winNumberArr: selectedNumbers().winningNumber,
    bonusNumber: selectedNumbers().bonusNumber,
    redo: false,
  };

  onClickRedo = () => {};

  render() {
    const { winNumberArr, bonusNumber, redo } = this.state;
    return (
      <>
        <p>winning numbers</p>
        <div id='resultScreen'>
          {winNumberArr.map(v => (
            <Ball key={v} number={v} />
          ))}
        </div>
        <p>Bonus number</p>
        {bonusNumber && <Ball number={bonusNumber} />}
        <button onClick={redo ? this.onClickRedo : () => {}}>one more time? </button>
      </>
    );
  }
}

export default Lotto;
