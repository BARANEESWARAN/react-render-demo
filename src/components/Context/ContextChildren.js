import React from "react";

export const ChildA = () => {
  console.log("ChildA render");
  return (
    <div>
      <p>ChildA</p>
      <ChildB />
    </div>
  );
};

export const ChildB = () => {
  console.log("ChildB render");
  return (
    <div>
      <p>ChildB</p>
      <ChildC />
    </div>
  );
};

export const ChildC = () => {
  console.log("ChildC render");
  return (
    <div>
      <p>ChildC</p>
    </div>
  );
};
