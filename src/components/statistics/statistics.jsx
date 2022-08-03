const Statistics = ({ good, neutral, bad, getTotal, getPercentages }) => {
    return (
      <>
        <p className="statistics">Our feedback statistics:</p>
        <p className="good">Good: {good}</p>
        <p className="neutral">Neutral: {neutral}</p>
        <p className="bad">Bad: {bad}</p>
        <p className="total-feedback">Total: {getTotal()}</p>
        <p className="percent-of-good-feedback">
          Percent of good feedback: {getPercentages()}%
        </p>
      </>
    );
  }
  
  export default Statistics 