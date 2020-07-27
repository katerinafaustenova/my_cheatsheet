import React from "react";
import ToDo from "./../components/ToDo/ToDo";

function ToDoPage() {
  return (
    <div>
      <h1>To Do List</h1>
      <h2>Tasks:</h2>
      <ToDo />
      <p>Description</p>
    </div>
  );
}

export default ToDoPage;
