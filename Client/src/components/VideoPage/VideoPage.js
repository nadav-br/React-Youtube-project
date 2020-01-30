import React, {useContext, useState, useEffect} from "react";
import SideVideoList from "./NextInLine/sideVideoList";
import Player from "./SelectedVideo/Player/Player";
import ActionButtons from "./SelectedVideo/Discription/ActionButtons/ActionButtons";
import "./VideoPage.scss";
import _ from "lodash";
import {Context} from "../Store/StoreProvider";

const VideoPage = (props) => {
  const videoList = useContext(Context);
  const videoData = _.find(videoList,{id: props.match.params.id})

 
  const [likes, setLikes] = useState(videoData.likes);

    const addLike = () => {
      setLikes(likes + 1);
    }


   return (
        <div className="videoPage">
            <SideVideoList />
            <Player id={props.match.params.id} title={videoData.snippet.title} />
            <ActionButtons addLike={addLike} likes={likes}/>
        </div>
        )
}


export default VideoPage
