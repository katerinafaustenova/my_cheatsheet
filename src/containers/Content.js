import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Router from "../components/Router/Router";
import StateProps from "../components/StateProps/StateProps";
import CountdownPage from "../components/Countdown/CountdownPage";
import Clock from "../components/Clock/Clock";
import TipCalculator from "../components/TipCalculator/TipCalculator";

import "./Content.css";

// A <Switch> looks through its children <Route>s and renders the first one that matches the current URL.

function Content() {
  return (
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
        <Route path="/React/Router">
          <Router />
        </Route>
        <Route path="/React/StateProps">
          <StateProps />
        </Route>
        <Route path="/React/TipCalculator">
          <TipCalculator />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
