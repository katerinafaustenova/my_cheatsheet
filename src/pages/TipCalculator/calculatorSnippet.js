export const CodeCalculatorState = `class TipCalculator extends React.Component {
    constructor() {
      super();
      this.state = {
        bill: null,
        selectedOption: 10,
        tip: null,
        total: null,
      };
    }`;

export const CodeCalculatorMethods = `handleChange = (e) => {
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

export const CodeCalculatorRender = `render() {
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
