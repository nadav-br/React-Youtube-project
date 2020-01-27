import React from 'react'

function VideoBtn(props) {

    
    return (
        <div>
            <button onClick={props.addLike}>
             {props.likes} 
            </button>
        </div>
    )
}

export default VideoBtn
