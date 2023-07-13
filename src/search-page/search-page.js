import "./search-page.css";
import NavBar from "../components/navbar.js";
import { useState, useEffect } from "react";
import CharacterCard from "../components/card.js";
import { Pagination } from "react-pagination-bar";

function SearchPage() {
  const [input, setInput] = useState("");
  const [option, setOption] = useState("");
  const [charData, setCharData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = [
    "kMandarin",
    "kCantonese",
    "kJapaneseKun",
    "kJapaneseOn",
    "kKorean",
    "kVietnamese",
    "kDefinition",
    "string",
  ];
  const options = {
    cmn: "kMandarin",
    yue: "kCantonese",
    jkun: "kJapaneseKun",
    jon: "kJapaneseOn",
    krn: "kKorean",
    viet: "kVietnamese",
    def: "kDefinition",
  };
  const pageCharsLimit = 120;

  async function fetchcharData() {
    const response = await fetch(
      "https://thehanzidatabase.netlify.app/api/characters?fields=kDefinition,kMandarin,kCantonese,kJapaneseOn,kJapaneseKun,kKorean,kVietnamese,string"
    );
    const data = await response.json();
    setCharData(data);
  }
  useEffect(() => {
    fetchcharData();
  }, []);

  const includesInput = (text) => {
    return removeTone(String(text)).toLowerCase().includes(input.toLowerCase());
  };

  const filter = (data) => {
    const result = data.filter((char) => {
      if (input === "") return char;
      return searchParams.some((prop) => {
        if (option === "all") {
          return includesInput(char[prop]);
        }
        return includesInput(char[options[option]]);
      });
    });
    return result;
  };

  const removeTone = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/gi, "")
      .replace(/Đ/gi, "d");
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setCurrentPage(1);
  };

  const handleOptionChange = (e) => {
    e.preventDefault();
    setOption(e.target.value);
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
          onChange={handleInputChange}
          value={input}
          autoComplete="off"
        />
        <img
          id="magnifying-glass"
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg"
          alt="magnifying glass"
        />
      </div>
      <div id="search-menu-container">
        <label htmlFor="search-menu">Search reading for:</label>

        <select
          name="search-menu"
          id="search-menu"
          onChange={handleOptionChange}
        >
          <option value="all">All</option>
          <option value="cmn">Mandarin Chinese</option>
          <option value="yue">Cantonese</option>
          <option value="jkun">Japanese Kun'yomi</option>
          <option value="jon">Japanese On'yomi</option>
          <option value="krn">Korean</option>
          <option value="viet">Vietnamese</option>
          <option value="def">Definition</option>
        </select>
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={pageCharsLimit}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
        totalItems={filter(charData).length}
        pageNeighbours={2}
      />
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
              krn={char.kKorean}
              viet={char.kVietnamese}
              def={char.kDefinition}
            />
          ))}
      </section>
    </div>
  );
}

export default SearchPage;
