import React,{useState} from "react";

const Actions = (props) => {  

  const [likes, setLikes] = useState(props.likes)

  return (
    <div>
      <button onClick={props.addLike} >Likes {props.likes} </button>
      <button onClick={props.addUnLikes} >unLikes {props.unLikes} </button>
    </div>
  );  
}

export default Actions;
