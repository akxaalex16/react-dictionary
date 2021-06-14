import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [searchedWord, setSearchedWord] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
