import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [searchedWord, setSearchedWord] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photo, setPhoto] = useState(null);

  function handleDictionaryResponse(response) {
    setSearchedWord(response.data[0]);
  }

  function handlePexelResponse(response) {
    console.log(response.data.photos);
    setPhoto(response.data.photos);
  }
  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    //documentation: https://www.pexels.com/api/documentation/?
    let pexelsApiKey =
      "563492ad6f91700001000001b64d435d9b3942c287aac9982bab6738";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelResponse);
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
              defaultValue={props.defaultWord}
            ></input>
            <input type="submit" value="🔍" className="search"></input>
          </form>
        </section>
        <Results meanings={searchedWord} />
        <Photos photos={photo} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
