import React from "react";
import "./ToDoPage.css";
import ToDo from "./../../components/ToDo/ToDo";

function ToDoPage() {
  return (
    <div className="toDo_page">
      <ToDo />
      <p>
        In this application we have a parent component named ToDo, which is a
        class based component with its state and which keeps track of everything
        that's happening in the to do list.
      </p>
      <p>
        In this parent component we also handle all our logic and functions. It
        means all methods like handleChange in the input and adding, editing and
        deleting items.
      </p>
      <p>
        Then we have a render methods, which contains an input field and add
        item button.
      </p>
      <p>
        Under these there is an imported child component named ToDoItems, which
        receives all the methods except adding item and array of all items from
        the state as a props.
      </p>
      <p>
        Child component returns a map over items and return a input field and a
        few icon buttons for each item in the list.
      </p>
      <p>
        This input field has or has not a readonly property depends on if it is
        currently editable or not.
      </p>
      <p>
        We can edit the item by clicking on the edit icon button, which will
        change to done icon button, which gives the item property readonly back
        after finishing edit.
      </p>
      <p>There is also a classic delete button with its standard function.</p>
      <p>
        In this app I used Material UI, which is a React library with
        pre-defined components based on material design from Google.
      </p>
    </div>
  );
}

export default ToDoPage;
