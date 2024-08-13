import React, { useState } from "react";
import { ChildA } from "./ContextChildren";
const ContextParent = () => {
  const [count, setCount] = useState(0);
  console.log("parentContext render");
  return (
    <>
      <div>ContextParent</div>
      <button onClick={() => setCount((c) => c + 1)}>count-{count}</button>
      <ChildA />
    </>
  );
};
export default ContextParent;
