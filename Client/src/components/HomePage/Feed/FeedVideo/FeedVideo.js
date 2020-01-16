import React from "react";
import"./FeedVideo.scss";

const FeedVideo = (props) => {
  
    return <>
      <ul className="feedVideo">
        <iframe src={`https://www.youtube.com/embed/${props.id}`} />
        <li>{props.snippet.title}</li>
        {/* <li>{this.props.snippet.description}</li> */}
      </ul>
    </>
  
}

export default FeedVideo;
