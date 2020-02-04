import React, { useContext, useState, useEffect } from "react";
import SideVideoList from "./NextInLine/sideVideoList";
import Player from "./SelectedVideo/Player/Player";
import ActionButtons from "./SelectedVideo/Discription/ActionButtons/ActionButtons";
import "./VideoPage.scss";
import _ from "lodash";
import { Context } from "../Store/StoreProvider";

const VideoPage = (props) => {
  const videoList = useContext(Context);  
  const [video, setVideo] = useState({});
  const [videoTitle, setVideoTitle] = useState("");
  const [likes, setLikes] = useState(0);
  const [unLikes, setUnLikes] = useState(0);
  const [id, SetId] = useState("");
  const [cliked, setClicked] = useState(true)

  useEffect(() => {
    if (videoList.length === 0) {
      return;
    }
    const filterVideo = _.find(videoList,{id: props.match.params.id});
    setVideo(filterVideo)
    setVideoTitle(filterVideo.snippet.title);
    setLikes(filterVideo.likes);
    setUnLikes(filterVideo.unLikes);
    SetId(filterVideo.id);
    setClicked(cliked);

    // console.log("filterVideo",filterVideo)
  }, [videoList]);
  
  const addLike = () => {
      setClicked(false);
      console.log("second",cliked);
  }

  return (
        <div className="videoPage">
            <SideVideoList />
            <Player id={id} title={videoTitle} />
            <ActionButtons addLike={addLike} likes={likes} />             
        </div>
        )
}



export default VideoPage;
