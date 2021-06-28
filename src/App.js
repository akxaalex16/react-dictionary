import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>📖 Dictionary</h1>
        <h4>What word would you like to search for?</h4>
        <main>
          <Dictionary defaultWord="sunset" />
        </main>
      </div>
      <Footer />
    </div>
  );
}
