import React from "react";
import { Countdown } from "./Countdown";

function CountdownPage() {
  return (
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
  );
}

export default CountdownPage;
