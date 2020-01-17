import React from "react";

const SideVideo = (props) => {
    return <>
      <ul className="SideVideo">
        <iframe src={`https://www.youtube.com/embed/${props.id}`} />
        <li>{props.snippet.title}</li>
        {/* <li>{this.props.snippet.description}</li> */}
      </ul>
    </>
}

export default SideVideo

