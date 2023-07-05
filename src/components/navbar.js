import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="nav-bar">
      <h2 id="title">汉字数据库 The Hanzi Database</h2>
      <ul id="nav-links">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <a className="nav-link" href="#b">
            Info
          </a>
        </li>
        <li>
          <Link to="/search" className="nav-link">
            Database
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
