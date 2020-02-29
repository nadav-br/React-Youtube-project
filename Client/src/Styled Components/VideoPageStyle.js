import styled from "styled-components";


export const MainContainer = styled.div`
    background: rgb(249, 249, 249);
    display: flex;
    justify-content: flex-start;
    width: 102%;
    
`;

export const MovieFrame = styled.iframe`
    

    & iframe {
        margin: 20px;
    }
    
`;

export const ContainerBtn = styled.div`
    display: flex;
    flex-direction: row;
    
`;
export const LikesBtns = styled.button`
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: row;    
    background-color: Transparent;
    border: none;
    cursor:pointer;
    overflow: hidden; 
    background-repeat:no-repeat;  
    font-weight: bold;
    vertical-align: middle;
    background-position: 50%, 50%;
    &:focus {
    color: rgb(6, 95, 212);
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