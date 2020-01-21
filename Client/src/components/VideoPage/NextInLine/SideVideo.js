import React from "react";
import "./SideVideo.scss";

const SideVideo = (props) => {
    return(
    <div className="SideVideo">
      <ul className="SideVideo">
        <li>{props.snippet.title}</li>
      </ul>
      <iframe src={`https://www.youtube.com/embed/${props.id}`} />
    </div>
    )
}

export default SideVideo

