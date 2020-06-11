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
              exact
              activeClassName="active"
              className={this.state.open === "HTML" && "activeTitle"}
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
            <NavLink
              to="/CSS"
              exact
              onClick={() => this.handleClick("CSS")}
              className={this.state.open === "CSS" && "activeTitle"}
            >
              CSS
            </NavLink>
            {this.state.open === "CSS" && (
              <div className="dropdown">
                <NavLink to="/CSS/1" exact>
                  CSS 1
                </NavLink>
              </div>
            )}
          </li>
          <li>
            <NavLink
              to="/JS"
              exact
              onClick={() => this.handleClick("JS")}
              className={this.state.open === "JS" && "activeTitle"}
            >
              JS
            </NavLink>
            {this.state.open === "JS" && (
              <div className="dropdown">
                <NavLink to="/JS/1" exact>
                  JS 1
                </NavLink>
              </div>
            )}
          </li>
          <li>
            <NavLink
              to="/React"
              exact
              onClick={() => this.handleClick("React")}
              className={this.state.open === "React" && "activeTitle"}
            >
              React
            </NavLink>
            {this.state.open === "React" && (
              <div className="dropdown">
                <NavLink to="/React/ReactRouter" exact>
                  React Router
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
