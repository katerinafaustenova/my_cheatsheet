import React from "react";

function Errors() {
  return (
    <React.Fragment>
      <h1>Errors</h1>
      <h2>'React' must be in scope when using JSX react/react-in-jsx-scope</h2>
      <ol>
        <li>Mistake in import React from "react"</li>
        <li>Another reason</li>
        <li>Another reason</li>
      </ol>
    </React.Fragment>
  );
}

export default Errors;
