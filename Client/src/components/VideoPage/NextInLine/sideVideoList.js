import React, {useState, useEffect} from 'react'
import SideVideo from "./SideVideo";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SideListStyle } from "../../../Styled Components/SideListStyle.js";
const uuidv4 = require('uuid/v4');

const SideVideoList = () => {
    
    const [videoslist, setVideoList] = useState([])
    useEffect(() => {
        fetch('/movies')
        .then(res => res.json())
        .then(videoslist => {         
            setVideoList(videoslist)
    })
  
},[])
                
    return (
        <SideListStyle className="SideVideoList">                
            {videoslist.map(video => {
                return (
                        <VideoLink key={uuidv4()} to={`/video-page/${video.id}`}>                
                            <SideVideo key={uuidv4()} {...video}/>
                        </VideoLink>
                )
            })}            
        </SideListStyle>
    )
}

const VideoLink = styled(Link)`
    text-decoration: none;
    color:black
`;

export default SideVideoList

