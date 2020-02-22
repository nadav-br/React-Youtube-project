import React, { useState, useEffect } from "react";
import FeedVideo from "./FeedVideo/FeedVideo";
import { Link } from "react-router-dom";
const uuidv4 = require('uuid/v4');

const Feed = () => {  

  const [videoslist, setVideoList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then(res => res.json())
      .then(videoslist => {
        setVideoList(videoslist)
    })  
  },[])
  console.log("VIDS",videoslist)
    return (
      <div className="feed">         
          {videoslist.map(video => {
              return (
                <Link key={uuidv4()} to={`/video-page/${video.id}`}>
                  <FeedVideo  {...video} />
               </Link>
              );
            })
          }
      </div>
    );
  
}

export default Feed;
