import React, { useState } from "react";

const Comments = ({ comments }) => {
  const [newComment, setNewComment] = useState("");
  const [c, setC] = useState();

  const valInput = e => {
    let input = e.target.value;
    setNewComment(input);
  };

  const addComment = y => {
    let added = newComment;
    setNewComment(added);
  };

  return (
    <div>
      <h6>This is the Comments Section</h6>
      <input
        type="text"
        placeholder="write a new comment..."
        onChange={valInput}
      ></input>
      <button onClick={addComment}>Add Comment</button>

      <ul>
        {comments.map(comment => (
          <li>
            <h6>{newComment}</h6>
            <h6>{comment.id}</h6>
            <h6>{comment.first_name}</h6>
            <h6>{comment.comment}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
