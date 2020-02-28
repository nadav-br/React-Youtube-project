import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  SearchDiv,
  SearchInput,
  SearchButton,
  YoutubeLogo
} from "../../Styled Components/SearchStyles";
import logo from "./youtube.png";

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
      <Link
        to={"/"}
        style={{
          width: "100px",
          height: "35px",
          position: "absolute",
          marginLeft: "40%",
          marginTop: "1px"
        }}
      >
        <YoutubeLogo src={logo} alt="logo" />
      </Link>
      <form onSubmit={() => clickSearch()}>
        <SearchInput
          type="text"
          placeholder="חיפוש"
          onChange={e => handleInput(e)}
        ></SearchInput>
        <SearchButton onClick={() => clickSearch()}>search</SearchButton>
      </form>
    </SearchDiv>
  );
};

export default SearchVideo;
