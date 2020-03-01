import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="Create a project" done={true} />
      <TodoItem text="Style components" done={true} />
      <TodoItem text="Yawn" done={true} />
      <TodoItem text="Create context" done={false} />
      <TodoItem text="Build functionalities" done={false} />
    </TodoListBlock>
  );
};

export default TodoList;
