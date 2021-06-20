import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {" "}
      <audio
        controls
        src={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
      >
        Audio
      </audio>{" "}
      {props.phonetic.text}
    </div>
  );
}
