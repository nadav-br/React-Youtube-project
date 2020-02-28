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
        <Moment fromNow>{props.snippet.publishedAt}</Moment>
      </FeedVideoStyle>
    </>
  );
};

export default FeedVideo;
