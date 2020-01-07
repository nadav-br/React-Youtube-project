import React, { Component } from "react";

class FeedVideo extends Component {
  render() {
    return (
      <div>
        {this.props.url}
        {this.props.name}
        {this.props.id}
      </div>
    );
  }
}

export default FeedVideo;
