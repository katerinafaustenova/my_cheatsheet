import React from "react";
import { NavLink } from "react-router-dom";
import Box from "./../components/Box/Box";
import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      best: [
        { category: "React", sub: "React Router" },
        { category: "React", sub: "React State" },
        { category: "JS", sub: "If Else" },
      ],
    };
  }
  render() {
    return (
      <div className="home">
        {this.state.best.map((item) => (
          <NavLink
            to={`/${item.category}/${item.sub}`}
            key={`/${item.category}/${item.sub}`}
          >
            <Box category={item.category} sub={item.sub} />
          </NavLink>
        ))}
      </div>
    );
  }
}

export default Home;
