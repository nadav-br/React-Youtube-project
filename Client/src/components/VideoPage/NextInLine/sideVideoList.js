import React, {useContext} from 'react'
import { Context } from "../../Store/StoreProvider";
import SideVideo from "./SideVideo";



const SideVideoList = () => {
    
    const SideVideoList = useContext(Context);
                
    return (
        <div className="SideVideoList">                
            {SideVideoList.map(video => {
                return (
                    <SideVideo key={video.id} {...video}/>
                )
            })}            
        </div>
    )
}



export default SideVideoList

