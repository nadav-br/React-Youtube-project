import React, { useState, useEffect } from "react";
import FeedVideo from "./FeedVideo/FeedVideo";
import { Link } from "react-router-dom";
import { FeedStyle } from "../../../Styled Components/HomePageStyle";
import { LinkVideoStyle } from "../../../Styled Components/FeedVideoStyle";

const uuidv4 = require("uuid/v4");

const Feed = () => {
  const [videoslist, setVideoList] = useState([]);

  useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then(videos => {
        setVideoList(videos);
      });
  }, []);
  return (
    <FeedStyle>
      {videoslist.map(video => {
        return (
          <Link
            key={uuidv4()}
            to={`/video-page/${video.id}`}
            style={{ ...LinkVideoStyle }}
          >
            <FeedVideo {...video} />
          </Link>
        );
      })}
    </FeedStyle>
  );
};

export default Feed;
