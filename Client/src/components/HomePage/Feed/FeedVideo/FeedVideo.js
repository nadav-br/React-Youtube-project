import React from "react";
import "./FeedVideo.scss";
import Moment from "react-moment";


const FeedVideo = props => {
  
  return (
    <>
      <ul className="feedVideo">
        <img src={props.snippet.thumbnails.medium.url} alt="" />
        <li>{props.snippet.title}</li>
        <li>{props.snippet.channelTitle}</li>
        <Moment fromNow>{props.snippet.publishedAt}</Moment>
      </ul>
    </>
  );
};



export default FeedVideo;
