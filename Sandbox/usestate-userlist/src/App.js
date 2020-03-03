import React, { useState, useRef } from "react";
import CreateUser from "./CreateUser";
import ListUser from "./ListUser";

const countIsActive = users => {
  return users.filter(user => user.isActive).length;
};

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
      isActive: true
    },
    {
      id: 2,
      username: "lynn",
      email: "lynn@example.com",
      isActive: false
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      isActive: false
    }
  ]);

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const nextId = useRef(4);

  const onRegister = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      isActive: false
    };
    setUsers(users => users.concat(user));
    setInputs({ username: "", email: "" });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users => users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  const activeUserNum = countIsActive(users);

  return (
    <>
      <div>
        input: {username} {email}
      </div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onRegister={onRegister}
      />
      <ListUser onRemove={onRemove} onToggle={onToggle} users={users} />

      <div>is active: {activeUserNum}</div>
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
