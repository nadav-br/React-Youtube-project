import React, { useContext } from "react";
import FeedVideo from "./FeedVideo/FeedVideo";
import { Context } from "../../Store/StoreProvider";
import { Link } from "react-router-dom";

const Feed = () => {
  const videoslist = useContext(Context);
  console.log('feed videoslist', videoslist);
  
    return (
      <div className="feed">         
          {videoslist.map(video => {
              return (
                <Link to={`/video-page/${video.id}`}>
                  <FeedVideo key={video.id} {...video} />
               </Link>
              );
            })
          }
      </div>
    );
  
}

export default Feed;
