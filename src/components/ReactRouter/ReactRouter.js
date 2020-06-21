import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./ReactRouter.css";

const code_app = `function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_content">
        <BrowserRouter>
          <Navbar />
          <Content />
        </BrowserRouter>
      </div>
    </div>
  );
}`;

const code_content = `function Content() {
  return (
    <div className="content_right">
      <Switch>
        <Route path="/ReactRouter">
          <ReactRouter />
        </Route>
        <Route path="/Errors">
          <Errors />
        </Route>
        <Route path="/CSSTemplates">
          <CSSTemplates />
        </Route>
      </Switch>
    </div>
  );
}`;

const code_navbar = `function Navbar() {
  return (
    <nav className="nav_left">
      <ul>
        <li>
          <NavLink to="/ReactRouter">React Router</NavLink>
        </li>
        <li>
          <NavLink to="/Errors">Errors</NavLink>
        </li>
        <li>
          <NavLink to="/CSSTemplates">CSS Templates</NavLink>
        </li>
      </ul>
    </nav>
  );
}`;

function ReactRouter() {
  return (
    <React.Fragment>
      <h1>Router</h1>
      <h2>Installation</h2>
      <p>npm install react-router-dom</p>
      <h2>Usage</h2>
      <p>
        2 “pages” handled by the router: a home page, an about page. As you
        click around on the different Links, the router renders the matching
        Route. Behind the scenes a Link renders an anchor tag with a real href,
        so people using the keyboard for navigation or screen readers will still
        be able to use this.
      </p>
      <div className="syntax_highlight_react_router">
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_app}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_content}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_navbar}
        </SyntaxHighlighter>
      </div>
    </React.Fragment>
  );
}

export default ReactRouter;
