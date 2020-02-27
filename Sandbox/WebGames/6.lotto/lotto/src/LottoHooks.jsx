import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Ball from './Ball';

function getSelectedNumbers() {
  console.log('getSelectedNumbers');
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
  // Hooks는 기본적으로 함수 컴포넌트 전체가 다같이 재실행되는데, useMemo를 사용하면 복잡한 함수 실행한 결과값을 저장해둘 수 있다.
  // useMemo: 함수의 리턴 값을 기억. ([...winningNumberArr, bonusNumber])
  // []배열에 들어간 요소가 바뀌기 전까지 계속 같은 값을 갖고있는다. 콘솔찍어서 확인하면 한번만 실행됨!
  // Hooks안에 함수가 있으면, 기본적으로 console.log하나씩 다 넣어놓고, 진짜 필요할때만 실행되는게 맞는지 확인하고 메모이제이션.

  // useMemo : 함수의 리턴 값 기억 / useCallback: 함수 자체를 기억
  const lottoNumbers = useMemo(() => getSelectedNumbers(), []);
  const [selectedNumbers, setSelectedNumbers] = useState(lottoNumbers);
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

  // useCallback
  const onClickRedo = useCallback(() => {
    console.log('useCallback');
    console.log(selectedNumbers);
    setSelectedNumbers(getSelectedNumbers());
    setWinningNumberArr([]);
    setBonusNumber(null);
    setRedo(false);
    timeouts.current = [];
  }, [selectedNumbers]);

  return (
    <>
      <p>Winning Numbers</p>
      <div id='resultScreen'>
        {winningNumberArr.map(v => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <p>Bonus Number</p>
      {bonusNumber && <Ball number={bonusNumber} />}
      {redo && <button onClick={redo ? onClickRedo : () => {}}>one more time? </button>}
    </>
  );
};

export default Lotto;
