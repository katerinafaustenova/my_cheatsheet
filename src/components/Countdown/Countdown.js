import React from "react";
import moment, { duration } from "moment";
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

  setCountdown() {
    const futureDate = moment(this.props.futureDate);
    const now = moment();
    const timeLeft = duration(futureDate.diff(now));
    const days = Math.floor(timeLeft.asDays());
    const hours = timeLeft.hours();
    const minutes = timeLeft.minutes();
    const seconds = timeLeft.seconds();
    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  }

  componentDidMount() {
    this.setCountdown();
    this.interval = setInterval(() => {
      this.setCountdown();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    if (seconds === null) {
      return <div className="countdown-wrapper loading">Loading...</div>;
    }

    if (days + hours + minutes + seconds <= 0) {
      return <div className="countdown-wrapper">Konec odpočtu!</div>;
    }

    return (
      <div className="countdown-wrapper console_text">
        {days !== 0 && (
          <div className="countdown-item">
            {days}
            <span>dní</span>
          </div>
        )}
        <div className="countdown-item">
          {hours}
          <span>hodin</span>
        </div>
        <div className="countdown-item">
          {minutes}
          <span>minut</span>
        </div>
        <div className="countdown-item seconds">
          {seconds}
          <span>vteřin</span>
        </div>
      </div>
    );
  }
}
