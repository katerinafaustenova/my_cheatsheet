import React from "react";
import { NavLink } from "react-router-dom";
import { DropdownData } from "./dropdownData";
import styles from "./Navbar.module.css";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownItems: DropdownData,
    };
  }

  render() {
    const style = {
      backgroundColor: "var(--content_color)",
      color: "var(--active_color)",
    };

    return (
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <NavLink to="/React" exact className={styles.activeTitle}>
              React
            </NavLink>
            <div className={styles.dropdown}>
              {this.state.dropdownItems.map((item) => {
                const { path, name } = item;
                return (
                  <span key={path}>
                    <NavLink to={path} activeStyle={style} exact>
                      {name}
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
