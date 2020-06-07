import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav_left">
      <ul>
        <li>
          <Link to="/ReactRouter">React Router</Link>
        </li>
        <li>
          <Link to="/Errors">Errors</Link>
        </li>
        <li>
          <Link to="/CSSTemplates">CSS Templates</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
