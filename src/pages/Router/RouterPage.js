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

function RouterPage() {
  return (
    <div className="router_page">
      <h1>Router</h1>
      <h2>Installation</h2>
      <p className="consoleText">yarn install react-router-dom</p>
      <h2>Explanation and usage</h2>
      <p>
        3 “pages” handled by the router: a home page, a react clock page and a
        react countdown page.
      </p>
      <p>
        The <span className="codeComponent">BrowserRouter</span> has to wrap all
        components, which are using router (it means every component, which uses
        switch, route and links or navlinks).
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {code_app}
      </SyntaxHighlighter>
      <p>
        A <span className="codeComponent">Switch</span> listens to the path
        (URL), than looks through its children -
        <span className="codeComponent">Routes</span> and renders whatever is
        inside a matching route, for example a whole component.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {code_content}
      </SyntaxHighlighter>
      <p>
        As you click around on the different
        <span className="codeComponent">NavLinks</span> in navigation, the
        assigned path is sent to the URL address.
      </p>
      <p>
        Behind the scenes the <span className="codeComponent">NavLink</span>
        renders an anchor tag with a real href, so people using the keyboard for
        navigation or screen readers will still be able to use this.
      </p>
      <p>
        The difference between <span className="codeComponent">Link</span> and
        <span className="codeComponent">NavLink</span> in that
        <span className="codeComponent">Link</span> has no active class on
        selected element,
        <span className="codeComponent">NavLink</span> is highlighted because an
        active class has been added to this element.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {code_navbar}
      </SyntaxHighlighter>
    </div>
  );
}

export default RouterPage;
