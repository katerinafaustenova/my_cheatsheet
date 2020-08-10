import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to={`${process.env.PUBLIC_URL}/`}>
        <span>My Cheatsheet</span>
      </Link>
    </header>
  );
}

export default Header;
