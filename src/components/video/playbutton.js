import "./playbutton.css";
function PlayButton({  name, onClick , id , playing , updateVideos }) {
    
    return (
        <button onClick={(e) => onClick(e,id)}>{name} : {playing ? "▶️" : "⏸️"}
        </button>
        
    )
}
export default PlayButton
