import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  function handleClick(e) {
    console.log("Render Counter");
    e.stopPropagation();
    setNumber(number + 1);
    console.log(number);
  }
  return (
    <>
      <h1 style={{ color: "Black" }}> {number} </h1>
      <button onClick={handleClick}> ADD</button>
    </>
  );
}
export default Counter;
