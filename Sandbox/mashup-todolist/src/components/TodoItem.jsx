import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/all";
import { useTodoDispatch } from "../TodoContext";

// 좌측 체크 원
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px; // icon 크기
  display: flex;
  align-items: center; // 체크 아이콘이 동그라미의 중앙에 나타나도록 함.
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  // props.done이 있다면 css 불러오기.
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

// 중간 텍스트
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

// 우측 쓰레기통 아이콘
const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

// 세개 묶음
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      // 셀렉터 사용. 달러 괄호 괄호 -> Remove를 특정 상황에만 스타일을 넣어주고 싶을 때.
      opacity: 1;
    }
  }
`;

const TodoItem = ({ id, done, text }) => {
  const dispatch = useTodoDispatch();

  const onToggle = () => {
    dispatch({ type: "TOGGLE", id });
  };

  const onRemove =() => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
