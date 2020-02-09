import React from 'react'
import Input from "./Input";
import Actions from "../Actions/Actions";

function Comment(props) {
    console.log("filterComment",props.comment.newCommentArr)
   return (
        <div>
            <h3>{props.comment.user}</h3>
            <p>{props.comment.comment}</p>
            <Actions />
            <Input addComment={props.addComment} />
            {props.comment.newCommentArr.map(a => {
                return(
                    <div>
                        <h3>{a.user}</h3>
                        <p>{a.comment}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Comment
