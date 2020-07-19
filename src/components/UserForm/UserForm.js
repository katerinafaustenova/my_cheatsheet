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
    alert("You're successfully signed up");
  };

  handleLogin = (e) => {
    e.preventDefault();
    // menit stav
    if (
      this.state.email !== this.state.dummyData.email &&
      this.state.password !== this.state.dummyData.password
    ) {
      alert("Invalid email address or password");
    } else {
      alert("You're successfully logged in");
    }
  };

  logIn = () => {
    if (this.state.stav === "login") {
      return (
        <div className="login_container">
          <form onSubmit={this.handleLogin} className="login_form">
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
            <div onClick={() => this.handleChangeStav("lostpassword")}>
              Forgot password ?
            </div>
          </form>
        </div>
      );
    }
    return;
  };
  // prejmenovat renderSignup
  signUp = () => {
    if (this.state.stav === "signup") {
      return (
        <div className="signup_container">
          <form onSubmit={this.handleSignup}>
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
          </form>
        </div>
      );
    }
    return;
  };

  welcome = () => {
    if (this.state.stav === "welcome") {
      return <h2>Welcome user !</h2>;
    }
    return;
  };

  lostPassword = () => {
    if (this.state.stav === "lostpassword") {
      return (
        <form className="lostpassword_form">
          <h2>Forgot password ?</h2>
          <input type="email" placeholder="Email" />
          <input type="submit" value="Send new password" />
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
          Forgot Password?
        </button>
        <div className="content_container">
          {this.logIn()}
          {this.signUp()}
          {this.welcome()}
          {this.lostPassword()}
        </div>
      </div>
    );
  }
}

export default UserForm;
