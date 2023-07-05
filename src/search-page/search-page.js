import "./search-page.css";
import NavBar from "../components/navbar.js";
import { useState, useEffect } from "react";
import CharacterCard from "../components/card.js";
import { Pagination } from "react-pagination-bar";

function SearchPage() {
  const [input, setInput] = useState("");
  const [charData, setCharData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = [
    "kMandarin",
    "kCantonese",
    "kJapaneseOn",
    "kJapaneseKun",
    "kDefinition",
    "string",
  ];
  const pageCharsLimit = 100;

  async function fetchcharData() {
    const response = await fetch(
      "http://ccdb.hemiola.com/characters?filter=gb&fields=kDefinition,kMandarin,kCantonese,kJapaneseOn,kJapaneseKun, string"
    );
    const data = await response.json();
    setCharData(data);
  }
  useEffect(() => {
    fetchcharData();
  }, []);

  const includesInput = (text) => {
    return String(text).toLowerCase().includes(input.toLowerCase());
  };

  const filter = (data) => {
    const result = data.filter((char) => {
      if (input === "") return char;
      return searchParams.some((prop) => {
        return includesInput(char[prop]);
      });
    });
    return result;
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setCurrentPage(1);
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
          autoComplete="off"
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
