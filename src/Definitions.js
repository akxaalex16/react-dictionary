import React from "react";

export default function Definitions(props) {
  console.log(props.definitions);
  return (
    <div className="Definitions">
      <h3>{props.definitions.partOfSpeech}</h3>
      {props.definitions.definitions.map(function (define, index) {
        return (
          <div key={index}>
            <p>
              {define.definition} <br /> <em>{define.example} </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
