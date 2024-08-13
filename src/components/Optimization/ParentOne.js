import React, { useState } from "react";

const ParentOne = ({ newCount, children }) => {
  const [count, setCount] = useState(0);

  console.log("ParentOne rendered");

  return (
    <>
      <div>ParentOne (received from Grandparent: {newCount})</div>
      <button onClick={() => setCount((c) => c + 1)}>
        Parent count - {count}
      </button>
      {children}
    </>
  );
};

export default ParentOne;
