import React from "react";
import styles from "./TipCalculator.module.css";
import classnames from "classnames";

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

    const result = Math.round((bill * selectedOption) / 100);
    const total = Math.round(result + bill);

    this.setState({
      tip: result,
      total: total,
    });
  };

  render() {
    return (
      <form className={styles.calculator}>
        <div className={styles.row}>
          <div className={styles.billCurrency}>Kč</div>
          <div className={styles.label}>Bill</div>
          <input
            type="number"
            // value={this.state.bill}
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
          <div>{this.state.tip} Kč</div>
        </div>
        <div className={styles.row}>
          <div>Total amount:</div>
          <div className={styles.total}>{this.state.total} Kč</div>
        </div>
      </form>
    );
  }
}

export default TipCalculator;
