import React from "react";
import "./ToDoItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ToDoItems(props) {
  const items = props.items;
  const toDoItems = items.map((item) => {
    return (
      <div className="toDoItems" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });
  return <div>{toDoItems}</div>;
}

export default ToDoItems;
