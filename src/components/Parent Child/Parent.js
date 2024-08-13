import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("Parent rendered");
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count -{count}</button>
      <button onClick={() => setCount(0)}>Count 0 -{count}</button>
      <button onClick={() => setCount(5)}>Count 5 -{count}</button>
      <Child />
    </>
  );
};
export default Parent;
