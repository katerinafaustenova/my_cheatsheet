import React from "react";

class TipCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      bill: "",
      selectedOption: "0.20",
      tip: "",
      total: "",
    };
  }

  handleChangeBill = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleChangeOption = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const a = this.state.bill;
    const b = this.state.selectedOption;
    const result = a * b;
    const total = result + this.state.bill;
    this.setState({
      tip: result,
      total: total,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            How much was your bill ?
            <input
              type="number"
              value={this.state.bill}
              id="bill"
              onChange={this.handleChangeBill}
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
      </div>
    );
  }
}

export default TipCalculator;
