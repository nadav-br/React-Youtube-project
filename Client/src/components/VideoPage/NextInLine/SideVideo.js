import React from "react";
import "./SideVideo.scss";

const SideVideo = (props) => {
    return(
    <div className="SideVideo">
      <p>{props.snippet.title}</p>
      <img src={props.snippet.thumbnails.default.url} alt="" />
    </div>
    )
}

export default SideVideo

