import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="header_top">
      <Link to="/home">
        <span>My Cheatsheet</span>
      </Link>
    </div>
  );
}

export default Header;
