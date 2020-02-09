import React from 'react'
import Input from "./Input";
import Actions from "../Actions/Actions";

function Comment(props) {
    return (
        <div>
            <h3>{props.comment.user}</h3>
            <p>{props.comment.comment}</p>
            <Actions />
            <Input addComment={props.addComment} />
        </div>
    )
}

export default Comment
