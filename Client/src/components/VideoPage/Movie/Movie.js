import React from "react";
import Actions from "./Actions/Actions";
import Comments from "../Movie/Comments/Comments";
import {MovieFrame, CommentsCount} from "../../../Styled Components/VideoPageStyle";

function Movie(props) {
  console.log("movie", props.video);
  return (
    <MovieFrame>
      <iframe
        className="player"
        src={`https://www.youtube.com/embed/${props.id}`}
      />
      <h4>{props.title}</h4>
      <Actions
        viewCount={props.video.statistics.viewCount}
        addUnLikes={props.addUnLikes}
        unLikes={props.video.statistics.dislikeCount}
        addLike={props.addLike}
        likes={props.video.statistics.likeCount}
      />
      {/* <div>
        <p className="desc">{props.desc}</p>
      </div> */}
      <CommentsCount>תגובות {props.video.statistics.commentCount}</CommentsCount>
      <Comments comments={props.comments} id={props.id} video={props.video} addComment={props.addComment}/>
    </MovieFrame>
  );
}

export default Movie;
