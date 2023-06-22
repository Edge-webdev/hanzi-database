import "./home-page.css";
import "../components/navbar.js";
import NavBar from "../components/navbar.js";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <section id="welcome" className="descriptions">
        <div className="text-container">
          <h1>Welcome to the Hanzi Database</h1>
          <p>A collection of over 6000+ characters</p>
        </div>
      </section>
      <section id="about" className="descriptions">
        <h1>Why does this exist?</h1>
        <p>
          I created this website as a tool to help me, and potentially others,
          look up and learn Chinese characters
        </p>
      </section>
      <section id="demo" className="descriptions">
        <div className="text-container">
          <h1>How do I use this website?</h1>
          <p>
            Clicking on the database tab on the navbar sends you to the search
            bar where you can look up characters. <br /> Each character has a
            card associated with it. <br /> This is what a character card looks
            like.
          </p>
          <div id="demo-card">
            <h2>我</h2>
            <div id="readings">
              <p>Mandarin: Wǒ</p>
              <p>Cantonese: Ngo5</p>
              <p>Japanese Kun'yomi: Wa, Ware</p>
              <p>Japanese On'yomi: Ga</p>
            </div>
          </div>
          <p>
            It gives the readings of the character in Mandarin, Cantonese, and
            Japanese. <br /> That is all for this home page. <br /> Happy
            searching!
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
