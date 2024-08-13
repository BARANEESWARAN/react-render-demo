import React from "react";

const ChildTwo = () => {
  console.log("ChildTwo rendered");

  return <div>Child</div>;
};

export default ChildTwo;

export const MemoziedChildTwo = React.memo(ChildTwo);
