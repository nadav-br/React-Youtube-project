import React, { useContext, useState, useEffect } from "react";
import SideVideoList from "./NextInLine/sideVideoList";
import Player from "./SelectedVideo/Player/Player";
import ActionButtons from "./SelectedVideo/Discription/ActionButtons/ActionButtons";
import "./VideoPage.scss";
import _ from "lodash";
import { Context } from "../Store/StoreProvider";
import Comments from "./Comments/Comments";

const VideoPage = props => {
  const videoList = useContext(Context);
  const [video, setVideo] = useState({});
  const [videoTitle, setVideoTitle] = useState("");
  const [likes, setLikes] = useState(0);
  const [unLikes, setUnLikes] = useState(0);
  const [id, SetId] = useState("");
  const [clicked, setClicked] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (videoList.length === 0) {
      return;
    }
    const filterVideo = _.find(videoList, { id: props.match.params.id });
    setVideo(filterVideo);
    setVideoTitle(filterVideo.snippet.title);
    setLikes(filterVideo.likes);
    setUnLikes(filterVideo.unLikes);
    SetId(filterVideo.id);
    setClicked(clicked);
    console.log("filter", filterVideo.comments);
    setComments(filterVideo.comments);

    // console.log("filterVideo",filterVideo)
  }, [videoList]);

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
      <Player id={id} title={videoTitle} />
      <ActionButtons
        addUnLikes={addUnLikes}
        unLikes={unLikes}
        addLike={addLike}
        likes={likes}
      />
      <Comments comments={comments} />
    </div>
  );
};

export default VideoPage;
