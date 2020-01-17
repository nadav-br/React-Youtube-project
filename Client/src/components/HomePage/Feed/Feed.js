import React, { useContext } from "react";
import FeedVideo from "./FeedVideo/FeedVideo";
import { Context } from "../../Store/StoreProvider";
import { Link } from "react-router-dom";


const Feed = () => {

  const videoslist = useContext(Context);
  
    return (
      <div className="feed">         
          {videoslist.map(video => {
              return (
                <Link to="/video-page">
                  <FeedVideo key={video.id} {...video} />
                </Link>
              );
            })
          }
        
      </div>
    );
  
}

export default Feed;
