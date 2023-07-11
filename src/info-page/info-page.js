import "./info-page.css";
import NavBar from "../components/navbar.js";

function InfoPage() {
  return (
    <div className="info-page">
      <nav>
        <NavBar />
      </nav>
      <section id="info-box" className="descriptions">
        <div className="text-container">
          <h2>Developer Info</h2>
          <p className="info-text">
            <a
              href="https://github.com/Edge-webdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Account
            </a>
          </p>
          <p className="info-text">
            <a
              href="https://github.com/Edge-webdev/hanzi-database"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website Repository
            </a>
          </p>
          <p className="info-text">
            API used:{" "}
            <a
              href="http://ccdb.hemiola.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chinese Character Database
            </a>
          </p>
          <h2>Other work made by developer:</h2>
          <ul id="site-list">
            <li>
              <a
                href="https://edgesearchfilter.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Search Filter
              </a>
            </li>
            <li>
              <a
                href="https://edgerandomquotegenerator.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quote Generator
              </a>
            </li>
            <li>
              <a
                href="https://edgepokedex.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Online Pokedex
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default InfoPage;
