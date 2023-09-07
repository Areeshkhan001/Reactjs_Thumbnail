import "./video.css"



function Video({ title, views, channel = "programming", time, verified, children }) {

  return (
    <>
      <div className="container" style={{ marginTop: 24 }}>
        <div className="pic">
          <img
            src="https://i.imgur.com/MK3eW3As.jpg "
            alt="Nothing found"

          />
        </div>

        <div className="title"> {title} </div>
        <div className="channel"> {channel} {verified ? "✔️" : null}</div>

        <div className="views">
          {views} views<span>.</span>{time}
        </div>
        <div> {children}              </div>
      </div>
    </>
  );
}
export default Video;