import React, { useEffect, useState } from "react";
import _ from "lodash";
import Comment from "./Comment";
import Input from "./Input";
const uuidv4 = require('uuid/v4');
const axios = require("axios")

const Comments = ({ comments, id, movie }) => {
  const [comList, setComList] = useState(comments);
  
  const addComment = valueRef => {
    const newComment = {
      user: "User name",
      comment: valueRef      
    }
    setComList([...comList,newComment]);
    axios.post(`/movies`,newComment)
    console.log("new",comments)
  }

console.log("comment",comList)
    // useEffect(() => {
    //   axios.post(`/movies/${comments}`, newComment )
    // })
    
    useEffect(() => {
      setComList(comments);
    }, [id]);

  comList.reverse();

  return (
    <div>
      <Input addComment={addComment} />
      {comList.map(post => {
        return (
          <div key={uuidv4()}>
            <Comment comment={post} />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
