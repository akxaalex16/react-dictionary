import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <h4>What word would you like to search for?</h4>
        <main>
          <Dictionary />
        </main>
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
        </footer>
      </div>
    </div>
  );
}
