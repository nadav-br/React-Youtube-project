import React from "react";
import Actions from "./Actions/Actions"
import Comments from "../Movie/Comments/Comments";
import {  
  
} from "../../../Styled Components/VideoPageStyle";

function Movie(props) {

  console.log("movie",props.video)
  return (
    <div className="movie">
      <iframe
        className="player"
        src={`https://www.youtube.com/embed/${props.id}`}
      />
      <h3>{props.title}</h3>
      <h4>views {props.video.statistics.viewCount}</h4>
      <Actions 
            addUnLikes={props.addUnLikes} 
            unLikes={props.video.statistics.dislikeCount} 
            addLike={props.addLike} 
            likes={props.video.statistics.likeCount} 
      />
      {/* <div>
        <p className="desc">{props.desc}</p>
      </div> */}
      <h4>comments {props.video.statistics.commentCount}</h4>
      <Comments comments={props.comments} id={props.id} video={props.video} addComment={props.addComment}/>
    </div>
  );
}

export default Movie;
