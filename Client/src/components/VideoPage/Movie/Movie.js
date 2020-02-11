import React from "react";
import Actions from "./Actions/Actions"
import Comments from "../Movie/Comments/Comments";

function Movie(props) {
  return (
    <div className="movie">
      <iframe
        className="player"
        src={`https://www.youtube.com/embed/${props.id}`}
      />
      <h3>{props.title}</h3>
      <h6>views {props.views}</h6>
      <Actions 
            addUnLikes={props.addUnLikes} 
            unLikes={props.unLikes} 
            addLike={props.addLike} 
            likes={props.likes} 
      />
      <div>
        <p className="desc">{props.desc}</p>
      </div>
      <Comments comments={props.comments} id={props.id}/>
    </div>
  );
}

export default Movie;
