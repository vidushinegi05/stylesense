// Developed by Vidushi Negi (24BCE0786)
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="brand-link">
          StyleSense
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/evaluate"
            className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`}
          >
            Evaluate Outfit
          </NavLink>
          <NavLink
            to="/style-tips"
            className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`}
          >
            Style Tips
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
