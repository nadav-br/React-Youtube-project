import styled from "styled-components";


export const MainContainer = styled.div`
    background: rgb(249, 249, 249);
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 20px;    
`;

export const MovieFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;  
    margin-top: 30px;
    margin-right: 100px;
    & iframe {
        width:700px;
        height:400px;
        margin-left:50px;
    }

    & h3 {
        width:700px;   
        
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