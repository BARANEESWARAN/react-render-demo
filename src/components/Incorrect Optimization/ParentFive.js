import React, { useCallback, useMemo, useState } from "react";
import { MemoziedChildFive } from "./ChildFive";

const ParentFive = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("barani");
  const person = {
    fname: "barani",
    lname: "waran",
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizePerson = useMemo(() => person, []);

  console.log("ParentFive rendered");
  const handleClick = {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizeFunction = useCallback(handleClick, []);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>
        Parent count - {count}
      </button>
      <button onClick={() => setName("baranees")}>change name</button>
      <MemoziedChildFive
        name={name}
        person={memoizePerson}
        handleClick={memoizeFunction}
      />
    </>
  );
};

export default ParentFive;
