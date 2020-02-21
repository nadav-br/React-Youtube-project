import React, { useContext } from "react";
import FeedVideo from "./FeedVideo/FeedVideo";
import { Context } from "../../Store/StoreProvider";
import { Link } from "react-router-dom";
const uuidv4 = require('uuid/v4');

const Feed = () => {
  const videoslist = useContext(Context);
  console.log('feed videoslist', videoslist);
  
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
