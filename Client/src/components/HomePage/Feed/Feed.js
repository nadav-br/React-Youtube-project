import React, { useState, useEffect } from "react";
import FeedVideo from "./FeedVideo/FeedVideo";
import { Link } from "react-router-dom";
import { FeedStyle } from "../../../Styled Components/HomePageStyle";
import styled from "styled-components";
const uuidv4 = require("uuid/v4");

const Feed = () => {
  const [videoslist, setVideoList] = useState([]);
  
  useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then(videos => {
        setVideoList(videos);
      }).catch(e => {throw new Error(e)})
  }, []);

  return (
    <FeedStyle>
      {videoslist.map(video => {
        return (
          <FeedVideoStyle
            key={uuidv4()}
            to={`/video-page/${video.id}`}
          >
            <FeedVideo {...video} />
          </FeedVideoStyle>
        );
      })}
    </FeedStyle>
  );
};

export const FeedVideoStyle = styled(Link)`
text-decoration: none;
color:black;
`;

export default Feed;
