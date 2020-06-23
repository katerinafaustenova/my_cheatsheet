import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      open: "React",
    };
  }

  handleClick = (par) => {
    if (this.state.open !== par) {
      return this.setState(() => ({ open: par }));
    }
    // this.setState(() => ({ open: "" }));
  };

  render() {
    return (
      <nav className="nav_left">
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
              <NavLink to="/React/Clock" exact>
                Clock
              </NavLink>
              <NavLink to="/React/Countdown" exact>
                Countdown
              </NavLink>
              <NavLink to="/React/Router" exact>
                Router
              </NavLink>
              <NavLink to="/React/StateProps" exact>
                State and Props
              </NavLink>
              <NavLink to="/React/TipCalculator" exact>
                Tip Calculator
              </NavLink>
            </div>
            {/* {this.state.open === "React" && (
                <span>hide / show</span>
            )} */}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
