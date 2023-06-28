var pinyin_v1 = require("pinyin-tone");

function CharacterCard({ hanzi, cmn, yue, jkun, jon, def }) {
  return (
    <div className="character-card">
      <h2>{hanzi}</h2>
      <div className="readings">
        <p>
          Mandarin:{" "}
          {cmn
            ? String(pinyin_v1(String(cmn).toLowerCase()))
                .charAt(0)
                .toUpperCase() +
              String(pinyin_v1(String(cmn).toLowerCase()))
                .slice(1)
                .toLowerCase()
                .replace(/\s+/g, ", ")
            : "No reading"}
        </p>
        <p>
          Cantonese:{" "}
          {yue
            ? String(yue).charAt(0).toUpperCase() +
              String(yue).slice(1).toLowerCase().replace(/\s+/g, ", ")
            : "No reading"}
        </p>
        <p>
          Japanese Kun'yomi:{" "}
          {jkun
            ? String(jkun).charAt(0).toUpperCase() +
              String(jkun).slice(1).toLowerCase().replace(/\s+/g, ", ")
            : "No reading"}
        </p>
        <p>
          Japanese On'yomi:{" "}
          {jon
            ? String(jon).charAt(0).toUpperCase() +
              String(jon).slice(1).toLowerCase().replace(/\s+/g, ", ")
            : "No reading"}
        </p>
        <p className="definition">
          Definition:{" "}
          {String(def).charAt(0).toUpperCase() +
            String(def).slice(1).toLowerCase()}
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;
