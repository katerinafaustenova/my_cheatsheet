import React from "react";
import "./ToDoItems.css";
import Input from "@material-ui/core/Input";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

function ToDoItems(props) {
  const items = props.items;
  const toDoItems = items.map((item) => {
    console.log(props.editable, "child");
    return (
      <div className="toDoItems" key={item.key}>
        <p>
          <Input
            readOnly={item.key !== props.editable}
            defaultValue={item.text}
            inputProps={{ "aria-label": "description" }}
            onChange={(e) => {
              props.handleEdit(e);
            }}
            // onChange={(e) => {
            //   props.setUpdate(e.target.value, item.key);
            // }}
          />
          {item.key === props.editable ? (
            <span>
              <DoneIcon
                className="doneIcon"
                onClick={() => {
                  props.confirmEdit(item.key);
                }}
              />
            </span>
          ) : (
            //přidat do done onclick
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
        </p>
      </div>
    );
  });
  return <div>{toDoItems}</div>;
}

export default ToDoItems;
