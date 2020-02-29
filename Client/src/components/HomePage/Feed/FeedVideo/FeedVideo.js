import React from "react";
import Moment from "react-moment";
import { FeedVideoStyle } from "../../../../Styled Components/FeedVideoStyle";

const FeedVideo = props => {
  return (
    <>
      <FeedVideoStyle>
        <img src={props.snippet.thumbnails.medium.url} alt="" />
        <li>{props.snippet.title}</li>
        <li>{props.snippet.channelTitle}</li>
        <div>
          {props.statistics.viewCount} views - 
        <Moment fromNow>{props.snippet.publishedAt}</Moment>
        </div>
      </FeedVideoStyle>
    </>
  );
};

export default FeedVideo;
