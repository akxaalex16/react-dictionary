import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [searchedWord, setSearchedWord] = useState(null);

  function handleResponse(response) {
    setSearchedWord(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
      <Results meanings={searchedWord} />
    </div>
  );
}
