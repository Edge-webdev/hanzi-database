import * as React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./home-page/home-page";
import SearchPage from "./search-page/search-page";
import InfoPage from "./info-page/info-page";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}
