import React from "react";

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
    console.log("set");
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    console.log("clear");
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
      return `0${seconds}`;
    }
    //  {seconds < 10 ? `0${seconds}` : seconds}
    return seconds;
  }

  getMinutes() {
    const { minutes } = this.state;
    if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  }

  renderTime() {
    const { hours } = this.state;

    if (hours === null) {
      return <p>Loading</p>;
    }
    return <div>{`${hours}:${this.getMinutes()}:${this.getSeconds()}`}</div>;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Clock</h1>
        <p>Description</p>
        {this.renderTime()}
      </React.Fragment>
    );
  }
}

export default Clock;
