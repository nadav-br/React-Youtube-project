import React, {useState, useEffect} from 'react'
import SideVideo from "./SideVideo";
import { Link } from "react-router-dom";
const uuidv4 = require('uuid/v4');

const SideVideoList = () => {
    
    const [videoslist, setVideoList] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(videoslist => {         
            setVideoList(videoslist)
    })
  
},[])
                
    return (
        <div className="SideVideoList">                
            {videoslist.map(video => {
                return (
                    <Link key={uuidv4()} to={`/video-page/${video.id}`}>                
                        <SideVideo key={uuidv4()} {...video}/>
                    </Link>
                    
                )
            })}            
        </div>
    )
}



export default SideVideoList

