import React from "react";

const ChildThree = ({ children, name }) => {
  console.log("ChildThree rendered");

  return (
    <div>
      {children} {name}
    </div>
  );
};

export default ChildThree;

export const MemoziedChildThree = React.memo(ChildThree);
