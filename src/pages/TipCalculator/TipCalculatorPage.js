import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import TipCalculator from "../../components/TipCalculator/TipCalculator";
import "./TipCalculatorPage.css";

const codeCalculatorState = `class TipCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      bill: null,
      selectedOption: 10,
      tip: null,
      total: null,
    };
  }`;

const codeCalculatorMethods = `handleChange = (e) => {
  e.preventDefault();
  this.setState(
    {
      [e.target.id]: Number(e.target.value),
    },
    () => this.handleSubmit()
  );
};

handleSubmit = () => {
  const { bill, selectedOption } = this.state;

  const result = Math.round((bill * selectedOption) / 100);
  const total = Math.round(result + bill);

  this.setState({
    tip: result,
    total: total,
  });
};`;

const codeCalculatorRender = `render() {
  const { tip, total, selectedOption } = this.state;
  return (
    <form className={styles.calculator}>
      <div className={styles.row}>
        <div className={styles.billCurrency}>Kč</div>
        <div className={styles.label}>Bill</div>
        <input
          type="number"
          id="bill"
          onChange={this.handleChange}
          min="0"
          className={styles.billInput}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Tip</div>
        <div>{selectedOption} %</div>
      </div>
      <div className={classnames(styles.row, styles.noPadding)}>
        <input
          type="range"
          min="0"
          max="30"
          id="selectedOption"
          value={selectedOption}
          onChange={this.handleChange}
          step="5"
          className={styles.rangeInput}
        ></input>
      </div>
      <div className={styles.line}></div>
      <div className={styles.row}>
        <div>Tip amount:</div>
        <div>{tip} Kč</div>
      </div>
      <div className={styles.row}>
        <div>Total amount:</div>
        <div className={styles.total}>{total} Kč</div>
      </div>
    </form>
  );
}`;

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
        <SyntaxHighlighter
          language="javascript"
          style={xonokai}
          className="syntax_highlighter"
        >
          {codeCalculatorState}
        </SyntaxHighlighter>
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
        <SyntaxHighlighter
          language="javascript"
          style={xonokai}
          className="syntax_highlighter"
        >
          {codeCalculatorMethods}
        </SyntaxHighlighter>
        <p>
          There are two inputs in the render method - number for the amount of
          bill and range for the selected amount of tip and both these inputs
          have the same onChange function.
        </p>
        <p>I've used CSS modules to style this app.</p>
        <p></p>
        <SyntaxHighlighter
          language="javascript"
          style={xonokai}
          className="syntax_highlighter"
        >
          {codeCalculatorRender}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default TipCalculatorPage;
