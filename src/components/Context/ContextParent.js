import React, { useState } from "react";
import { ChildA } from "./ContextChildren";
const ContextParent = () => {
  const [count, setCount] = useState();
  console.log("parentContext render");
  return (
    <>
      <div>ContextParent</div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        count-{count}
      </button>
      <ChildA />
    </>
  );
};
export default ContextParent;
