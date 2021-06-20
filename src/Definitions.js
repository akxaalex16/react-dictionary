import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      <h3>{props.definitions.partOfSpeech}</h3>
      {props.definitions.definitions.map(function (define, index) {
        return (
          <div key={index}>
            <main>
              <strong>Definition: </strong>
              {define.definition} <br /> <strong>Example: </strong>
              <em>{define.example} </em> <br />
              <Synonyms synonyms={define.synonyms} />
            </main>
          </div>
        );
      })}
    </div>
  );
}
