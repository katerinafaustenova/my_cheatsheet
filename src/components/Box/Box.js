import React from "react";
import "./Box.css";

function Box(props) {
  return <div className="box">{props.title}</div>;
}

export default Box;
