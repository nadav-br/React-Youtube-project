import React,{useState} from "react";
import {ReactComponent as LikeIMg} from './like.svg';
import {ReactComponent as DisLikeImg} from './dislike.svg';
import styled from "styled-components";
import {  
  LikesBtns,
  ContainerBtn,
  Views,
  Block
} from "../../../../Styled Components/VideoPageStyle";
const Actions = (props) => {  

  const [likes, setLikes] = useState(props.likes)

  return (
    <ContainerBtn>
      <LikesBtns onClick={props.addLike} > {props.likes} <Like /></LikesBtns>
      <LikesBtns onClick={props.addUnLikes} >{props.unLikes} <DisLike/></LikesBtns>
      <Block></Block>
      <Views>צפיות {props.viewCount}</Views>
    </ContainerBtn>
  );  
}

const Like = styled(LikeIMg)`
width:22px;
height:22px;
margin:-6px 5px;
fill:#666666;`

const DisLike = styled(DisLikeImg)`
width:22px;
height:22px;
margin:-1px 5px;
fill:#666666;`

export default Actions;
