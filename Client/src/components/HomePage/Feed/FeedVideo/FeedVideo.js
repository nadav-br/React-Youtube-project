import React, { Component } from "react";

class FeedVideo extends Component {
  render() {
    return <div>
      {this.props.name}
      {this.props.url}
    </div>;
  }
}

export default FeedVideo;
