import React, {useContext} from 'react'
import { Context } from "../../Store/StoreProvider";
import SideVideo from "./SideVideo";
import { Link } from "react-router-dom";
const uuidv4 = require('uuid/v4');



const SideVideoList = () => {
    
    const SideVideoList = useContext(Context);
                
    return (
        <div className="SideVideoList">                
            {SideVideoList.map(video => {
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

