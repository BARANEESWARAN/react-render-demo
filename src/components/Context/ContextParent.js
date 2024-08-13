import React, { useState } from "react";

export const counterContext = React.createContext();
const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("parentContext render");

  const CounterProvider = counterContext.Provider;
  return (
    <>
      <div>ContextParent</div>
      <button onClick={() => setCount((c) => c + 1)}>count-{count}</button>
      <CounterProvider value={count}>{children}</CounterProvider>
    </>
  );
};
export default ContextParent;
