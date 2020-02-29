import React,{useState} from "react";
import {ReactComponent as LikeIMg} from './like.svg';
import {ReactComponent as DisLikeImg} from './dislike.svg';

import {  
  LikesBtns,
  ContainerBtn
} from "../../../../Styled Components/VideoPageStyle";
const Actions = (props) => {  

  const [likes, setLikes] = useState(props.likes)

  return (
    <ContainerBtn>
      <LikesBtns onClick={props.addLike} > {props.likes} <LikeIMg /></LikesBtns>
      <LikesBtns onClick={props.addUnLikes} >{props.unLikes} <DisLikeImg/></LikesBtns>
    </ContainerBtn>
  );  
}

export default Actions;
