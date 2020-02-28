import styled from "styled-components";

export const LikesBtns = styled.button`
  width: 60%;
  height: 60%;
  background-color: Transparent;
  border: none;
  cursor:pointer;
  overflow: hidden; 
  background-repeat:no-repeat;  
  font-weight: bold;
  
  &:focus {
    color: blue
  }`;

export const CommentInput = styled.input`
 margin-top: 20px;
 width: 40vw;
 border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  direction:RTL;
  
`;

export const Comments = styled.div`
 margin-top: 20px;
 width: 40vw;
 direction:RTL;
 
`;