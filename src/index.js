import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// eslint-disable-next-line no-unused-vars
import SearchPage from "./search-page/search-page";
// eslint-disable-next-line no-unused-vars
import HomePage from "./home-page/home-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchPage />
  </React.StrictMode>
);
