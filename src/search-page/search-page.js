import "./search-page.css";
import NavBar from "../components/navbar.js";
import { useState } from "react";
import CharacterCard from "../components/card";

function SearchPage() {
  const [input, setInput] = useState("");

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
        <CharacterCard
          hanzi="我"
          cmn="Wǒ"
          yue="Ngo5"
          jkun="Wa, Ware"
          jon="Ga"
        />
        <CharacterCard
          hanzi="我"
          cmn="Wǒ"
          yue="Ngo5"
          jkun="Wa, Ware"
          jon="Ga"
        />
        <CharacterCard
          hanzi="我"
          cmn="Wǒ"
          yue="Ngo5"
          jkun="Wa, Ware"
          jon="Ga"
        />
        <CharacterCard
          hanzi="我"
          cmn="Wǒ"
          yue="Ngo5"
          jkun="Wa, Ware"
          jon="Ga"
        />
        <CharacterCard
          hanzi="我"
          cmn="Wǒ"
          yue="Ngo5"
          jkun="Wa, Ware"
          jon="Ga"
        />
        <CharacterCard
          hanzi="我"
          cmn="Wǒ"
          yue="Ngo5"
          jkun="Wa, Ware"
          jon="Ga"
        />
        <CharacterCard
          hanzi="我"
          cmn="Wǒ"
          yue="Ngo5"
          jkun="Wa, Ware"
          jon="Ga"
        />
      </section>
    </div>
  );
}

export default SearchPage;
