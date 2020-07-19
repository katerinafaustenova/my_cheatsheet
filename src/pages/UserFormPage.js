import React from "react";
import UserForm from "../components/UserForm/UserForm";

function UserFormPage() {
  return (
    <div>
      <h1>Log In Form</h1>
      <p>Dummy log in credentials are: email test@test.cz, password 12345678</p>
      <p>This is just a UI</p>
      <UserForm />
    </div>
  );
}

export default UserFormPage;
