import React, { useMemo, useState } from "react";
import { MemoziedChildThree } from "./ChildThree";

const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("barani");

  console.log("ParentThree rendered");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizeChild = useMemo(() => <strong>Hello</strong>, []);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>
        Parent count - {count}
      </button>
      <button onClick={() => setName("baranees")}>change name</button>
      <MemoziedChildThree name={name}>{memoizeChild}</MemoziedChildThree>
    </>
  );
};

export default ParentThree;
