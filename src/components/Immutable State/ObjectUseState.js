import { useState } from "react";

const initialState = {
  fname: "barani",
  lname: "waran",
};
const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);

  const handlePerson = () => {
    const newPerson = { ...person };
    newPerson.fname = "raja";
    newPerson.lname = "rani";
    setPerson(newPerson);
  };
  console.log("object useState render");
  return (
    <>
      <div>ObjectUseState</div>
      <button onClick={handlePerson}>setPerson</button>
    </>
  );
};
export default ObjectUseState;
