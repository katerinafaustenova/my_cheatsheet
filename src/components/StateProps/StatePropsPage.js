import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./StateProps.css";

const code_home_state = ` class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      best: [
        { category: "React", sub: "Router", title: "Router" },
        { category: "React", sub: "StateProps", title: "State and Props" },
      ],
    };
  }`;

const path = "`/${item.category}/${item.sub}`";

const code_home_render = ` render() {
  return (
    <div className="home">
      {this.state.best.map((item) => (
        <NavLink
          to={${path}}
          key={${path}}
        >
          <Box title={item.title === "" ? item.sub : item.title} />
        </NavLink>
      ))}
    </div>
  );
}`;

const code_box_props = `function Box(props) {
  return <div className="box">{props.title}</div>;
}`;

function StatePropsPage() {
  return (
    <React.Fragment>
      <h1>State and Props</h1>
      <p>Description</p>
      <div className="syntax_highlight_react_state">
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_home_state}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_home_render}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_box_props}
        </SyntaxHighlighter>
      </div>
    </React.Fragment>
  );
}

export default StatePropsPage;
