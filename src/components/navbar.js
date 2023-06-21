function NavBar() {
  return (
    <div id="nav-bar">
      <h1 id="title">汉字数据库 The Hanzi Database</h1>
      <ul id="nav-links">
        <li>
          <a className="nav-link" href="#a">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#b">
            Info
          </a>
        </li>
        <li>
          <a className="nav-link" href="#c">
            Database
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
