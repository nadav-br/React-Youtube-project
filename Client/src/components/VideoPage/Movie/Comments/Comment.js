import React from 'react'
import Input from "./Input";
import Actions from "../Actions/Actions";
import {  
    Comments
  } from "../../../../Styled Components/VideoPageStyle";

function Comment(props) {
   return (
        <Comments>
            <h3>{props.comment.user}</h3>
            <p>{props.comment.comment}</p>
            <Actions />
        </Comments>
    )
}

export default Comment;
