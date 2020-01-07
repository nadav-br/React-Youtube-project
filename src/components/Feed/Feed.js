import React, { Component } from "react";
import FeedVideo from "../Feed/FeedVideo/FeedVideo";

class Feed extends Component {
  state = {
    Videos: [
      {
        id: "1",
        name: "Masha and the Bear",
        url: "https://www.youtube.com/watch?v=ac9a8mLgCHY"
      },
      {
        id: "2",
        name: "ערוץ הופ!",
        url: "https://www.youtube.com/watch?v=tcMMmXpw6d8"
      },
      {
        id: "3",
        name: "Disney Junior Israel",
        url: "https://www.youtube.com/watch?v=XIepGJvUA7I"
      },
      {
        id: "4",
        name: "Disney Junior Israel",
        url: "https://www.youtube.com/watch?v=JWFdJHxVAKk"
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.Videos.map(video => {
          return (
            <FeedVideo
              id={video.id}
              name={video.name}
              url={video.url.slice(0, -1)}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
