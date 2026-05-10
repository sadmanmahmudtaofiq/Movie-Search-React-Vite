import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useEffect, useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbarBrand">
        <Link to="/">Movie App</Link>
      </div>

      <div className="navbarLinks">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/favorites" className="navLink">
          Favorites
        </Link>{" "}
        <Link to="/socialmedia" className="navLink">
          About us
        </Link>
      </div>

      <div className="menuContainer" onClick={closeMenu}>
        <i class="ri-menu-line"></i>
      </div>

      <div className={`sliderMenuLinks ${isOpen ? "open" : ""}`}>
        <div className="logo" onClick={closeMenu}>
          <Link to="/">Movie App</Link>
        </div>

        <Link to="/" className="navLink" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/favorites" className="navLink" onClick={closeMenu}>
          Favorites
        </Link>
        <Link to="/socialmedia" className="navLink" onClick={closeMenu}>
          Social Medias
        </Link>
      </div>

      <div
        className={`sliderBackground ${isOpen ? "sliderBackgroundOpen" : ""}`}
        onClick={closeMenu}
      ></div>
    </nav>
  );
}

export default NavBar;
