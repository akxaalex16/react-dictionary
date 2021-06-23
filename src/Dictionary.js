import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [searchedWord, setSearchedWord] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setSearchedWord(response.data[0]);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search"
              autoFocus={true}
              onChange={keywordChange}
            ></input>
          </form>
          <div className="suggestedWords">
            Suggested words: sunset, exercise, beach, flower...{" "}
          </div>
        </section>
        <Results meanings={searchedWord} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
