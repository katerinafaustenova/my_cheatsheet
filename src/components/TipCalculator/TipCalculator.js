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

  handleChange = (e) => {
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
  };

  render() {
    const { tip, total, selectedOption } = this.state;
    return (
      <form className={styles.calculator}>
        <div className={styles.row}>
          <div className={styles.bill_currency}>Kč</div>
          <div className={styles.label}>Bill</div>
          <input
            type="number"
            id="bill"
            onChange={this.handleChange}
            min="0"
            className={styles.bill_input}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.label}>Tip</div>
          <div>{selectedOption} %</div>
        </div>
        <div className={classnames(styles.row, styles.no_padding)}>
          <input
            type="range"
            min="0"
            max="30"
            id="selectedOption"
            value={selectedOption}
            onChange={this.handleChange}
            step="5"
            className={styles.range_input}
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
  }
}

export default TipCalculator;
