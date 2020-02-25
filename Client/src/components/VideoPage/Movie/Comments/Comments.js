import React, { useEffect, useState } from "react";
import _ from "lodash";
import Comment from "./Comment";
import Input from "./Input";
const uuidv4 = require('uuid/v4');
const axios = require("axios")

const Comments = ({ comments, id }) => {
  const [comList, setComList] = useState([]);
  
  const addComment = valueRef => {
    const newComment = {
      user: "User name",
      comment: valueRef      
    }
    setComList([...comList,newComment]);
    axios.post(`http://localhost:3000/movies/${comments}`, comList )
  }
console.log("comment",comList)
  
    
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
