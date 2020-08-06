import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./containers/Header";
import Navbar from "./containers/Navbar";
import Content from "./containers/Content";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app_wrapper_relative">
          <div className="app_innerwrapper_absolute">
            <Navbar />
            <Content/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
