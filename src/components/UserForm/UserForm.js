import React from "react";
import { Button } from "./../Button/Button";
import Form from "./Form";
import "./UserForm.css";

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      controls: [
        "Log In",
        "Sign Up",
        "Forgot password ?",
        "Logged in message",
        "Signed up message",
        "New password sent message",
      ],
      currentState: "Log In",
    };
  }

  handleChangeCurrentState = (value) => {
    this.setState({
      currentState: value,
    });
  };

  render() {
    const { controls, currentState } = this.state;
    return (
      <div className="user_form_wrapper">
        {controls.map((item) => (
          <Button
            handleChangeCurrentState={this.handleChangeCurrentState}
            title={item}
            key={item}
          />
        ))}
        <div className="user_form">
          <Form
            currentState={currentState}
            handleChangeCurrentState={this.handleChangeCurrentState}
          />
        </div>
      </div>
    );
  }
}

export default UserForm;
