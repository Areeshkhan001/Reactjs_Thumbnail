// import logo from './logo.svg';
import "./App.css";
import Video from "./components/video/Video";
import VideoDB from "./data/data";
import PlayButton from "./components/video/playbutton";
import { useState } from "react";
import Counter from "./components/video/counter";

function App() {
  const [updateVideos, setUpdateVideos] = useState(false);
  const [addedVideos, setAddedVideos] = useState(VideoDB);


  function handleClick(e, id) {
    e.stopPropagation();
    addedVideos?.map((item) => {
      if (item.id === id) {
        item.playing = !item.playing;
      }

    });
    setUpdateVideos(!updateVideos);
  }

  return (
    <div className="App">

      <div>
        <button
          style={{ margin: 48 }}
          onClick={() => {
            setAddedVideos([...addedVideos,
            {
              id: addedVideos?.length + 1,
              title: "Js Tutorial",
              views: "100k",
              time: "2 year ago",
              channel: "programming",
              verified: true,
              playing: false,
            }]);
          }}>
          Add Videos
        </button>
      </div>

      {addedVideos?.map((video) => {
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
    </div>
  );
}

export default App;
