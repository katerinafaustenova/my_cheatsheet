import React from "react";
import ToDo from "./../components/ToDo/ToDo";

function ToDoPage() {
  return (
    <div>
      <h1>To Do List</h1>
      <p>Description</p>
      <h2>Tasks:</h2>
      <ToDo />
    </div>
  );
}

export default ToDoPage;
