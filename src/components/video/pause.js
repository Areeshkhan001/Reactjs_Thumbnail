import "./playbutton.css"
function Pause({message,name,onclick}){
    function handleClick(){
       onclick();
    }
    return (
        <button onClick={handleClick}>{name}</button>
    )
}
export default Pause; 