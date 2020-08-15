import React from "react";
import ToDoItems from "./ToDoItems";
import { TextField, Button, Box, Container } from "@material-ui/core";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { text: "test 1", key: "1597503634867" },
        { text: "test 2", key: "1597503634857" },
        { text: "test 3", key: "1597503634869" },
      ],
      newItem: "",
      editedItemKey: "",
      editedItemValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };

  addNewItem = (e) => {
    e.preventDefault();

    let item = { text: this.state.newItem, key: Date.now() };

    if (item.text !== "") {
      const newItems = [...this.state.items, item];
      this.setState({
        items: newItems,
        newItem: "",
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
  // WTF
  confirmEdit = (key) => {
    const { editedItemKey, editedItemValue } = this.state;
    const items = this.state.items;

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
    const { newItem, items, editedItemKey } = this.state;

    return (
      <Container
        maxWidth="sm"
        style={{ minHeight: "680px", background: "white", borderRadius: "4px" }}
      >
        <form onSubmit={this.addNewItem}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <h1>To Do List</h1>
            <TextField
              autoComplete="off"
              fullWidth
              id="outlined-basic"
              variant="outlined"
              label="New item"
              value={newItem}
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
        <div style={{ position: "relative" }}>
          <ToDoItems
            items={items}
            deleteItem={this.deleteItem}
            editable={editedItemKey}
            editItem={this.editItem}
            handleEditChange={this.handleEditChange}
            confirmEdit={this.confirmEdit}
          />
        </div>
      </Container>
    );
  }
}

export default ToDo;
