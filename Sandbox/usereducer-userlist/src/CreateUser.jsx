import React, { useCallback, useContext, useRef } from "react";
import { UserDispatch } from "./App";
import useInputs from "./hooks/useInputs";

const CreateUser = () => {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: ""
  });

  const dispatch = useContext(UserDispatch);

  console.log(username, email);
  const nextId = useRef(4);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: { id: nextId.current, username, email, active: false }
    });
    reset();
    nextId.current += 1;
  };

  // action "CREATE_USER" 액션 디스패치
  // input 상태 - username, email의 경우에는 이전에 만든 useInputs cusom hooks사용
  // nextId값을 여기서 관리.
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default React.memo(CreateUser);
