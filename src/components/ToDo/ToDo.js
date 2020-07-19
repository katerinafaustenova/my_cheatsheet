import React from "react";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { input: "test", edit: false },
        { input: "test2", edit: false },
      ],
      input: "",
      editedValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  addTask = (e) => {
    e.preventDefault();
    const inputForm = {
      input: this.state.input,
      edit: false,
    };
    if (this.state.input !== "") {
      this.setState((state) => ({
        tasks: [...state.tasks, inputForm],
      }));
    }
    this.setState({
      input: "",
    });
  };

  editTask = (i, value) => {
    // const index = e.target.dataset.index;

    console.log(i, "index");
    let stateNow = [...this.state.tasks];

    // stateNow[index] = { ...stateNow[index], edit: !stateNow[index].edit };
    stateNow[i] = { ...stateNow[i], input: value, edit: true };

    this.setState({
      tasks: stateNow,
      editedValue: value,
    });
  };

  handleChange2 = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  deleteTask = (e) => {
    const index = e.target.dataset.index;
    this.setState((state) => {
      const tasks = [...state.tasks];
      tasks.splice(index, 1);
      return {
        tasks: tasks,
      };
    });
  };

  returnButton = (i, edit, input) => {
    if (edit === true) {
      return (
        <button data-index={i} onClick={() => this.editTask(i, input)}>
          hotovo
        </button>
      );
    } else {
      return (
        <button data-index={i} onClick={() => this.editTask(i, input)}>
          Edit
        </button>
      );
    }
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.tasks.map((tasks, i) => (
            <div key={i}>
              <input
                type="text"
                id="editedValue"
                value={
                  tasks.edit === false ? tasks.input : this.state.editedValue
                }
                onChange={this.handleChange2}
                readOnly={tasks.edit === false}
              />
              <br />
              <button data-index={i} onClick={this.deleteTask}>
                Delete
              </button>
              {this.returnButton(i, tasks.edit, tasks.input)}
            </div>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={this.state.input}
            id="input"
            onChange={this.handleChange}
          />
          <button onClick={this.addTask}>Add task</button>
        </div>
      </div>
    );
  }
}

export default ToDo;
