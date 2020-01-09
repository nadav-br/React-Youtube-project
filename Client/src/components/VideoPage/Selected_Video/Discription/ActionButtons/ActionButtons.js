import React from "react";
import VideoBtn from "../VideoBtn/VideoBtn";

class ActionButtons extends React.Component {
  state = {
    likesNum: 0
  };

  likeVideo = state => {
    this.setState({
      likesNum: state.likesNum + 1
    });
  };

  render() {
    return (
      <div className="videoReactionBar">
        <span>Views and date load</span>
        <VideoBtn likeNum={this.state.likesNum} action={this.likeVideo} />
        <VideoBtn />
      </div>
    );
  }
}

export default ActionButtons;
