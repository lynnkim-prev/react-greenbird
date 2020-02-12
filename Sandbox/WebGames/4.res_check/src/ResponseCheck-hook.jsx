import React, { useState, useEffect } from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세용');
  const [result, setResult] = useState([]);

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('기다렸다가 초록색되면 클릭 ㄲㄱ');
      this.timeout = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭 ㄲ');
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
    } else if (state === 'ready') {
      console.log('땡!!');
      clearTimeout(this.timeout); // Timeout 초기화. 없으면 땡인데도 2~3초 랜덤 먹음
      setState('waiting');
      setMessage('성급했어요ㅉㅉ 다시 클릭해서 시작하시죠??');
      setResult([]);
    } else if (state === 'now') {
      this.endTime = new Date();
      setState('waiting');
      setMessage('잘했어요 클릭해서 또 시작하세요!');
      setResult(prevState => [
        ...prevState.result,
        this.endtime - this.startTime,
      ]);
      console.log('굿잡');
    }
  };

  onReset = () => {
    setResult([]);
  };

  renderAverage = () => {
    return result.length === 0 ? null : ( // 삼항연산자. result가 없어서 array에 보여줄게 없을 때 null로 처리해서 안보이게 함
      <>
        <div>평균시간:{result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={this.onReset}>리셋ㄲ</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={this.onClickScreen}>
        {message}
      </div>
      {this.renderAverage()}
    </>
  );
};

export default ResponseCheck;
