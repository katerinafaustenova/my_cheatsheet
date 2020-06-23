import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Router.css";

const code_app = ` return (
  <div className="app">
    <BrowserRouter>
      <Header />
      <div className="app_content">
        <Navbar />
        <Content />
      </div>
    </BrowserRouter>
  </div>
);`;

const code_content = ` return (
  <div className="content_right">
    <Redirect to="/home" />
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/React/Clock">
        <Clock />
      </Route>
      <Route path="/React/Countdown">
        <CountdownPage />
      </Route>
    </Switch>
  </div>
);`;

const code_navbar = ` return (
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
        {this.state.open === "React" && (
          <div className="dropdown">
            <NavLink to="/React/Clock" exact>
              Clock
            </NavLink>
            <NavLink to="/React/Countdown" exact>
              Countdown
            </NavLink>
          </div>
        )}
      </li>
    </ul>
  </nav>
);
`;

function Router() {
  return (
    <React.Fragment>
      <h1>Router</h1>
      <h2>Installation</h2>
      <p>npm install react-router-dom</p>
      <h2>Usage</h2>
      <p>
        3 “pages” handled by the router: a home page, a react clock page and a
        react countdown page. As you click around on the different NavLinks, the
        router renders the matching Route. Behind the scenes a NavLink renders
        an anchor tag with a real href, so people using the keyboard for
        navigation or screen readers will still be able to use this.
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

export default Router;
