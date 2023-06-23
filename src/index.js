import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchPage from "./search-page/search-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchPage />
  </React.StrictMode>
);
