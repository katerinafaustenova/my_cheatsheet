import React from "react";
import { NavLink } from "react-router-dom";
import Box from "./../components/Box/Box";
import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      best: [
        { category: "React", sub: "RouterPage", title: "Router" },
        { category: "React", sub: "StatePropsPage", title: "State and Props" },
      ],
    };
  }
  render() {
    return (
      <div className="home">
        <div className="progress">
          <h2>In progress....</h2>
        </div>
        {this.state.best.map((item) => (
          <NavLink
            to={`/${item.category}/${item.sub}`}
            key={`/${item.category}/${item.sub}`}
          >
            <Box title={item.title === "" ? item.sub : item.title} />
          </NavLink>
        ))}
      </div>
    );
  }
}

export default Home;
