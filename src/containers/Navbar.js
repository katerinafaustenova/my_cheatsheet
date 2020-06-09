import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav_left">
      <ul>
        <li>
          <NavLink to="/ReactRouter" activeClassName="active">
            React Router
          </NavLink>
        </li>
        <li>
          <NavLink to="/Errors" activeClassName="active">
            Errors
          </NavLink>
        </li>
        <li>
          <NavLink to="/CSSTemplates" activeClassName="active">
            CSS Templates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
