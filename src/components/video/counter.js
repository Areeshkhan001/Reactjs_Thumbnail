import { useState } from "react";

function counter(){
    const [number,setNumber] = useState(0);
   
    function handleClick(e){
        console.log("Render Counter")
        e.stoppropagation();
       setNumber(number +1) ; 
        console.log(number)

    }
return(
  <>
    <h1 style={{color: "white"}}> {number} </h1>
<button onClick= {handleClick}> ADD</button>
  </>
    )
 }
export default counter; 