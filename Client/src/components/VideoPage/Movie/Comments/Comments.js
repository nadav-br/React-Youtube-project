import React, { useEffect, useState } from "react";
import _ from "lodash";
import Comment from "./Comment";
import Input from "./Input";
const uuidv4 = require('uuid/v4');

const Comments = ({ comments }) => {
  const [comList, setComList] = useState([]);
  
  const addComment = valueRef => {
    const newComment = {
      user: "User name",
      comment: valueRef,
      id : 1 + (Math.random() * 2000),
      newCommentArr: []
    }
    setComList([...comList,newComment]);
  }

  
    
    useEffect(() => {
      setComList(comList);
    }, [comList]);

  useEffect(() => {
    if (comments.length === 0) {
      return;
    }
    setComList(comments);
  }, [comments]);

  comList.reverse();

  return (
    <div>
      <Input addComment={addComment} />
      {comList.map(comment => {
        return (
          <div key={uuidv4()}>
            <Comment comment={comment} addComment={addComment} />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
