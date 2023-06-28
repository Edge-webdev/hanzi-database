var pinyin_v1 = require("pinyin-tone");

function CharacterCard({ hanzi, cmn, yue, jkun, jon, def }) {
  const formatText = (text) =>
    String(text).charAt(0).toUpperCase() + String(text).slice(1).toLowerCase();
  return (
    <div className="character-card">
      <h2>{hanzi}</h2>
      <div className="readings">
        <p>
          Mandarin:{" "}
          {cmn
            ? formatText(pinyin_v1(String(cmn).toLowerCase())).replace(
                /\s+/g,
                ", "
              )
            : "No reading"}
        </p>
        <p>
          Cantonese:{" "}
          {yue ? formatText(yue).replace(/\s+/g, ", ") : "No reading"}
        </p>
        <p>
          Japanese Kun'yomi:{" "}
          {jkun ? formatText(jkun).replace(/\s+/g, ", ") : "No reading"}
        </p>
        <p>
          Japanese On'yomi:{" "}
          {jon ? formatText(jon).replace(/\s+/g, ", ") : "No reading"}
        </p>
        <p className="definition">Definition: {formatText(def)}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
