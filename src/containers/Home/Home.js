import React from "react";
import { NavLink } from "react-router-dom";
import Box from "./../../components/Box/Box";
import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      boxes: [
        { category: "React", sub: "RouterPage", title: "Router" },
        { category: "React", sub: "StatePropsPage", title: "State and Props" },
      ],
    };
  }

  render() {
    return (
      <div className="home">
        <div className="title">
          <h2>In progress...</h2>
        </div>
        {this.state.boxes.map((item) => {
          const { category, sub, title } = item;
          return (
            <NavLink to={`/${category}/${sub}`} key={`/${category}/${sub}`}>
              <Box title={title === "" ? sub : title} />
            </NavLink>
          );
        })}
      </div>
    );
  }
}

export default Home;
