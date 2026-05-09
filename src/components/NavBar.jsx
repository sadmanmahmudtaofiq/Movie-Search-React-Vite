import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbarBrand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbarLinks">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/Favorites" className="navLink">
          Favorites
        </Link>{" "}
        <Link to="/socialmedias" className="navLink">
          Social Medians
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
