import React, { Component } from "react";
import FeedVideo from "./FeedVideo/FeedVideo";
import { Consumer } from "../../Store/StoreProvider";

class Feed extends Component {
  render() {
    return (
      <>
        <Consumer>
          {store => {
            return store.Videos.map(video => {
              return (
                <FeedVideo id={video.id} name={video.name} url={video.url} />
              );
            });
          }}
        </Consumer>
      </>
    );
  }
}

export default Feed;
