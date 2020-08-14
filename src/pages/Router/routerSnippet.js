export const CodeImportApp = `import { BrowserRouter } from "react-router-dom";`;

export const CodeApp = ` return (
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

export const CodeImportContent = `import { Switch, Route, Redirect } from "react-router-dom";`;

export const CodeContent = ` return (
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

export const CodeImportNav = `import { NavLink } from "react-router-dom";`;

export const CodeNav = ` return (
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
