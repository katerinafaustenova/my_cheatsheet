import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import TipCalculator from "../components/TipCalculator/TipCalculator";

const code_calculator_state = ` class TipCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      bill: "",
      selectedOption: "0.20",
      tip: "",
    };
  }`;

const code_calculator_methods = ` handleChangeBill = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(this.state.bill);
  };
  
  handleChangeOption = (e) => {
    this.setState({ selectedOption: e.target.value });
    console.log(this.state.selectedOption);
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const a = this.state.bill;
    const b = this.state.selectedOption;
    const result = a * b;
    this.setState({
      tip: result,
    });
  };`;

const code_calculator_render = ` render() {
  return (
    <div>
      <h1>Tip Calculator</h1>
      <p>Description</p>
      <form onSubmit={this.handleSubmit}>
        <label>
          How much was your bill?
          <input
            type="number"
            value={this.state.bill}
            id="bill"
            onChange={this.handleChangeBill}
          />
        </label>
        <label>
          How was your service?
          <select
            value={this.state.selectedOption}
            onChange={this.handleChangeOption}
          >
            <option value="0.20">20 % Perfect</option>
            <option value="0.15">15 % Good</option>
            <option value="0.10">10 % Satisfying</option>
            <option value="0.05">5 % Not that good</option>
          </select>
        </label>
        <input type="submit" value="Calculate" />
      </form>
      {this.state.tip}
    </div>
  );
}`;

function TipCalculatorPage() {
  return (
    <div>
      <h1>Tip Calculator</h1>
      <p>Description</p>
      <TipCalculator />
      <div className="syntax_highlight_calculator">
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_calculator_state}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_calculator_methods}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_calculator_render}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default TipCalculatorPage;
