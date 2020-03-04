import React, {
  useRef,
  useReducer,
  useMemo,
  useCallback,
  createContext
} from "react";
import ListUser from "./ListUser";
import CreateUser from "./CreateUser";

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
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: { ...state.inputs, [action.name]: action.value }
      };
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

export const UserDispatch = createContext(null);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;
  const { username, email } = state.inputs;

  console.log(state.inputs);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value
    });
  }, []);

  const nextId = useRef(4);

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
    nextId.current += 1;
  }, [username, email]);

  const count = useMemo(() => countActiveUsers(users), [users]);
  console.log(users);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <ListUser users={users} />
      <div>num of active users : {count} </div>
    </UserDispatch.Provider>
  );
};

export default App;
