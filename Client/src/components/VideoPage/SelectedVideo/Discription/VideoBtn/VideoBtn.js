import React from 'react'

function VideoBtn(props) {
    
    return (
        <div>
            <div>
                <button onClick={props.addLike} > {props.likes} </button>
            </div>
        </div>
    )
}

export default VideoBtn
