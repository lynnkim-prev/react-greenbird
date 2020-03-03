import React, { useState } from "react";
import CreateUser from "./CreateUser";
import ListUser from "./ListUser";

const App = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });
  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "darin",
      email: "public.darin@gmail.com",
      active: true
    },
    {
      id: 2,
      username: "lynn",
      email: "lynn@example.com",
      active: false
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false
    }
  ]);

  const onChange = e => {
    const [name, value] = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onRegister = () => {};

  const onRemove = () => {};

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onRegister={onRegister}
      />
      <ListUser onRemove={onRemove} users={users} />
      <div>{username} {email}</div>
    </>
  );
};

export default App;

// pseudocode
/*

function
- onCreate : id, username, email, isActive
- onDelete :
- onToggle : isActive 토글


**********App (state) Component
  CreateUser + UserList렌더링
  state: inputs(username, email), users(id, username, email, isActive)
-onChange
- onCreate : id, username, email, isActive
- onDelete :
- onToggle : isActive 토글

**********CreateUser Component - 상단 input
   -onChange
  - onCreate : id, username, email, isActive
  
  
**********UserList Component - 하단 디스플레이
- onDelete :
- onToggle : isActive 토글

*
* */
