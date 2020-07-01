import React from "react";
import { Countdown } from "./Countdown";
import { Clock } from "./Clock";

function TimeComponentsPage() {
  return (
    <React.Fragment>
      <div className="countdown">
        <h1>Countdown</h1>
        <Countdown
          timeTillDate="2020-06-30 18:20"
          timeFormat="YYYY-MM-DD hh:mm"
        />
        <a href="https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/">
          Link to tutorial
        </a>
      </div>
      <div className="clock">
        <h1>Clock</h1>
        <Clock />
      </div>
    </React.Fragment>
  );
}

export default TimeComponentsPage;
