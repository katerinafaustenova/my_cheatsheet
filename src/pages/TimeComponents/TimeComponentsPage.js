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
        I'm calling the clearInterval right before the components is unmounted.
      </p>
      <h1>Countdown</h1>
      <Countdown futureDate="2020-12-31 23:59:59" />
      <p className="italic">
        This Countdown is set to the 31. 12. 2020 for demonstration.
      </p>
      <p>For Countdown component I used library called MomentJS.</p>
      <p>
        MomentJS is a JavaScript date library for parsing, validating,
        manipulating, and formatting dates.
      </p>
      <p>
        In this component we're using it to set a countdown from now to some
        specific future date.
      </p>
      <p>
        We're sending this future ending date as a props, using it as a
        parameter of a moment function and storing the date at some variable.
      </p>
      <p>
        Then we need to find out the current moment / date, which is an
        integrated function in MomentJS, and also store it.
      </p>
      <p>
        After that we're using duration function to calculate a difference
        between two stored data.
      </p>
      <p>
        Finally we disintegrate the remaining time between the data to our
        preffered output format and render it.
      </p>
      <p>
        For countdown component to work we need to update our current time every
        one second. To do that we call our function when the component is
        mounted. Then we use setInterval function to call this function again
        with a delay of one second. After that we store new data into the state
        which causes the re-render of the component and all this happens again
        and again.
      </p>
      <p>
        Final important step is not to forget clear the interval right before
        the components is unmounted.
      </p>
      <a href="https://momentjs.com/docs/#/durations/" target="blank">
        Link to the documentation of MomentJS for this countdown
      </a>
    </div>
  );
}

export default TimeComponentsPage;
