import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [contentShown, setContentShown] = useState(false);

  const handleDropdown = () => {
    setContentShown(!contentShown);
  };
  return (
    <div id="nav-bar">
      <h2 id="title">汉字数据库 (漢字數據庫) The Hanzi Database</h2>
      <ul id="nav-links">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/info">
            Info
          </Link>
        </li>
        <li>
          <Link to="/search" className="nav-link">
            Database
          </Link>
        </li>
      </ul>
      <div className="dropdown">
        <button className="dropbtn" onClick={handleDropdown}>
          Menu
        </button>
        <div
          className={
            contentShown ? "dropdown-content shown" : "dropdown-content"
          }
        >
          <ul>
            <li>
              {" "}
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/info">
                Info
              </Link>
            </li>
            <li>
              <Link to="/search" className="nav-link">
                Database
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
