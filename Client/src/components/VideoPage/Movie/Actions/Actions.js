import React,{useState} from "react";
import {ReactComponent as LikeIMg} from './like.svg';
import {ReactComponent as DisLikeImg} from './dislike.svg';

import {  
  LikesBtns,
  Container
} from "../../../../Styled Components/VideoPageStyle";
const Actions = (props) => {  

  const [likes, setLikes] = useState(props.likes)

  return (
    <Container>
      <LikesBtns onClick={props.addLike} > {props.likes} <LikeIMg /></LikesBtns>
      <LikesBtns onClick={props.addUnLikes} >{props.unLikes} <DisLikeImg/></LikesBtns>
    </Container>
  );  
}

export default Actions;
