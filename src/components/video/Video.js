import "./video.css"



function Video  ({title,views,channel="programming",time,verified}){
  let channelJsx;
  if (verified){
   channelJsx= <div className="channel"> {channel}✔️</div> }
   else{
    channelJsx= <div className="channel"> {channel} </div> }

    return (
      <>
      <div className="container">
      <div className="pic"> 
      <img
      src="https://i.imgur.com/MK3eW3As.jpg "
      alt="Nothing found"
      
    /> </div>
       
     <div className="title"> {title} </div>
     {/* <div className="channel"> {channel}✔️</div> */}
     {channelJsx}
     <div className="views">
       {views} views<span>.</span>{time}
        </div>
     
     </div>
    </>
    

      
      
    );
}
export default Video;