import React from "react";
import "./LogIn.css";

class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loggedIn: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.setState({
      loggedIn: true
    });
  };

  render() {
    return (
      <div className="login_container">
        <form onSubmit={this.handleLogin}>
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
            placeholder="Password (min. 8 characters)"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            minLength="8"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LogIn;
