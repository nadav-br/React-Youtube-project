import React from "react";
import"./FeedVideo.scss";

const FeedVideo = (props) => {
  
    return <>
      <ul className="feedVideo">
        <img src={props.snippet.thumbnails.medium.url} alt="" />
        <li>{props.snippet.title}</li>
      </ul>
    </>
  
}

export default FeedVideo;
