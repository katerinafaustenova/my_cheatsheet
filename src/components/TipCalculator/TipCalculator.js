import React from "react";
import "./TipCalculator.css";

class TipCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      bill: null,
      selectedOption: 10,
      tip: null,
      total: null,
    };
  }

  // componentDidUpdate() {
  //   return;
  // }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: Number(e.target.value),
    });
    this.handleSubmit(e);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { bill, selectedOption } = this.state;

    const result = (bill * selectedOption) / 100;
    const total = result + bill;

    this.setState({
      tip: result,
      total: total,
    });
  };

  render() {
    return (
      <form className="calculator">
        <div className="row">
          <div className="label">Bill</div>
          <input
            type="number"
            // value={this.state.bill}
            id="bill"
            onChange={this.handleChange}
            min="0"
          />
        </div>
        <div className="row">
          <div className="label">Tip</div>
          <div>{this.state.selectedOption} %</div>
        </div>
        <div className="row">
          <input
            type="range"
            min="0"
            max="30"
            id="selectedOption"
            value={this.state.selectedOption}
            onChange={this.handleChange}
            step="5"
            className="slider"
          ></input>
        </div>
        <div className="line"></div>
        <div className="row">
          <div>Tip amount:</div>
          <div>{this.state.tip}</div>
        </div>
        <div className="row">
          <div>Total amount:</div>
          <div className="total">{this.state.total}</div>
        </div>
      </form>
    );
  }
}

export default TipCalculator;
