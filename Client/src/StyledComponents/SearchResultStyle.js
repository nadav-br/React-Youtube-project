import styled from "styled-components";

export const SearchResultDiv = styled.div`  
    width: 94%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;    
    background: rgb(249, 249, 249);
    margin-top: 20px;
`;

export const SearchResultVidDiv = styled.div`  
    display: flex;    
    flex-direction: row;  
    margin-top: 17px;
    margin-right: 25px;

    & h5 {
        padding-right: 15px;
    }

    & img {
        width: 246px;
        height: 138px;
    }
`;