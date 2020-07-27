import React from "react";
import "./TipCalculator.css";

class TipCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      bill: null,
      selectedOption: 0.2,
      tip: null,
      total: null,
    };
  }

  handleChangeBill = (e) => {
    this.setState({
      [e.target.id]: Number(e.target.value),
    });
  };

  handleChangeOption = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { bill, selectedOption } = this.state;

    const result = bill * selectedOption;
    const total = result + bill;

    this.setState({
      tip: result,
      total: total,
    });
  };

  render() {
    console.log(this.state.bill, "render");
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="calculator">
          <label>
            How much was your bill ?
            <input
              type="number"
              // value={this.state.bill}
              id="bill"
              onChange={this.handleChangeBill}
              min="0"
            />
          </label>
          <label>
            How was your service ?
            <select
              value={this.state.selectedOption}
              onChange={this.handleChangeOption}
            >
              <option value="0.20">20 % Absolutely perfect</option>
              <option value="0.15">15 % Very good</option>
              <option value="0.10">10 % Good / Satisfying</option>
              <option value="0.05">5 % Not that good</option>
            </select>
          </label>
          <input type="submit" value="Calculate" />
        </form>
        <div>Tip: {this.state.tip}</div>
        <div>Total amount: {this.state.total}</div>
      </React.Fragment>
    );
  }
}

export default TipCalculator;
