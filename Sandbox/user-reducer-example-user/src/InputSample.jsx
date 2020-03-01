import React, { useState } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = e => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // 다이나믹 키 밸류 설정. name키를 가진 값을 value로 설정. name: value, nickname: value
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
  };

  console.log(inputs);
  return (
    <>
      <input name="name" value={name} onChange={onChange} placeholder="name" />
      <input
        name="nickname"
        value={nickname}
        onChange={onChange}
        placeholder="nickname"
      />
      <button onClick={onReset}>Reset</button>
      <h2>
        Value: {name} ({nickname})
      </h2>
    </>
  );
};

export default InputSample;
