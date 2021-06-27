import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Coded by Akxa Alex, open-sourced on{" "}
        <a
          href="https://github.com/akxaalex16/react-dictionary"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {","} hosted on{" "}
        <a
          href="https://stupefied-goodall-ffae87.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        {","}
        <br />
        Photos provided by{" "}
        <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">
          Pexels
        </a>
      </footer>
    </div>
  );
}
