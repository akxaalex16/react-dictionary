import React from "react";
import Definitions from "./Definitions";

export default function Results(props) {
  if (props.meanings) {
    return (
      <div className="Results">
        <h2>{props.meanings.word}</h2>
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
