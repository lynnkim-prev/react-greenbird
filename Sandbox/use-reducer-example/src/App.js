import React from "react";
import CounterTemplate from "./CounterTemplate";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
    background: #dbe4ff;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <CounterTemplate />
    </>
  );
};

export default App;
