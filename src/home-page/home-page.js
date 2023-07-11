import "./home-page.css";
import NavBar from "../components/navbar.js";
import CharacterCard from "../components/card";

function HomePage() {
  return (
    <div className="home-page">
      <nav>
        <NavBar />
      </nav>
      <section id="welcome" className="descriptions">
        <div className="text-container">
          <h1>Welcome to the Hanzi Database</h1>
          <p>
            A collection of ~21000 characters both simplified and traditional
          </p>
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
          <CharacterCard
            hanzi="我"
            cmn="Wǒ"
            yue="Ngo5"
            jkun="Ware, wa"
            jon="Ga"
            krn="A"
            viet="Ngã"
            def="Our, us, i, me, my, we"
          />
          <p>
            It gives the readings of the character in Mandarin, Cantonese, and
            Japanese (both on'yomi and kun'yomi) <br /> as well as historical
            readings for Korean and Vietnamese. <br /> That is all for this home
            page. <br /> Happy searching!
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
