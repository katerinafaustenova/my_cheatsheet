import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import LogInPage from "../components/LogIn/LogInPage";
import RouterPage from "../components/Router/RouterPage";
import StatePropsPage from "../components/StateProps/StatePropsPage";
import ToDoPage from "../components/ToDo/ToDoPage";
import TimeComponentsPage from "../components/TimeComponents/TimeComponentsPage";
import TipCalculatorPage from "../components/TipCalculator/TipCalculatorPage";
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
        <Route path="/React/LogInPage">
          <LogInPage />
        </Route>
        <Route path="/React/RouterPage">
          <RouterPage />
        </Route>
        <Route path="/React/StatePropsPage">
          <StatePropsPage />
        </Route>
        <Route path="/React/ToDoPage">
          <ToDoPage />
        </Route>
        <Route path="/React/TimeComponentsPage">
          <TimeComponentsPage />
        </Route>
        <Route path="/React/TipCalculatorPage">
          <TipCalculatorPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
