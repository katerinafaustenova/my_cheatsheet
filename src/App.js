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
        <div className="app_content">
          <div className="app_workspace">
            <Navbar />
            <Content />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
