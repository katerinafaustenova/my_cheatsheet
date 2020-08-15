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
          <Paper style={{ margin: 10 }} key={item.key}>
            <List style={{ padding: 0 }}>
              <ListItem>
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
                  <IconButton
                    aria-label="done"
                    style={{ color: "green" }}
                    onClick={() => {
                      props.confirmEdit(item.key);
                    }}
                  >
                    <DoneIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="edit"
                    color="primary"
                    onClick={() => props.editItem(item.key)}
                  >
                    <EditIcon />
                  </IconButton>
                )}

                <IconButton
                  aria-label="delete"
                  color="secondary"
                  onClick={() => props.deleteItem(item.key)}
                >
                  <DeleteIcon />
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
