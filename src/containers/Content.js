import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import UserFormPage from "../pages/UserFormPage";
import RouterPage from "../pages/Router/RouterPage";
import StatePropsPage from "../pages/StateProps/StatePropsPage";
import ToDoPage from "../pages/ToDo/ToDoPage";
import TimeComponentsPage from "../pages/TimeComponents/TimeComponentsPage";
import TipCalculatorPage from "../pages/TipCalculator/TipCalculatorPage";
import "./Content.css";

function Content() {
  return (
    <div className="content_right">
      <Redirect to="/React/ToDoPage" />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/React/UserFormPage">
          <UserFormPage />
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
