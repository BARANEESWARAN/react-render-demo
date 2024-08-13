import React, { useState } from "react";
import { MemoziedChildFour } from "./ChildFour";

const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("barani");

  console.log("ParentFour rendered");

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>
        Parent count - {count}
      </button>
      <button onClick={() => setName("baranees")}>change name</button>
      <MemoziedChildFour name={name} />
    </>
  );
};

export default ParentFour;
