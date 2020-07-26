import React from "react";
import "./Clock.css";

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
      <div className="clock-wrapper consoleText">
        <div className="clock-item">{`${hours}h`}</div>
        <div className="clock-item">{this.getMinutes()}</div>
        <div className="clock-item">{this.getSeconds()}</div>
      </div>
    );
  }

  render() {
    return <React.Fragment>{this.renderTime()}</React.Fragment>;
  }
}

export default Clock;
