import React from "react";
import Actions from "./Actions/Actions"

function Movie(props) {
  return (
    <div className="movie">
      <iframe
        className="player"
        src={`https://www.youtube.com/embed/${props.id}`}
      />
      <h3>{props.title}</h3>
      <Actions 
            addUnLikes={props.addUnLikes} 
            unLikes={props.unLikes} 
            addLike={props.addLike} 
            likes={props.likes} 
      />
      <div>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default Movie;
