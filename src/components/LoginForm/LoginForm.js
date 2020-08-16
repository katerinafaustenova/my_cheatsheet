import React from "react";
import { Button } from "../Button/Button";
import Login from "./Login";
import styles from "./LoginForm.module.css";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      controls: [
        "Log In",
        "Sign Up",
        "Forgot password",
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
      <React.Fragment>
        <div className={styles.controlButtons}>
          {controls.map((item) => (
            <Button
              handleChangeCurrentState={this.handleChangeCurrentState}
              title={item}
              key={item}
            />
          ))}
        </div>
        <div className={styles.form}>
          <Login
            currentState={currentState}
            handleChangeCurrentState={this.handleChangeCurrentState}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
