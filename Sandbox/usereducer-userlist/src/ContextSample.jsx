import React, { createContext, useContext, useState } from "react";

const MyContext = createContext("defaultValue");

const Child = () => {
  const text = useContext(MyContext);
  return <div>Hello {text}</div>;
};

const Parent = () => {
  return <Child/>;
};

const GrandParent = () => {
  return <Parent/>;
};

const ContextSample = () => {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value? 'good' : 'bad'}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>click me</button>
    </MyContext.Provider>
  );
};

export default ContextSample;
