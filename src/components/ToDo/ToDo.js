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
      edit: "",
      editedItem: "",
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

  editItem = (key) => {
    this.setState({
      edit: key,
    });
  };

  handleEdit = (e) => {
    this.setState({
      editedItem: e.target.value,
    });
  };

  confirmEdit = (key) => {
// vyfiltrovat soucasne pole items podle key, v tom nahradit text novou hodnotou z editedItem
  };

  // setUpdate = (text, key) => {
  //   const items = this.state.items;
  //   // eslint-disable-next-line
  //   items.map((item) => {
  //     if (item.key === key) {
  //       item.text = text;
  //     }
  //   });
  //   this.setState({
  //     items: items,
  //   });
  // };

  render() {
    console.log(this.state.editedItem);
    return (
      <React.Fragment>
        <form className="toDoForm" onSubmit={this.addItem}>
          <TextField
            id="outlined-basic"
            label="New item"
            variant="outlined"
            value={this.state.currentItem.text}
            onChange={this.handleChange}
            className="addField"
          />
          <AddCircleIcon onClick={this.addItem} className="addIcon" />
        </form>
        <ToDoItems
          editable={this.state.edit}
          items={this.state.items}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          handleEdit={this.handleEdit}
          confirmEdit={this.confirmEdit}
        />
      </React.Fragment>
    );
  }
}

export default ToDo;
