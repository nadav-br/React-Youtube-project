import React, { useState, useEffect } from "react";
import SideVideo from "./SideVideo";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SideListStyle } from "../../../Styled Components/SideListStyle.js";
const uuidv4 = require("uuid/v4");

const SideVideoList = () => {
  const [videoslist, setVideoList] = useState([]);
  useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then(videoslist => {
        setVideoList(videoslist);
      });
  }, []);

  return (
    <SideListStyle>
      {videoslist.map(video => {
        return (
          <VideoLink key={uuidv4()} to={`/video-page/${video.id}`}>
            <SideVideo key={uuidv4()} {...video} />
          </VideoLink>
        );
      })}
    </SideListStyle>
  );
};

const VideoLink = styled(Link)`
<<<<<<< HEAD
    text-decoration: none;
    color:black;
=======
  text-decoration: none;
  color: black;
>>>>>>> 3f8f11ac1eddec65ff892bb0e609b7535831f67d
`;

export default SideVideoList;
