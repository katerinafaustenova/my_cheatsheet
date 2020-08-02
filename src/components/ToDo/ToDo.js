import React from "react";
import "./ToDo.css";
import ToDoItems from "./ToDoItems";
import TextField from "@material-ui/core/TextField";
import AddCircleIcon from "@material-ui/icons/AddCircle";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
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
      <React.Fragment>
        <form className="toDoForm" onSubmit={this.addNewItem}>
          <TextField
            id="outlined-basic"
            label="New item"
            variant="outlined"
            value={currentItem.text}
            onChange={this.handleChange}
            className="addField"
          />
          <AddCircleIcon onClick={this.addNewItem} className="addIcon" />
        </form>
        <ToDoItems
          items={items}
          deleteItem={this.deleteItem}
          editable={editedItemKey}
          editItem={this.editItem}
          handleEditChange={this.handleEditChange}
          confirmEdit={this.confirmEdit}
        />
      </React.Fragment>
    );
  }
}

export default ToDo;
