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
    }

    & h3 {
        width:700px;   
        padding: 0px;
        margin:0;
            
    }

    padding: 0px;
  }

  & h4 {
    padding: 0px;
    margin: 0px;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 30%;
  padding: 0px;
`;

export const LikesBtns = styled.button`
  width: 80px;
  height: 30px;
  padding-top: 8px;
  display: flex;
  flex-direction: row;
  background-color: Transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  background-repeat: no-repeat;
  font-weight: bold;
  vertical-align: middle;
  background-position: 50%, 50%;
  &:focus {
    color: rgb(6, 95, 212);
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

