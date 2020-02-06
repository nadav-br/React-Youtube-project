import React from "react";

const Comments = ({ comments }) => {
  const [newComment, setNewComment] = useState("");
  const [c, setC] = useState([]);

  const valInput = e => {    
    setNewComment(e.target.value);    
  };

  const addComment = () => {
     
   console.log(newComment)
   
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

import Comments from "./Comments/Comments";
const [comments, setComments] = useState([]);
setComments(filterVideo.comments);
<Comments comments={comments} />