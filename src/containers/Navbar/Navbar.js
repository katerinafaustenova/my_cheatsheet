import React from "react";
import { NavLink } from "react-router-dom";
import { DropdownData } from "./DropdownData";
import "./Navbar.css";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      open: "React",
      dropdownItems: DropdownData,
    };
  }

  handleClick = (par) => {
    if (this.state.open !== par) {
      return this.setState(() => ({ open: par }));
    }
  };

  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/React"
              exact
              onClick={() => this.handleClick("React")}
              className={this.state.open === "React" ? "activeTitle" : null}
            >
              React
            </NavLink>
            <div className="dropdown">
              {this.state.dropdownItems.map((item) => {
                return (
                  <span key={item.path}>
                    <NavLink to={item.path} exact>
                      {item.name}
                    </NavLink>
                  </span>
                );
              })}
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
