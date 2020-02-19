import React, {useContext} from 'react'
import { Context } from "../../Store/StoreProvider";
import SideVideo from "./SideVideo";
const uuidv4 = require('uuid/v4');


const SideVideoList = () => {
    
    const SideVideoList = useContext(Context);
                
    return (
        <div className="SideVideoList">                
            {SideVideoList.map(video => {
                return (
                    <SideVideo key={uuidv4()} {...video}/>
                )
            })}            
        </div>
    )
}



export default SideVideoList

