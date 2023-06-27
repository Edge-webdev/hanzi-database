import "./search-page.css";
import NavBar from "../components/navbar.js";
import { useState, useEffect } from "react";
import CharacterCard from "../components/card";

function SearchPage() {
  const [input, setInput] = useState("");
  const [charData, setCharData] = useState([]);

  const fetchcharData = () => {
    fetch(
      "http://ccdb.hemiola.com/characters?filter=gb&fields=kDefinition,kMandarin,kCantonese,kJapaneseOn,kJapaneseKun,string"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharData(data);
      });
  };
  useEffect(() => {
    fetchcharData();
  }, []);

  console.log(charData);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="search-page">
      <nav>
        <NavBar />
      </nav>
      <div id="search-bar">
        <input
          id="search"
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={input}
        />
        <img
          id="magnifying-glass"
          src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
          alt="magnifying glass"
        />
      </div>
      <section id="card-display">
        {charData.map((char) => (
          <CharacterCard
            key={char.string}
            hanzi={char.string}
            cmn={char.kMandarin}
            yue={char.kCantonese}
            jkun={char.kJapaneseKun}
            jon={char.kJapaneseOn}
          />
        ))}
      </section>
    </div>
  );
}

export default SearchPage;
