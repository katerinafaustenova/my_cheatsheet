import React from "react";
import moment from "moment";
import "./Countdown.css";

export class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("DD");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");
      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    if (hours + minutes + seconds === "0") {
      return <div className="countdown-wrapper">Konec odpočtu!</div>;
    }

    if (seconds === null || minutes === null) {
      return <div className="countdown-wrapper loading">Loading...</div>;
    }

    return (
      <div className="countdown-wrapper consoleText">
        {days && (
          <div className="countdown-item">
            {days}
            <span>dní</span>
          </div>
        )}
        {hours && (
          <div className="countdown-item">
            {hours}
            <span>hodin</span>
          </div>
        )}
        {minutes && (
          <div className="countdown-item">
            {minutes}
            <span>minut</span>
          </div>
        )}
        {seconds && (
          <div className="countdown-item seconds">
            {seconds}
            <span>vteřin</span>
          </div>
        )}
      </div>
    );
  }
}
