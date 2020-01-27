import React, {useState} from "react";
import SideVideoList from "./NextInLine/sideVideoList";
import Player from "./SelectedVideo/Player/Player";
import ActionButtons from "./SelectedVideo/Discription/ActionButtons/ActionButtons";
import "./VideoPage.scss"
const VideoPage = () => {

    const [likes, setLikes] = useState(0);

    const addLike = () => {
    setLikes(likes + 1)
  }

    return (
        <div className="videoPage">
            <SideVideoList />
            <Player />
            <ActionButtons addLike={addLike} likes={likes} />
        </div>
        )
}


export default VideoPage;
