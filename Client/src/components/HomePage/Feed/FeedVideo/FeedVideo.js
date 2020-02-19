import React from "react";
import "./FeedVideo.scss";
import { Link } from "react-router-dom";
import Moment from "react-moment";


const FeedVideo = props => {
  
  return (
    <>
      <ul className="feedVideo">
        <Link to={`/video-page/${props.id}`}>
          <img src={props.snippet.thumbnails.medium.url} alt="" />
          <li>{props.snippet.title}</li>
        </Link>
        <li>{props.snippet.channelTitle}</li>
        <Moment fromNow>{props.snippet.publishedAt}</Moment>
      </ul>
    </>
  );
};



export default FeedVideo;
