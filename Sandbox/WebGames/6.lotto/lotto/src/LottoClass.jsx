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

  const winningNumberArr = shuffle.slice(0, 6).sort((a, b) => {
    return a - b;
  });

  const bonusNumber = shuffle.pop();

  return { winningNumberArr: winningNumberArr, bonusNumber: bonusNumber };
}

class Lotto extends Component {
  state = {
    selectedNumbers: selectedNumbers(),
    winningNumberArr: [],
    bonusNumber: null,
    redo: false,
  };

  timeouts = [];

  runTimeouts = () => {
    const { selectedNumbers } = this.state;

    for (let i = 0; i < selectedNumbers.winningNumberArr.length; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState(prevState => {
          return { winningNumberArr: [...prevState.winningNumberArr, selectedNumbers.winningNumberArr[i]] };
        });
      }, (i + 1) * 1000);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonusNumber: selectedNumbers.bonusNumber,
        redo: true,
      });
    }, 7000);
  };

  // 여기서 숫자 하나씩 나오게.. 1번 .. 1, 2번... 1,2,3번...
  componentDidMount() {
    if (this.state.winningNumberArr.length === 0) {
      this.runTimeouts();
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach(v => {
      clearTimeout(v);
    });
  }

  onClickRedo = () => {
    this.setState({
      selectedNumbers: selectedNumbers(),
      winningNumberArr: [],
      bonusNumber: null,
      redo: false,
    });

    this.timeouts = [];
    this.runTimeouts();
  };

  render() {
    const { winningNumberArr, bonusNumber, redo } = this.state;
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
        {redo && <button onClick={redo ? this.onClickRedo : () => {}}>one more time? </button>}
      </>
    );
  }
}

export default Lotto;
