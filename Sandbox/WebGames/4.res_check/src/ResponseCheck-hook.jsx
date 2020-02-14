import React, { useRef, useState } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세용");
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef(); // 화면을 바꾸고 싶지는 않은데, 값이 바뀌는 것들, 무조건 current로 접근해야 한다
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === "waiting") {
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금 클릭 ㄲ");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
      setState("ready");
      setMessage("기다렸다가 초록색되면 클릭 ㄲㄱ");
    } else if (state === "ready") {
      clearTimeout(timeout.current); // Timeout 초기화. 없으면 땡인데도 2~3초 랜덤 먹음
      setState("waiting");
      setMessage("성급했어요ㅉㅉ 다시 클릭해서 시작하시죠??");
    } else if (state === "now") {
      endTime.current = new Date();
      setState("waiting");
      setMessage("잘했어요 클릭해서 또 시작하세요!");
      setResult(prevResult => {
        return [...prevResult, endTime.current - startTime.current];
      });
      console.log("굿잡");
    }
  };

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : ( // 삼항연산자. result가 없어서 array에 보여줄게 없을 때 null로 처리해서 안보이게 함
      <>
        <div>평균시간:{result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋ㄲ</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
