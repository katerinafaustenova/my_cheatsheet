import React from "react";
import "./Button.css";

export function Button(props) {
  return (
    <button
      className="button"
      onClick={() => {
        props.handleChangeCurrentState(props.title);
      }}
    >
      {props.title}
    </button>
  );
}

export function FormButton(props) {
  return (
    <button
      className="form_button"
      onClick={() => {
        props.handleChangeCurrentState(props.title);
      }}
    >
      {props.title}
    </button>
  );
}
