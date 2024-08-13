import React, { useState } from "react";
import ParentOne from "./ParentOne";
import ChildOne from "./ChildOne";

const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);

  console.log("GrandParent rendered");

  return (
    <>
      <div>GrandParent</div>
      <button onClick={() => setNewCount((prev) => prev + 1)}>
        Grandparent count - {newCount}
      </button>
      <ParentOne newCount={newCount}>
        <ChildOne />
      </ParentOne>
    </>
  );
};

export default GrandParent;
