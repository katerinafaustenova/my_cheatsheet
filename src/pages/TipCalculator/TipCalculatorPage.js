import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import TipCalculator from "../../components/TipCalculator/TipCalculator";
import "./TipCalculatorPage.css";

const code_calculator_state = `class TipCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      bill: null,
      selectedOption: 10,
      tip: null,
      total: null,
    };
  }`;

const code_calculator_methods = `handleChange = (e) => {
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

const code_calculator_render = `render() {
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
    <div className="tipCalculator_page">
      <h1>Tip Calculator</h1>
      <TipCalculator />
      <p>
        We initialize everything in state empty except the amount of tip, which
        is pre-defined to 10 %.
      </p>
      <p>
        In the state, we keep track of the amount of bill (from user input),
        selected option of tip, the final amount of tip and final amount of
        whole bill including the tip based on the selected option.
      </p>
      <div>
        <SyntaxHighlighter
          language="javascript"
          style={xonokai}
          className="syntax_highlighter"
        >
          {code_calculator_state}
        </SyntaxHighlighter>
        <p>
          We don't want to see the results only after clicking on some button
          every time we change the input bill or the selected option of the tip.
        </p>
        <p>
          That's why we used the handleSubmit method as a second parameter to
          the setState method, which sets to the state a current values of the
          user inputs. This way we will have exact results on every change user
          will do.
        </p>
        <p>
          The handleChange method alone is called on any changes. The
          handleSubmit method itself calculates the results based on what amount
          of bill and which option of tip is currently in the state and then set
          the results to the state so we can easily render them.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={xonokai}
          className="syntax_highlighter"
        >
          {code_calculator_methods}
        </SyntaxHighlighter>
        <p>
          In render method we have two inputs - number for the amount of bill
          and range for the selected amount of tip and both these inputs have
          the same onChange function.
        </p>
        <p>For styling this app I used CSS modules.</p>
        <p></p>
        <SyntaxHighlighter
          language="javascript"
          style={xonokai}
          className="syntax_highlighter"
        >
          {code_calculator_render}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default TipCalculatorPage;
