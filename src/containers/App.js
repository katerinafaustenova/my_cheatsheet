import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./Content";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_content">
        <BrowserRouter>
          <Navbar />
          <Content />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
