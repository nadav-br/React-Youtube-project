import React, { useState, useEffect } from "react";
import SideVideoList from "./NextInLine/sideVideoList";
import Movie from "../VideoPage/Movie/Movie";
import "./VideoPage.scss";
import {  
  MainContainer  
} from "../../Styled Components/VideoPageStyle";

const axios = require("axios");

const VideoPage = props => {
  const [video, setVideo] = useState({});
  const [likeClicked, setLikeClicked] = useState(false);
  const [unLikeClicked, setUnLikeClicked] = useState(false);
  // const [comments, setComments] = useState([]);
  const [views, setViews] = useState(0);

  // useEffect(() => {
  //   axios.post("http://localhost:3000/movies",video)
  // },[])
  
  console.log("likes",likeClicked);
  
  const empty = () => <div></div>
  const full = () => {
    return(
      <MainContainer className="videoPage">
            <SideVideoList />
            <Movie 
              video={video}
              id={video.id} 
              title={video.snippet.title}
              addUnLikes={addUnLikes} 
              addLike={addLike} 
              comments={video.comments}
              addComment={addComment}
            />             
        </MainContainer>
    )
  }
  
  useEffect(() => {
    fetch(`/movies/${props.match.params.id}`)
      .then(res => res.json())
      .then(video => {
        setVideo(video);
      })
  }, [props.match.params.id]);

  useEffect(() => {
    axios.put("/movies/"+video.id,video);
  },[video])
     

  const addComment = valueRef => {
    const newComment = {
      user: "User name",
      comment: valueRef      
    }
    setVideo(prevState => ({
      ...prevState,
      comments: [...prevState.comments,newComment]
    }));
  }

  const addLike = () => {
    if (!likeClicked) {
      setVideo(prevState => ({
          ...prevState,
          statistics: {
            ...prevState.statistics,
            likeCount: prevState.statistics.likeCount + 1,
          },
        }
      ));
      setLikeClicked(true);
      
      } else {
      setVideo(prevState => ({
        ...prevState,
        statistics: {
          ...prevState.statistics,
          likeCount: prevState.statistics.likeCount -1,
        },
      }
    ));
    setLikeClicked(false);
    axios.post("/movies",video);
    }
    
  };

  const addUnLikes = () => {
    if (!unLikeClicked) {
      setVideo(prevState => ({
        ...prevState,
        statistics: {
          ...prevState.statistics,
          dislikeCount: prevState.statistics.dislikeCount + 1,
        },
      }
      ));
      setUnLikeClicked(true);
    } else {
      setVideo(prevState => ({
        ...prevState,
        statistics: {
          ...prevState.statistics,
          dislikeCount: prevState.statistics.dislikeCount - 1,
        },
      }
    ));
    setUnLikeClicked(false);
    }
    // axios.post("http://localhost:3000/movies",video);
  };
 
  return (
    <div>
      {video.id === undefined? empty(): full()}
      {console.log("videolikes",video)}
    </div>
  ) 
}

export default VideoPage;
