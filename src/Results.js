import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.meanings) {
    return (
      <div className="Results">
        <h2>{props.meanings.word}</h2>
        {props.meanings.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}

        {props.meanings.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Definitions definitions={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
