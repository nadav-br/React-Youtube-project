import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  SearchDiv,
  SearchInput,
  SearchButton,
  Block,
  SearchForm,
} from "../../Styled Components/SearchStyles";
import {ReactComponent as Youtube} from "../../../src/assets/YouTube_Logo.svg";
import {ReactComponent as SearchIcon} from "../../../src/assets/search.svg";
import {ReactComponent as User} from "../../../src/assets/clerk.svg";
import styled from "styled-components";

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
      <Block><UserIcon /></Block>
      <SearchForm onSubmit={() => clickSearch()}>
          <SearchButton onClick={() => clickSearch()}><Icon/></SearchButton>
          <SearchInput
            type="text"
            placeholder="חיפוש"
            onChange={e => handleInput(e)}
          ></SearchInput>
      </SearchForm>
      <a href={"/"}>
      <YouTube />
      </a>
    </SearchDiv>
  );
};

const UserIcon = styled(User)`
width: 6vh;
padding 0 33px;
`;

const YouTube = styled(Youtube)`
width:15vh;
padding 0 33px;
`;

const Icon = styled(SearchIcon)`
width:15px;
height:15px;
margin-top:4px;
fill:#666666;
`;

export default SearchVideo;
