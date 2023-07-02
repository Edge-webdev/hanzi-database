import "./search-page.css";
import NavBar from "../components/navbar.js";
import { useState, useEffect } from "react";
import CharacterCard from "../components/card.js";
import { Pagination } from "react-pagination-bar";

function SearchPage() {
  const [input, setInput] = useState("");
  const [charData, setCharData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageCharsLimit = 100;

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

  const includesInput = (text) => {
    return String(text).toLowerCase().includes(input.toLowerCase());
  };

  const filter = (data) => {
    const result = data.filter((char) => {
      if (input === "") return char;
      return (
        includesInput(char.kMandarin) ||
        includesInput(char.kCantonese) ||
        includesInput(char.kJapaneseKun) ||
        includesInput(char.kJapaneseOn) ||
        includesInput(char.kDefinition)
      );
    });
    return result;
  };
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
        {filter(charData)
          .slice(
            (currentPage - 1) * pageCharsLimit,
            currentPage * pageCharsLimit
          )
          .map((char) => (
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
      <Pagination
        currentPage={currentPage}
        itemsPerPage={pageCharsLimit}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
        totalItems={filter(charData).length}
        pageNeighbours={2}
      />
    </div>
  );
}

export default SearchPage;
