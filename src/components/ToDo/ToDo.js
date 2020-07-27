import React from "react";
import "./ToDo.css";
import ToDoItems from "./ToDoItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
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

  addItem = (e) => {
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

  setUpdate = (text, key) => {
    const items = this.state.items;
    // eslint-disable-next-line
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addItem} className="toDoForm">
          <input
            type="text"
            placeholder="Enter text"
            value={this.state.currentItem.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add task</button>
        </form>
        <ToDoItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </React.Fragment>
    );
  }
}

export default ToDo;
