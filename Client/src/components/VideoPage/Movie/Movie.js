import React from "react";
import Actions from "./Actions/Actions"
import Comments from "../Movie/Comments/Comments";

function Movie(props) {

  console.log("movie",props.video)
  return (
    <div className="movie">
      <iframe
        className="player"
        src={`https://www.youtube.com/embed/${props.id}`}
      />
      <h3>{props.title}</h3>
      <h6>views {props.video.statistics.viewCount}</h6>
      <Actions 
            addUnLikes={props.addUnLikes} 
            unLikes={props.video.statistics.dislikeCount} 
            addLike={props.addLike} 
            likes={props.video.statistics.likeCount} 
      />
      {/* <div>
        <p className="desc">{props.desc}</p>
      </div> */}
      <Comments comments={props.comments} id={props.id} movie={props.movie}/>
    </div>
  );
}

export default Movie;
