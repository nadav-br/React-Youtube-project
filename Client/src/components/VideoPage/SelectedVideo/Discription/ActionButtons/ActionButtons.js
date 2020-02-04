import React, {useState} from "react";
import VideoBtn from "../VideoBtn/VideoBtn";

const ActionButtons = (props) => {  

  
  return (
    <div className="actionsBtn">
      <VideoBtn 
        addLike={props.addLike} 
        likes={props.likes}
         
      />
    </div>
  );  
}

export default ActionButtons;
