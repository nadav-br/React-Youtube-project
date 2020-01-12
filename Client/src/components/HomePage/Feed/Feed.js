import React, { Component } from "react";
import FeedVideo from "./FeedVideo/FeedVideo";
import { Consumer } from "../../Store/StoreProvider";

class Feed extends Component {
  render() {
    return (
      <Consumer>
        {store => {
          console.log(store)
          return store.videoslist.map(video => {
            return (
              <FeedVideo {...video} />
            );
          });
        }}
      </Consumer>
    );
  }
}

export default Feed;
