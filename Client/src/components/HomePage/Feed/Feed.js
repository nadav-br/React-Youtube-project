import React, { useContext } from "react";
import FeedVideo from "./FeedVideo/FeedVideo";
import { Context } from "../../Store/StoreProvider";

const Feed = () => {
  const videoslist = useContext(Context);
  console.log('feed videoslist', videoslist);
  
    return (
      <div className="feed">         
          {videoslist.map(video => {
              return (
                  <FeedVideo key={video.id} {...video} />
               );
            })
          }
      </div>
    );
  
}

export default Feed;
