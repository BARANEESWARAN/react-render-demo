import React, { useState } from "react";
const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("useState rendered");
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count -{count}</button>
      <button onClick={() => setCount(0)}>Count 0 -{count}</button>
      <button onClick={() => setCount(5)}>Count 5 -{count}</button>
    </>
  );
};
export default UseState;
