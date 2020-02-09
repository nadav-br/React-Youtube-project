import React,{useEffect,useState} from "react";
import Comment from "./Comment";

const Comments = ({comments}) => {
  
const [comList,setComList] = useState([]);


const addComment = (valueRef) => {
  const newComment = {
    user:"User name",
    comment:valueRef,
    id:333,
  }
  setComList([...comList,newComment]);
}

useEffect(() => {
  setComList(comList)
},[comList]);

useEffect(() => {
  if(comments.length === 0){
    return;
  }
  setComList(comments);
},[comments]);
console.log("B_comList",comList);





  return (
    <div>
      {comList.map(comment => {
        return(
          <div>
            <Comment comment={comment} addComment={addComment} />
          </div>
        )
      })}
    </div>
  );
};

export default Comments;