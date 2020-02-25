import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchVideo.scss";


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
    <div className="searchVideo">
      
      <input
        className="searchInput"
        type="text"
        placeholder="חיפוש"
        onChange={e => handleInput(e)}
      ></input>
      <button className="searchBtn" onClick={() => clickSearch()}>
        search
      </button>
    </div>
  );
};

export default SearchVideo;
