import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  SearchDiv,
  SearchInput,
  SearchButton,
  Block,
} from "../../Styled Components/SearchStyles";
import logo from "./youtube.png";
import {ReactComponent as Youtube} from "../../../src/assets/YouTube_Logo.svg";
import {ReactComponent as SearchIcon} from "../../../src/assets/search.svg";
import styled from "styled-components";

const YouTube = styled(Youtube)`
width:15vh`;
const Icon = styled(SearchIcon)`
width:20px`;


const SearchVideo = () => {
  const [input, setInput] = useState("");
  let history = useHistory();
  const handleInput = e => {
    setInput(e.target.value);
  };
  const clickSearch = () => {
    history.push("/search-results/" + input);
  };

  return (
    <SearchDiv>
      <Block></Block>
      <form onSubmit={() => clickSearch()}>
          <SearchButton onClick={() => clickSearch()}>Icon/></SearchButton>
          <SearchInput
            type="text"
            placeholder="חיפוש"
            onChange={e => handleInput(e)}
          ></SearchInput>
      </form>
      <a href={"http://localhost:3000/"}>
      <YouTube />
      </a>
    </SearchDiv>
  );
};

export default SearchVideo;
