import React from "react";
import { Countdown } from "../../components/Countdown/Countdown";
import Clock from "../../components/Clock/Clock";
import "./TimeComponentsPage.css";

function TimeComponentsPage() {
  return (
    <div className="time_components">
      <h1>Clock</h1>
      <Clock />
      <p>
        For Clock component I didn't use any special library, I just created
        date object with new Date() and then used basic Get Date methods like
        getMinutes() and so on.
      </p>
      <p>
        For any clock to work, we need to update a current time every one
        second.
      </p>
      <p>
        To do that, I created an update function, which is called when the
        component did mount. Then I used setInterval function to call this
        update function with a delay of one second. After that I stored new data
        into the state which causes the re-render of the component.
      </p>
      <p>
        The setInterval() method repeatedly calls a function or executes a code
        snippet, with a fixed time delay between each call. It returns an
        interval ID which uniquely identifies the interval, so you can remove it
        later by calling clearInterval().
      </p>
      <p>
        I'm calling the clearInterval right before the components in unmounted.
      </p>
      <h1>Countdown</h1>
      <Countdown
        timeTillDate="2020-12-31 23:59"
        timeFormat="YYYY-MM-DD hh:mm"
      />
      <p>For Countdown component I used library called MomentJS.</p>
      <p></p>
      <a
        href="https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/"
        target="blank"
      >
        Link to tutorial
      </a>
    </div>
  );
}

export default TimeComponentsPage;
