import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <React.Fragment>
      <h1>Login</h1>
      <p>This is just an example of a UI</p>
      <p>Dummy log in credentials are: email test@test.cz, password 1234</p>
      <p>You can use these buttons below for showing a different screens.</p>
      <LoginForm />
    </React.Fragment>
  );
}

export default LoginPage;
