import React from "react";
import "./ToDoItems.css";
import Input from "@material-ui/core/Input";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

function ToDoItems(props) {
  const { items, editable } = props;
  const toDoItems = items.map((item) => {
    return (
      <div className="toDoItems" key={item.key}>
        <Input
          readOnly={item.key !== editable}
          defaultValue={item.text}
          inputProps={{ "aria-label": "description" }}
          onChange={(e) => {
            props.handleEditChange(e);
          }}
        />
        {item.key === editable ? (
          <span>
            <DoneIcon
              className="doneIcon"
              onClick={() => {
                props.confirmEdit(item.key);
              }}
            />
          </span>
        ) : (
          <span>
            <EditIcon
              className="editIcon"
              onClick={() => props.editItem(item.key)}
            />
          </span>
        )}
        <span>
          <DeleteIcon
            className="deleteIcon"
            onClick={() => props.deleteItem(item.key)}
          />
        </span>
      </div>
    );
  });
  return <div>{toDoItems}</div>;
}

export default ToDoItems;
