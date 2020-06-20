import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import ReactRouter from "../components/ReactRouter/ReactRouter";
import ReactState from "../components/ReactState/ReactState";
import CountdownPage from "../components/Countdown/CountdownPage";
import Clock from "../components/Clock/Clock";
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
        <Route path="/React/Router">
          <ReactRouter />
        </Route>
        <Route path="/React/State">
          <ReactState />
        </Route>
        <Route path="/React/Countdown">
          <CountdownPage />
        </Route>
        <Route path="/React/Clock">
          <Clock />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
