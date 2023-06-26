function CharacterCard({ hanzi, cmn, yue, jkun, jon }) {
  return (
    <div className="character-card">
      <h2>{hanzi}</h2>
      <div className="readings">
        <p>Mandarin: {cmn}</p>
        <p>Cantonese: {yue}</p>
        <p>Japanese Kun'yomi: {jkun}</p>
        <p>Japanese On'yomi: {jon}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
