import React, { useState } from "react";
import { MemoziedChildTwo } from "./ChildTwo";

const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("barani");

  console.log("ParentTwo rendered");

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>
        Parent count - {count}
      </button>
      <button onClick={() => setName("baranees")}>change name</button>
      <MemoziedChildTwo name={name} />
    </>
  );
};

export default ParentTwo;
