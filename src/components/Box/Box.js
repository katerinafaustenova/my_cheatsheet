import React from "react";
import "./Box.css";

function Box(props) {
  return (
    <div className="box">
      {props.category} <br /> {props.sub}
    </div>
  );
}
export default Box;
