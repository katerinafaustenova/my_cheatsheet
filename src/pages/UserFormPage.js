import React from "react";
import UserForm from "../components/UserForm/UserForm";

function UserFormPage() {
  return (
    <React.Fragment>
      <h1>User Form</h1>
      <p>This is just an example of a UI</p>
      <p>Dummy log in credentials are: email test@test.cz, password 1234</p>
      <p>You can use these buttons below for showing a different screens.</p>
      <UserForm />
    </React.Fragment>
  );
}

export default UserFormPage;
