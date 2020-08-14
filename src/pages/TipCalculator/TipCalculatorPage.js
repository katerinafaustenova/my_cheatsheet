import React from "react";
import Syntax from "./../../components/Syntax/Syntax";
import {
  CodeCalculatorState,
  CodeCalculatorMethods,
  CodeCalculatorRender,
} from "./calculatorSnippet";
import TipCalculator from "../../components/TipCalculator/TipCalculator";
import "./TipCalculatorPage.css";

function TipCalculatorPage() {
  return (
    <div className="calc_page">
      <h1>Tip Calculator</h1>
      <TipCalculator />
      <p>
        Every part of the application we want to keep track of needs to be in
        the state of the class component, so the amount of bill, the amount of
        the tip and the total amount of the bill with tip included is
        initialized in state as a null value (no specific value) and the
        selected percentage of the tip is initialized at 10 %.
      </p>
      <div>
        <Syntax>{CodeCalculatorState}</Syntax>
        <p>The handleChange method is called on any changes in the inputs.</p>
        <p>
          The handleSubmit method itself calculates the results based on what
          amount of bill and which option of tip is currently in the state and
          then set the results to the state so we can easily render them.
        </p>
        <p>
          In order to see the results immediately after any change in the inputs
          the handleSubmit method is used as a second parameter of the setState
          method in the handleChange.
        </p>
        <Syntax>{CodeCalculatorMethods}</Syntax>
        <p>
          There are two inputs in the render method - number for the amount of
          bill and range for the selected amount of tip and both these inputs
          have the same onChange function.
        </p>
        <p>I've used CSS modules to style this app.</p>
        <p></p>
        <Syntax>{CodeCalculatorRender}</Syntax>
      </div>
    </div>
  );
}

export default TipCalculatorPage;
