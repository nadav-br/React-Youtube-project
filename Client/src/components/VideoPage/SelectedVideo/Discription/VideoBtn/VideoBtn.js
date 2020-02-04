import React from 'react'

function VideoBtn(props) {
    
    return (
        <div>
                <button onClick={props.addLike} >Likes {props.likes} </button>
                <button onClick={props.addUnLikes} >unLikes {props.unLikes} </button>
        </div>
    )
}

export default VideoBtn
