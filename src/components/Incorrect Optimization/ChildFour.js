import React from "react";

const ChildFour = ({ name }) => {
  console.log("ChildFour rendered");
  const date = new Date();
  return (
    <div>
      <p>
        {name},it corrently {date.getHours()}: {date.getMinutes()} {""}{" "}
        {date.getSeconds()}
      </p>
    </div>
  );
};

export default ChildFour;

export const MemoziedChildFour = React.memo(ChildFour);
