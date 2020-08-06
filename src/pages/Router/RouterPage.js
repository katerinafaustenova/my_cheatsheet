import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Router.css";

const codeImportApp = `import { BrowserRouter } from "react-router-dom";`;

const codeApp = ` return (
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

const codeImportContent = `import { Switch, Route, Redirect } from "react-router-dom";`;

const codeContent = ` return (
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

const codeImportNav = `import { NavLink } from "react-router-dom";`;

const codeNav = ` return (
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
      <p className="console_text monospace">yarn add react-router-dom</p>
      <h2>Explanation and usage</h2>
      <p>
        3 “pages” handled by the router: a home page, a react clock page and a
        react countdown page.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {codeImportApp}
      </SyntaxHighlighter>
      <p>
        The <span className="code_component">BrowserRouter</span> has to wrap
        all components, which are using router (it means every component, which
        uses switch, route and links or navlinks).
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {codeApp}
      </SyntaxHighlighter>
      <p>
        A <span className="code_component">Switch</span> listens to the path
        (URL), than looks through its children -
        <span className="code_component">Routes</span> and renders whatever is
        inside a matching route, for example a whole component.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {codeImportContent}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {codeContent}
      </SyntaxHighlighter>
      <p>
        As you click around on the different
        <span className="code_component">NavLinks</span> in navigation, the
        assigned path is sent to the URL address.
      </p>
      <p>
        Behind the scenes the <span className="code_component">NavLink</span>
        renders an anchor tag with a real href, so people using the keyboard for
        navigation or screen readers will still be able to use this.
      </p>
      <p>
        The difference between <span className="code_component">Link</span> and
        <span className="code_component">NavLink</span> in that
        <span className="code_component">Link</span> has no active class on
        selected element,
        <span className="code_component">NavLink</span> is highlighted because
        an active class has been added to this element.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {codeImportNav}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
        className="syntax_highlighter"
      >
        {codeNav}
      </SyntaxHighlighter>
    </div>
  );
}

export default RouterPage;
