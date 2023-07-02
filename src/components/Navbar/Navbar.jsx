import "./Nav.css";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav className="nav__main">
          <div className="navbar-brand">
            <h2>
              CENTED <span className="gold">7</span>
            </h2>
          </div>
          <div className="navbar__right">
            <ul className="navbar__right__list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About me </a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
