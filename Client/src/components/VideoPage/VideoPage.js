import React, { useContext, useState, useEffect } from "react";
import SideVideoList from "./NextInLine/sideVideoList";
import Player from "./SelectedVideo/Player/Player";
import ActionButtons from "./SelectedVideo/Discription/ActionButtons/ActionButtons";
import "./VideoPage.scss";
import _ from "lodash";
import { Context } from "../Store/StoreProvider";

const VideoPage = props => {
  const videoList = useContext(Context);
  const videoData = _.find(videoList, { id: props.match.params.id });
  console.log(videoData);
  const [likes, setLikes] = useState(videoData.likes);

  const addLike = () => {
    setLikes(likes + 1);
  };
  const removeLike = () => {
    setLikes(likes - 1);
  };

  return (
    <div className="videoPage">
      <SideVideoList className="sideVideoList" />
      <div className="video">
        <Player
          id={props.match.params.id}
          title={videoData.snippet.title}
          desc={videoData.snippet.description}
          className="player"
        />

        {/* <ActionButtons
        addLike={addLike}
        likes={likes}
        className="actionButtons"
      /> */}
        <button className="likesBtn" onClick={addLike}>
          Add Like
        </button>
        <button className="unlikesBtn" onClick={removeLike}>
          Remove Like
        </button>
        <input value={likes} className="num" />
      </div>
    </div>
  );
};

export default VideoPage;
