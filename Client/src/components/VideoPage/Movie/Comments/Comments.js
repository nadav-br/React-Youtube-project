import React, { useEffect, useState } from "react";
import _ from "lodash";
import Comment from "./Comment";
import Input from "./Input";

const Comments = ({ comments, id }) => {
  const [comList, setComList] = useState([]);

  const addComment = valueRef => {
    const unique = () => 1 + (Math.random() * 2000) 
    const newComment = {
      user: "User name",
      comment: valueRef,
      id : unique(id),
      newCommentArr: []
    };
    console.log('new',newComment.id)
    let filterComment = _.find(comList, { id });
    // if(filterComment === undefined){
      // filterComment.newCommentArr.unshift(newComment);
      // // console.log(id);
      // console.log(filterComment.newCommentArr);
      setComList([...comList, newComment]);
      return newComment;
    };
    useEffect(() => {
      setComList(comList);
      console.log('comlist',comList)
  }, [comList]);

  useEffect(() => {
    if (comments.length === 0) {
      return;
    }
    setComList(comments);
  }, [comments]);
  console.log("B_comList", comList);

  return (
    <div>
      <Input addComment={addComment} />
      {comList.map(comment => {
        return (
          <div>
            <Comment comment={comment} addComment={addComment} id={id} />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
