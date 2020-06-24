import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Clock from "../components/Clock/Clock";
import CountdownPage from "../components/Countdown/CountdownPage";
import LogIn from "../components/LogIn/LogIn";
import Router from "../components/Router/Router";
import StateProps from "../components/StateProps/StateProps";
import ToDo from "../components/ToDo/ToDo";
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
        <Route path="/React/LogIn">
          <LogIn />
        </Route>
        <Route path="/React/Router">
          <Router />
        </Route>
        <Route path="/React/StateProps">
          <StateProps />
        </Route>
        <Route path="/React/ToDo">
          <ToDo />
        </Route>
        <Route path="/React/TipCalculator">
          <TipCalculator />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
