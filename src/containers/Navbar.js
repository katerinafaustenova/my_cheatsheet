import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      open: "",
    };
  }

  handleClick = (par) => {
    if (this.state.open !== par) {
      return this.setState(() => ({ open: par }));
    }
    this.setState(() => ({ open: "" }));
  };

  render() {
    return (
      <nav className="nav_left">
        <ul>
          <li>
            <NavLink
              to="/HTML"
              activeClassName="active"
              onClick={() => this.handleClick("HTML")}
            >
              HTML
            </NavLink>
            {this.state.open === "HTML" && (
              <div className="dropdown">
                <NavLink to="/HTML/1" exact>
                  HTML 1
                </NavLink>
                <NavLink to="/HTML/2" exact>
                  HTML 2
                </NavLink>
                <NavLink to="/HTML/3" exact>
                  HTML 3
                </NavLink>
              </div>
            )}
          </li>
          <li>
            <NavLink to="/CSS" onClick={() => this.handleClick("CSS")}>
              CSS
            </NavLink>
            {this.state.open === "CSS" && (
              <div className="dropdown">
                <NavLink to="/CSS/1">CSS 1</NavLink>
              </div>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
