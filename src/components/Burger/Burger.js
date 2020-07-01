import React from "react";
import "./Burger.css";

class Burger extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <p>Burger</p>
        <div className="topnav">
          <button
            className={`burger ${this.state.isOpen && "red"}`}
            onClick={this.handleClick}
          >
            CLICK ME
          </button>
          <div className={`topnav_wrapper ${this.state.isOpen && "show"}`}>
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Burger;
