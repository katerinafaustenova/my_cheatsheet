import React from "react";
import classnames from "classnames";
import styles from "./Login.module.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: "",
      signupEmail: "",
      signupPassword: "",
      dummyData: { email: "test@test.cz", password: "1234" },
      email: "",
      password: "",
      lostPasswordEmail: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validationLogin = (e) => {
    e.preventDefault();
    const { dummyData, email, password } = this.state;
    if (email !== dummyData.email || password !== dummyData.password) {
      alert("Invalid email address or password");
    } else {
      this.props.handleChangeCurrentState("Logged in message");
    }
  };

  renderLoginForm = () => {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.validationLogin} className={styles.form}>
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={email}
          onChange={this.handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.handleChange}
          required
          minLength="4"
        />
        <input type="submit" value="Log In" />
        <div className={styles.footer}>
          <div
            className={styles.footer_item}
            onClick={() =>
              this.props.handleChangeCurrentState("Forgot password")
            }
          >
            Forgot password ?
          </div>
          <div
            className={styles.footer_item}
            onClick={() => this.props.handleChangeCurrentState("Sign Up")}
          >
            Don't have an account yet ?
          </div>
        </div>
      </form>
    );
  };

  renderLostPasswordForm = () => {
    return (
      <form
        onSubmit={() =>
          this.props.handleChangeCurrentState("New password sent message")
        }
        className={classnames(styles.form, styles.lostpassword)}
      >
        <h2>Forgot password ?</h2>
        <input
          type="email"
          placeholder="E-mail"
          name="lostPasswordEmail"
          value={this.state.lostPasswordEmail}
          onChange={this.handleChange}
          required
        />
        <input type="submit" value="Send new password" />
      </form>
    );
  };

  renderSignUpForm = () => {
    const { nickname, signupEmail, signupPassword } = this.state;
    return (
      <form
        id="signupform"
        onSubmit={() =>
          this.props.handleChangeCurrentState("Signed up message")
        }
        className={styles.form}
      >
        <input
          type="text"
          placeholder="Nickname"
          name="nickname"
          value={nickname}
          onChange={this.handleChange}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          name="signupEmail"
          value={signupEmail}
          onChange={this.handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="signupPassword"
          value={signupPassword}
          onChange={this.handleChange}
          required
        />
        <input type="submit" value="Sign Up" />
        <div className={styles.footer}>
          <div
            className={styles.footer_item}
            onClick={() => this.props.handleChangeCurrentState("Log In")}
          >
            Already have an account ?
          </div>
        </div>
      </form>
    );
  };

  renderMessage = (title) => {
    return <div className={styles.message}>{title}</div>;
  };

  renderConditionally = () => {
    const { currentState } = this.props;
    if (currentState === "Log In") {
      return this.renderLoginForm();
    } else if (currentState === "Sign Up") {
      return this.renderSignUpForm();
    } else if (currentState === "Forgot password") {
      return this.renderLostPasswordForm();
    } else if (currentState === "Logged in message") {
      return this.renderMessage("You are successfully logged in.");
    } else if (currentState === "Signed up message") {
      return this.renderMessage(`Welcome user ${this.state.nickname}`);
    } else if (currentState === "New password sent message") {
      return this.renderMessage(
        "New password has been sent to your e-mail address."
      );
    } else {
      return;
    }
  };

  render() {
    return <React.Fragment>{this.renderConditionally()}</React.Fragment>;
  }
}

export default Login;
