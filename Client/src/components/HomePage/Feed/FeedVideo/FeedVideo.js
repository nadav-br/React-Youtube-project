import React from "react";
import Moment from "react-moment";
import { FeedVideoStyle, ViewsMoment } from "../../../../StyledComponents/FeedVideoStyle";

const FeedVideo = props => {
  return (
    <>
      <FeedVideoStyle>
        <img src={props.snippet.thumbnails.medium.url} alt="" />
        <div>
          <li>{props.snippet.title}</li>          
          <ViewsMoment>
            {props.statistics.viewCount} views - 
          <Moment fromNow>{props.snippet.publishedAt}</Moment>
          </ViewsMoment>
        </div>
      </FeedVideoStyle>
    </>
  );
};

export default FeedVideo;
