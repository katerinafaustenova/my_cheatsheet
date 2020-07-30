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

const code_calculator_methods = ` handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: Number(e.target.value),
    });
    this.handleSubmit(e);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { bill, selectedOption } = this.state;

    const result = Math.round((bill * selectedOption) / 100);
    const total = Math.round(result + bill);

    this.setState({
      tip: result,
      total: total,
    });
  };`;

const code_calculator_render = `render() {
  return (
    <form className={styles.calculator}>
      <div className={styles.row}>
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
        <div>{this.state.selectedOption} %</div>
      </div>
      <div className={classnames(styles.row, styles.noPadding)}>
        <input
          type="range"
          min="0"
          max="30"
          id="selectedOption"
          value={this.state.selectedOption}
          onChange={this.handleChange}
          step="5"
          className={styles.rangeInput}
        ></input>
      </div>
      <div className={styles.line}></div>
      <div className={styles.row}>
        <div>Tip amount:</div>
        <div>{this.state.tip}</div>
      </div>
      <div className={styles.row}>
        <div>Total amount:</div>
        <div className={styles.total}>{this.state.total}</div>
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        delectus laborum blanditiis voluptatum voluptate atque dignissimos
        provident qui reprehenderit! Nisi, blanditiis at hic vel quibusdam dicta
        amet! Recusandae, nemo esse.
      </p>
      <div>
        <SyntaxHighlighter
          language="javascript"
          style={xonokai}
          className="syntax_highlighter"
        >
          {code_calculator_state}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="javascript"
          style={xonokai}
          className="syntax_highlighter"
        >
          {code_calculator_methods}
        </SyntaxHighlighter>
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
