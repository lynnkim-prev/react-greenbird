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

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <ListUser users={users} />
      <div>num of active users : {count} </div>
    </UserDispatch.Provider>
  );
};

export default App;
