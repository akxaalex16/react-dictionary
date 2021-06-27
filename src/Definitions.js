import React from "react";
import Synonyms from "./Synonyms";
import "./Definitions.css";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      <h3>{props.definitions.partOfSpeech}</h3>
      {props.definitions.definitions.map(function (define, index) {
        return (
          <div key={index}>
            <main>
              <div className="definition">--{define.definition} </div>
              <div className="example">"{define.example}"</div>
              <Synonyms synonyms={define.synonyms} />
            </main>
          </div>
        );
      })}
    </div>
  );
}
