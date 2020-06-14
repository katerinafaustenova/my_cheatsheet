import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./ReactState.css";

const path = "`/${item.category}/${item.sub}`";

const code_home = `class Home extends React.Component {
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
            to={${path}} 
            key={${path}}
          >
            <Box category={item.category} sub={item.sub} />
          </NavLink>
        ))}
       </div>
    );
  }
}`;

function ReactState() {
  return (
    <React.Fragment>
      <h1>React State</h1>
      <p>Description</p>
      <div className="syntax_highlight_react_state">
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_home}
        </SyntaxHighlighter>
      </div>
    </React.Fragment>
  );
}

export default ReactState;
