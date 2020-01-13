import React, { Component } from "react";
import FeedVideo from "./FeedVideo/FeedVideo";
import { Consumer } from "../../Store/StoreProvider";

class Feed extends Component {
  render() {
    return (
      <div className="feed"> 
        <Consumer>
          {store => {
            return store.videoslist.map(video => {
              return (
                <FeedVideo key={video.id} {...video} />
              );
            });
          }}
        </Consumer>
      </div>
    );
  }
}

export default Feed;
