import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Akxa Alex</footer>
      </div>
    </div>
  );
}
