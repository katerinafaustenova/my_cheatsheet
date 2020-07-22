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
          <Navbar />
          {/* <div className="app_flexRows"> */}
          <Content />
          {/* </div> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
