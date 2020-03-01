import styled from "styled-components";

export const SearchDiv = styled.div`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:7.5vh;
  margin: 5px 0;
`;

export const Block = styled.div`
width:20vh;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;  
  height:15px;
`;

export const SearchInput = styled.input`
  height: 30px;
  width:35vw;
  padding: 0px;
  direction: rtl;
  text-indent:5px;
  border: 0.5px solid #c4c4c4;
`;

export const SearchButton = styled.button`
  padding: 0px;
  height: 30px;
  width: 60px;
  border: 0.5px solid #c4c4c4;
  border-right: none;
  box-sizing: border-box;
`;
