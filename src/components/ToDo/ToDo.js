import React from "react";
import "./ToDo.css";
import ToDoItems from "./ToDoItems";
import { TextField, Button, Box, Container } from "@material-ui/core";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { text: "test1", key: "test1" },
        { text: "test2", key: "test2" },
        { text: "test3", key: "test3" },
      ],
      currentItem: {
        text: "",
        key: "",
      },
      editedItemKey: "",
      editedItemValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addNewItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };

  editItem = (key) => {
    this.setState({
      editedItemKey: key,
    });
  };

  handleEditChange = (e) => {
    this.setState({
      editedItemValue: e.target.value,
    });
  };

  confirmEdit = (key) => {
    const items = this.state.items;
    const { editedItemKey, editedItemValue } = this.state;

    items.forEach((item) => {
      if (item.key === editedItemKey) {
        item.text = editedItemValue;
      }
    });

    this.setState({
      items: items,
      editedItemKey: "",
      editedItemValue: "",
    });
  };

  render() {
    const { currentItem, items, editedItemKey } = this.state;
    return (
      <Container maxWidth="sm" style={{ height: "100%", overflow: "scroll" }}>
        <h1>To Do List</h1>
        <form className="toDoForm" onSubmit={this.addNewItem}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField
              autoComplete="off"
              fullWidth
              id="outlined-basic"
              variant="outlined"
              label="New item"
              value={currentItem.text}
              onChange={this.handleChange}
            />
            <Box m={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.addNewItem}
              >
                Add Item
              </Button>
            </Box>
          </Box>
        </form>
        <ToDoItems
          items={items}
          deleteItem={this.deleteItem}
          editable={editedItemKey}
          editItem={this.editItem}
          handleEditChange={this.handleEditChange}
          confirmEdit={this.confirmEdit}
        />
      </Container>
    );
  }
}

export default ToDo;
