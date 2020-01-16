import React from "react";
import VideoBtn from "../VideoBtn/VideoBtn";

const ActionButtons = () => {  

  
    return (
      <div className="videoReactionBar">
        <span>Views and date load</span>
        <VideoBtn likeNum={this.state.likesNum} action={this.likeVideo} />
        <VideoBtn />
      </div>
    );  
}

export default ActionButtons;
