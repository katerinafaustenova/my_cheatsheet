import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./StateProps.css";

const codeHomeState = ` class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      best: [
        { category: "React", sub: "Router", title: "Router" },
        { category: "React", sub: "StateProps", title: "State and Props" },
      ],
    };
  }`;

// eslint-disable-next-line
const path = "`/${item.category}/${item.sub}`";

const codeHomeRender = ` render() {
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

const codeBoxProps = `function Box(props) {
  return <div className="box">{props.title}</div>;
}`;

function StatePropsPage() {
  return (
    <div className="stateprops_page">
      <h1>State and Props</h1>
      <h2>Explanation and usage</h2>
      <p>
        React state is an object that represents the parts of the app that can
        change.
      </p>
      <p>
        State is needed when we want our app to do something and to keep track
        of it (interact like add or delete stuff, log in or log out from a user
        acount and know when the user is logged in or not).
      </p>
      <p>
        Each component can maintain its own state in an object called this.state
        in a key/value pairs.
      </p>
      <p>Only class component can use state as an example below !</p>
      <p>
        For changing the current state we need to explicitly said that to React,
        and we do that by calling this.setState method inside a component.
      </p>
      <p>
        When changing the state, React will automatically re-render every time
        we call setState method.
      </p>
      <p>
        Very important is NOT to change this.state directly. Use this.setState.
      </p>
      <p>
        State changes are asynchronous. If we read from this.state immediately
        after calling this.setState, it probably won’t reflect the changes yet.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {codeHomeState}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {codeHomeRender}
      </SyntaxHighlighter>
      <p>
        React props (properties) allow us to pass some data from one component
        to another.
      </p>
      <p>
        Props can be passed only one way - from top to bottom, which means from
        parent to its children.
      </p>
      <p>
        Important information is that props are read-only. So the data coming
        from a parent should NOT be changed by its children.
      </p>
      <p>
        To pass data, first we need to set attribute and its value. Then we can
        use props keyword to pass it to its children as shown below with the Box
        component.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {codeBoxProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default StatePropsPage;
