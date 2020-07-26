import React from "react";
import "./UserForm.css";

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: "",
      signupEmail: "",
      signupPassword: "",
      dummyData: { email: "test@test.cz", password: "12345678" },
      email: "",
      password: "",
      stav: "login",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  // mozna odstranit
  handleSignup = (e) => {
    this.handleChangeStav("welcome");
  };

  handleLogin = (e) => {
    e.preventDefault();
    if (
      this.state.email !== this.state.dummyData.email ||
      this.state.password !== this.state.dummyData.password
    ) {
      alert("Invalid email address or password");
    } else {
      this.handleChangeStav("welcome");
    }
  };

  renderLogIn = () => {
    if (this.state.stav === "login") {
      return (
        <form onSubmit={this.handleLogin} className="login form">
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            minLength="8"
          />
          <input type="submit" value="Log In" />
          <div
            className="form_footer"
            onClick={() => this.handleChangeStav("lostpassword")}
          >
            Forgot password ?
          </div>
        </form>
      );
    }
    return;
  };

  renderSignUp = () => {
    if (this.state.stav === "signup") {
      return (
        <form onSubmit={this.handleSignup} className="signup form">
          <input
            type="text"
            placeholder="Nickname"
            name="nickname"
            value={this.state.nickname}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            name="signupEmail"
            value={this.state.signupEmail}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="signupPassword"
            value={this.state.signupPassword}
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Sign Up" />
          <div
            className="form_footer"
            onClick={() => this.handleChangeStav("login")}
          >
            Already have an account ?
          </div>
        </form>
      );
    }
    return;
  };

  renderMessage = () => {
    if (this.state.stav === "welcome") {
      return <div className="message">Welcome user !</div>;
    } else if (this.state.stav === "newpassword") {
      return (
        <div className="message">
          We've just sent you a link to your new password on entered email
          address.
        </div>
      );
    }
    return;
  };

  renderLostPassword = () => {
    if (this.state.stav === "lostpassword") {
      return (
        <form className="lostpassword form">
          <h2>Forgot password ?</h2>
          <input type="email" placeholder="Email" />
          <input
            type="submit"
            value="Send new password"
            onClick={() => this.handleChangeStav("newpassword")}
          />
        </form>
      );
    }
    return;
  };

  handleChangeStav(value) {
    this.setState({
      stav: value,
    });
  }

  render() {
    return (
      <div className="userform_container">
        <button onClick={() => this.handleChangeStav("login")}>Log In</button>
        <button onClick={() => this.handleChangeStav("signup")}>Sign Up</button>
        <button onClick={() => this.handleChangeStav("welcome")}>
          Welcome Page
        </button>
        <button onClick={() => this.handleChangeStav("lostpassword")}>
          Forgot Password ?
        </button>
        <button onClick={() => this.handleChangeStav("newpassword")}>
          New Password Sent
        </button>
        <div className="content_container">
          {this.renderLogIn()}
          {this.renderSignUp()}
          {this.renderMessage()}
          {this.renderLostPassword()}
        </div>
      </div>
    );
  }
}

export default UserForm;
