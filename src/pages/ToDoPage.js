import React from "react";
import "./ToDoPage.css";
import ToDo from "./../components/ToDo/ToDo";

function ToDoPage() {
  return (
    <div className="toDo_page">
      <h1>To Do List</h1>
      {/* <h2>Tasks:</h2> */}
      <ToDo />
      {/* <p>Description</p> */}
    </div>
  );
}

export default ToDoPage;
