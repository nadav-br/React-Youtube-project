import React, { useEffect, useState } from "react";
import _ from "lodash";
import Comment from "./Comment";
import Input from "./Input";
const uuidv4 = require('uuid/v4');
const axios = require("axios")

const Comments = ({ comments, id, video, addComment }) => {
  const [vid,setVid] = useState(video);
  const [comList, setComList] = useState(comments);
  
  // const addComment = valueRef => {
  //   const newComment = {
  //     user: "User name",
  //     comment: valueRef      
  //   }
  //   setComList([...comList,newComment]);
  //   setVid(prevState => ({
  //     ...prevState,
  //     comments: [...prevState.comments,newComment]
  //   }));
    
    
  // }
  // console.log("new",vid)
  // console.log("comment",comList)
  //   useEffect(() => {
  //     axios.put("/movies/"+id,vid);
  //   },[comList])
    
    useEffect(() => {
      setComList(comments);
    }, [video]);

    useEffect(() => {
      setComList(comments);
    }, [id]);

  comList.reverse();

  return (
    <div>
      <Input addComment={addComment} />
      {comments.map(post => {
        return (
          <div key={uuidv4()}>
            <Comment comment={post} />
      {console.log("comments",comments)}
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
