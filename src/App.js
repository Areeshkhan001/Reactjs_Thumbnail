// import logo from './logo.svg';
import "./App.css";
import Video from "./components/video/Video";
import VideoDB from "./data"
import PlayButton from "./components/video/playbutton";
import Pause from "./components/video/pause";
import { useState } from "react";
import Counter from "./components/video/counter";

let Videos = [
  {
    id: 1,
    title: "Node Js Tutorial",
    views: "100k",
    time: "2 year ago",
    channel: "programming",
    verified: true,
    playing: false,
  },
  {
    id: 2,
    title: "React Js Tutorial",
    views: "100k",
    time: "2 year ago",
    channel: "programming",
    verified: true,
    playing: false,
  },
  {
    id: 3,
    title: "Js Tutorial",
    views: "100k",
    time: "2 year ago",
    channel: "programming",
    verified: true,
    playing: false,
  },
];

function App() {
  const [updateVideos, setUpdateVideos] = useState(false);


  function handleClick(e, id) {
    e.stopPropagation();
    Videos.map((item) => {
      if (item.id === id) {
        item.playing = !item.playing;
       }
      
    });
    setUpdateVideos(!updateVideos);
  }

  return (
    Const [Video,setVideo] = useState(VideoDB);
    <div className="App">
      <div>
      <button onClick={( )=>{
     
      
        setVideo( [...video,
          { id: video.length+1,
       title: "Js Tutorial",
       views: "100k",
       time: "2 year ago",
       channel: "programming",
       verified: true,
       playing: false,}]);
          }}>Add Videos</button></div>
      {Videos.map((video) => {
        return (
          <Video
            title={video.title}
            key={video.id}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
          >
            <PlayButton
              name="Click"
              id={video.id}
              playing={video.playing}
              updateVideos={updateVideos}
              onClick={handleClick}
            >
              {video.title}
            </PlayButton>
          </Video>
        );
      })}
      <Counter></Counter>
    </div>
  );
}

export default App;
