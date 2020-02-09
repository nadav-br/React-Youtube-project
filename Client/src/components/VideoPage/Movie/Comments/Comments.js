import React, { useEffect, useState } from "react";
import _ from "lodash";
import Comment from "./Comment";
import Input from "./Input";

const Comments = ({ comments, id }) => {
  const [comList, setComList] = useState([]);

  const addComment = valueRef => {
    const newComment = {
      user: "User name",
      comment: valueRef,
      id: id,
      newCommentArr: []
    };
    let filterComment = _.find(comList, { id: 111 });
    filterComment.newCommentArr.unshift(newComment);
    // console.log(id);
    // console.log(filterComment);
    setComList([...comList]);
  };
  useEffect(() => {
    setComList(comList);
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
