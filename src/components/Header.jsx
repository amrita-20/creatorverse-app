import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>CREATORVERSE</h1>
      <nav className="nav">
        <ul>
          <li>
            <a href="/" role="button">
              VIEW ALL CREATORS
            </a>
          </li>
          <li>
            <a href="/add" role="button">
              ADD CREATOR
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
