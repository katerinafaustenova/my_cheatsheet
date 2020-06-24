import React from "react";
import "./Clock.css";

const code_clock_state = ` class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: null,
      minutes: null,
      hours: null,
    };
  }`

const code_clock_lifecycles = ` componentDidMount() {
  this.update();
  this.intervalID = setInterval(this.update, 1000);
}

componentWillUnmount() {
  clearInterval(this.intervalID);
}`;

const code_clock_methods = ` update = () => {
  const seconds = new Date().getSeconds();
  const minutes = new Date().getMinutes();
  const hours = new Date().getHours();

  this.setState({
    seconds: seconds,
    minutes: minutes,
    hours: hours,
  });
};

getSeconds() {
  const { seconds } = this.state;
  if (seconds < 10) {
    return `0${seconds}s`;
  }
  return `${seconds}s`;
}

getMinutes() {
  const { minutes } = this.state;
  if (minutes < 10) {
    return `0${minutes}m`;
  }
  return `${minutes}m`;
}

renderTime() {
  const { hours } = this.state;
  return (
    <div className="clock-wrapper">
      <div className="item">{`${hours}h`}</div>
      <div className="item">{this.getMinutes()}</div>
      <div className="item">{this.getSeconds()}</div>
    </div>
  );
}`;


class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: null,
      minutes: null,
      hours: null,
    };
  }

  componentDidMount() {
    this.update();
    this.intervalID = setInterval(this.update, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  update = () => {
    const seconds = new Date().getSeconds();
    const minutes = new Date().getMinutes();
    const hours = new Date().getHours();

    this.setState({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
    });
  };

  getSeconds() {
    const { seconds } = this.state;
    if (seconds < 10) {
      return `0${seconds}s`;
    }
    //  {seconds < 10 ? `0${seconds}` : seconds}
    return `${seconds}s`;
  }

  getMinutes() {
    const { minutes } = this.state;
    if (minutes < 10) {
      return `0${minutes}m`;
    }
    return `${minutes}m`;
  }

  renderTime() {
    const { hours } = this.state;
    return (
      <div className="clock-wrapper">
        <div className="item">{`${hours}h`}</div>
        <div className="item">{this.getMinutes()}</div>
        <div className="item">{this.getSeconds()}</div>
      </div>
    );
  }


  render() {
    return (
      <React.Fragment>
        <h1>Clock</h1>
        <p>
          Basic digital clock using "New Date()" without any clock library like
          moment etc.
        </p>
        <div className="clock">{this.renderTime()}</div>
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_clock_state}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_clock_lifecycles}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_clock_methods}
        </SyntaxHighlighter>
      </React.Fragment>
    );
  }
}

export default Clock;
