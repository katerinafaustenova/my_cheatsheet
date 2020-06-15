import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ReactRouter from "../components/ReactRouter/ReactRouter";
import ReactState from "../components/ReactState/ReactState";
import Errors from "../components/Errors/Errors";
import CSSTemplates from "../components/CSSTemplates/CSSTemplates";
import Home from "./Home";
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
        <Route path="/React/React_Router">
          <ReactRouter />
        </Route>
        <Route path="/React/React_State">
          <ReactState />
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
}

export default Content;
