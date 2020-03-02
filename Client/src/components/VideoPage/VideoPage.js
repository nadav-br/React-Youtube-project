import React, { useState, useEffect } from "react";
import SideVideoList from "./NextInLine/sideVideoList";
import Movie from "../VideoPage/Movie/Movie";
import { MainContainer } from "../../Styled Components/VideoPageStyle";
import { HomeDiv } from "../../Styled Components/HomePageStyle";
const axios = require("axios");

const VideoPage = props => {
  const [video, setVideo] = useState({});
  const [likeClicked, setLikeClicked] = useState(false);
  const [unLikeClicked, setUnLikeClicked] = useState(false);

  const empty = () => <div></div>;
  const full = () => {
    return (
      <HomeDiv>
        <MainContainer>
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
      </HomeDiv>
    );
  };

  useEffect(() => {
    fetch(`/movies/${props.match.params.id}`)
      .then(res => res.json())
      .then(video => {
        setVideo(video);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    axios.put("/movies/" + video.id, video);
  }, [video]);

  const addComment = valueRef => {
    const newComment = {
      user: "User name",
      comment: valueRef
    };
    setVideo(prevState => ({
      ...prevState,
      comments: [...prevState.comments, newComment]
    }));
  };

  const addLike = () => {
    if (!likeClicked) {
      setVideo(prevState => ({
        ...prevState,
        statistics: {
          ...prevState.statistics,
          likeCount: prevState.statistics.likeCount + 1
        }
      }));
      setLikeClicked(true);
    } else {
      setVideo(prevState => ({
        ...prevState,
        statistics: {
          ...prevState.statistics,
          likeCount: prevState.statistics.likeCount - 1
        }
      }));
      setLikeClicked(false);
    }
  };

  const addUnLikes = () => {
    if (!unLikeClicked) {
      setVideo(prevState => ({
        ...prevState,
        statistics: {
          ...prevState.statistics,
          dislikeCount: prevState.statistics.dislikeCount + 1
        }
      }));
      setUnLikeClicked(true);
    } else {
      setVideo(prevState => ({
        ...prevState,
        statistics: {
          ...prevState.statistics,
          dislikeCount: prevState.statistics.dislikeCount - 1
        }
      }));
      setUnLikeClicked(false);
    }
  };

  return (
    <div>
      {video.id === undefined ? empty() : full()}
      {console.log("videolikes", video)}
    </div>
  );
};

export default VideoPage;
