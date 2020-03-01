import React from "react";
import Counter from "./Counter";
import styled, { css } from "styled-components";

const CounterTemplateStyle = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
`;

const CounterTemplate = () => {
  return (
    <CounterTemplateStyle>
      <Counter />
    </CounterTemplateStyle>
  );
};

export default CounterTemplate;
