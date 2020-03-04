import React, { createContext, useContext, useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    text: "Create a project",
    done: true
  },
  {
    id: 2,
    text: "Style components",
    done: true
  },
  {
    id: 3,
    text: "Yawn",
    done: true
  },
  {
    id: 4,
    text: "Create context",
    done: false
  },
  {
    id: 5,
    text: "Build functionalities",
    done: false
  }
];

// actions: CREATE, TOGGLE, REMOVE
// (type, to do) (id) (id)
const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

// custom hook

export const useTodoState = () => {
  return useContext(TodoStateContext);
};

export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
};
