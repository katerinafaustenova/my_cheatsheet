import React from "react";
import ToDo from "./../../components/ToDo/ToDo";
import styles from "./ToDoPage.module.css";

function ToDoPage() {
  return (
    <React.Fragment>
      <div className={styles.page}>
        <ToDo />
      </div>
      <p>
        There is a parent component named ToDo in this application, which is a
        class based component with its state and which keeps track of everything
        that's happening in the to do list.
      </p>
      <p>
        In this parent component all our logic and functions are being handled.
        It means all methods like handleChange in the input and all the adding,
        editing and deleting items.
      </p>
      <p>
        Then there is a render methods, which contains an input field and add
        item button.
      </p>
      <p>
        Under all this is an imported child component named ToDoItems, which
        receives array of all items from the state and all the methods except
        adding item and as a props.
      </p>
      <p>
        Child component maps over array of items and returns an input field and
        a few icon buttons for each item in the list.
      </p>
      <p>
        This input field has or has not a readonly property, depends if the item
        is currently editable or not.
      </p>
      <p>
        Edit itself can be done by clicking on the edit icon, which will change
        to done icon after the click. Clicking on the done icon gives back the
        item property readonly.
      </p>
      <p>There is also a classic delete button with its standard function.</p>
      <p>
        I used Material UI in this app, which is a React library with
        pre-defined components based on material design from Google.
      </p>
    </React.Fragment>
  );
}

export default ToDoPage;
