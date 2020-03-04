import React, { useRef, useReducer, useMemo, useCallback } from "react";
import ListUser from "./ListUser";
import CreateUser from "./CreateUser";
import useInputsReducer from "./hooks/useInputsReducer";
// import useInputs from "./hooks/useInputs";


const countActiveUsers = users => {
  console.log("counting the number of active users..");
  return users.filter(user => user.active).length;
};

const initialState = {
  inputs: { username: "", email: "" },
  users: [
    {
      id: 1,
      username: "darin",
      email: "public.velopert@gmail.com",
      active: true
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
  }
};

const App = () => {
  const [{username, email}, onChange, reset] = useInputsReducer({
    username:'',
    email:''
  })

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);


  const { users } = state;

  console.log(state.inputs);


  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
        active: false
      }
    });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);

  const onRemove = useCallback(id => {
    dispatch({
      type: "REMOVE_USER",
      id
    });
  }, []);

  const onToggle = useCallback(id => {
    dispatch({
      type: "TOGGLE_USER",
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  console.log(users);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <ListUser users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count} </div>
    </>
  );
};

export default App;
