import React, { useContext } from "react";
import { counterContext } from "./ContextParent";

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
  const count = useContext(counterContext);
  console.log("ChildC render");
  return (
    <div>
      <p>ChildC count -{count}</p>
    </div>
  );
};
