import React from "react";

const ChildFive = ({ name, person }) => {
  console.log("ChildFive rendered");

  return (
    <div>
      <p>
        {name} {person.fname} {person.lname}
      </p>
    </div>
  );
};

export default ChildFive;

export const MemoziedChildFive = React.memo(ChildFive);
