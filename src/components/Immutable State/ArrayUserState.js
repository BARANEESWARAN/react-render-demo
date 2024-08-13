import { useState } from "react";

const initialState = ["barani", "waran"];
const ArrayUseState = () => {
  const [person, setPerson] = useState(initialState);

  const handlePerson = () => {
    const newPerson = [...person];
    newPerson.push("raja");
    newPerson.push("rani");
    setPerson(newPerson);
  };
  console.log("Array useState render");
  return (
    <>
      <div>Array UseState</div>
      <button onClick={handlePerson}>setPerson</button>
      <br />
      {person.map((person, index) => (
        <div key={index}>
          <p>{person}</p>
        </div>
      ))}
    </>
  );
};
export default ArrayUseState;
