import React, { createContext, useContext } from "react";

const Child = ({ text }) => {
  return <div>Hello</div>;
};

const Parent = ({ text }) => {
  return <Child text={text} />;
};

const GrandParent = ({ text }) => {
  return <Parent text={text} />;
};

const ContextSample = () => {
  return <GrandParent text="good" />;
};

export default ContextSample;
