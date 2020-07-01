import React from "react";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      input: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  addTask = e => {
    e.preventDefault();
    const inputForm = {
      input: this.state.input
    };
    this.setState(state => ({
      tasks: [...state.tasks, inputForm]
    }));
    this.setState({
      input: ""
    });
  };

  deleteTask = e => {
    const index = e.target.dataset.index;
    this.setState(state => {
      const tasks = [...state.tasks];
      tasks.splice(index, 1);
      return {
        tasks: tasks
      };
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.tasks.map((tasks, i) => (
            <li key={i}>
              {tasks.input} <br />
              <button data-index={i} onClick={this.deleteTask}>
                Delete
              </button>
            </li>
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
