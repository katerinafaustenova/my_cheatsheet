import React from "react";
import { Input, Paper, ListItem, List, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import "./ToDoItems.css";

function ToDoItems(props) {
  const { items, editable } = props;
  return (
    <div className="todo_items">
      {items.map((item) => {
        return (
          <Paper style={{ margin: 10 }}>
            <List style={{ padding: 0 }}>
              <ListItem key={item.key}>
                <Input
                  readOnly={item.key !== editable}
                  defaultValue={item.text}
                  fullWidth
                  inputProps={{ "aria-label": "description" }}
                  onChange={(e) => {
                    props.handleEditChange(e);
                  }}
                  className={
                    item.key === editable ? "item_input editable" : "item_input"
                  }
                />
                {item.key === editable ? (
                  <IconButton aria-label="done" style={{ color: "green" }}>
                    <DoneIcon
                      onClick={() => {
                        props.confirmEdit(item.key);
                      }}
                    />
                  </IconButton>
                ) : (
                  <IconButton aria-label="edit" color="primary">
                    <EditIcon onClick={() => props.editItem(item.key)} />
                  </IconButton>
                )}
                <IconButton aria-label="delete" color="secondary">
                  <DeleteIcon onClick={() => props.deleteItem(item.key)} />
                </IconButton>
              </ListItem>
            </List>
          </Paper>
        );
      })}
    </div>
  );
}

export default ToDoItems;
