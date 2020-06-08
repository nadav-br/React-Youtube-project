import React, { useState, useEffect } from "react";
import FeedVideo from "./FeedVideo/FeedVideo";
import { Link } from "react-router-dom";
import { FeedStyle } from "../../../StyledComponents/HomePageStyle";
import styled from "styled-components";
const uuidv4 = require("uuid/v4");
let DateGenerator = require('random-date-generator');

const Feed = () => {
  let [videoslist, setVideoList] = useState([]);
  let current = new Date();

  const shuffleContenet = videos => {
    videos.forEach(video => {
      let startDate = new Date(2018, 5, 8);
      let endDate = new Date();
      let date = DateGenerator.getRandomDateInRange(startDate, endDate);
      video.date = date;
    });
    videos.sort(() => 0.5 - Math.random());
  }
  
  const getDuplicate = (data,key) => {
    return [
      ...new Map(
        data.map(x => [key(x), x])
      ).values()
    ]
  }
  
  useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then(videos => {
        
        shuffleContenet(videos);
        let a = getDuplicate(videos, it => it.id);
        setVideoList(a);
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
