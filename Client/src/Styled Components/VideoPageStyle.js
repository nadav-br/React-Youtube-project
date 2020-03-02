import styled from "styled-components";

export const MainContainer = styled.div`
    background: rgb(249, 249, 249);
    display: flex;
    justify-content: space-between;
`;

export const MovieFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;  
    margin-top: 15px;
    margin-right: 33px;
    & iframe {
        width:62vw;
        height:65vh;
        margin-bottom:2vh;
    }

    & h4 {
        text-align:right;
        padding: 0px;
        margin:0;
            
    }
`;

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
  align-content:flex-start;
  margin:2vh 0;
  width:62vw;
`;

export const Views = styled.span`
  margin:0;
  padding:0;
`;

export const Block = styled.div`
  width:39vw;
`;

export const LikesBtns = styled.button`
  width: 90px;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: Transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline:none;
    color: rgb(6, 95, 212);
    border-bottom:2px solid rgb(6, 95, 212);
  }
`;

export const CommentInput = styled.input`
 width: 58.3vw;
 padding-bottom:5px;
 border: 0;
 outline: 0;
 background: transparent;
 border-bottom: 1px solid black;
 direction:RTL;
  
`;

export const InputContainer = styled.form`
 display:flex;
 justify-content:flex-start;
 align-items:flex-end;
 margin-bottom:5vh;
`;

export const CommentsCount = styled.span`
 margin-bottom:5vh;
`;

