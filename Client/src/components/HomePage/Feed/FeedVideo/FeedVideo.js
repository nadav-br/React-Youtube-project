import React, { Component } from "react";
import"./FeedVideo.scss";

class FeedVideo extends Component {
  render() {
    return <>
      <ul className="feedVideo">
        <iframe src={this.props.url} />
        <li>{this.props.author}</li>
        <li>{this.props.description}</li>
      </ul>
    </>
  }
}

export default FeedVideo;
