import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {" "}
      <audio
        controls
        src={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
      ></audio>{" "}
      <span className="text">({props.phonetic.text})</span>
    </div>
  );
}
