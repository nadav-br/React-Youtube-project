import React, { useState, useEffect } from "react";
import SideVideoList from "./NextInLine/sideVideoList";
import Movie from "../VideoPage/Movie/Movie";
import "./VideoPage.scss";

const VideoPage = props => {
  const [video, setVideo] = useState({});
  const [likes, setLikes] = useState(0);
  const [unLikes, setUnLikes] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [comments, setComments] = useState([]);
  const [views, setViews] = useState(0);
  
  console.log("props",props.match.params.id)
  useEffect(() => {
  fetch(`http://localhost:3000/movies/${props.match.params.id}`)
    .then(res => res.json())
    .then(video => setVideo(video))
  }, [props.match.params.id]);
     

  const addLike = () => {
    if (!clicked) {
      setLikes(likes + 1);
      setClicked(true);
    } else {
      setLikes(likes - 1);
      setClicked(false);
    }
  };

  const addUnLikes = () => {
    if (!clicked) {
      setUnLikes(unLikes + 1);
      setClicked(true);
    } else {
      setUnLikes(unLikes - 1);
      setClicked(false);
    }
  }; 
 
  return (
        <div className="videoPage">
            <SideVideoList />
            <Movie 
              id={video.id} 
              title={video.title}
              addUnLikes={addUnLikes} 
              unLikes={unLikes} 
              addLike={addLike} 
              likes={likes} 
              comments={comments}
              views={views}
            />             
        </div>
        )
}

export default VideoPage;
