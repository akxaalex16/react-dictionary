import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.meanings) {
    return (
      <div className="Results">
        <section>
          <h2>{props.meanings.word}</h2>
          {props.meanings.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.meanings.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Definitions definitions={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
