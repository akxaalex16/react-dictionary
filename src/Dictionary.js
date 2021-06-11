import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [searchedWord, setSearchedWord] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    if (keyword <= 0) {
      alert("Enter a word");
    } else {
      setSearchedWord(keyword);
    }
  }
  function keywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          autoFocus={true}
          onChange={keywordChange}
        ></input>
      </form>
      <h2>{searchedWord}</h2>
    </div>
  );
}
