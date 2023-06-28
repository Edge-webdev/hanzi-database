import "./search-page.css";
import NavBar from "../components/navbar.js";
import { useState, useEffect } from "react";
import CharacterCard from "../components/card.js";
import Paginate from "../components/paginate.js";

function SearchPage() {
  const [input, setInput] = useState("");
  const [charData, setCharData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charsPerPage] = useState(100);

  const indexOfLastChar = currentPage * charsPerPage;
  const indexOfFirstChar = indexOfLastChar - charsPerPage;
  const currentChars = charData.slice(indexOfFirstChar, indexOfLastChar);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(charData.length / charsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const firstPage = () => {
    setCurrentPage(1);
  };
  const lastPage = () => {
    setCurrentPage(Math.ceil(charData.length / charsPerPage));
  };

  const fetchcharData = () => {
    fetch(
      "http://ccdb.hemiola.com/characters?filter=gb&fields=kDefinition,kMandarin,kCantonese,kJapaneseOn,kJapaneseKun, kDefinition, string"
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
        {currentChars.map((char) => (
          <CharacterCard
            key={char.string}
            hanzi={char.string}
            cmn={char.kMandarin}
            yue={char.kCantonese}
            jkun={char.kJapaneseKun}
            jon={char.kJapaneseOn}
            def={char.kDefinition}
          />
        ))}
      </section>
      <Paginate
        charsPerPage={charsPerPage}
        totalChars={charData.length}
        currentPage={currentPage}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        firstPage={firstPage}
        lastPage={lastPage}
      />
    </div>
  );
}

export default SearchPage;
