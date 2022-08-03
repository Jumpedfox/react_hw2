const Buttons = ({ addPoint }) => { 
  
      return (
        <div className="buttons-div">
        <p className="leave-feedback">Leave feedback:</p>
        <button
          type="button"
          className="button-good"
          onClick={addPoint}
          name="good"
        ></button>
        <button
          type="button"
          className="button-neutral"
          onClick={addPoint}
          name="neutral"
        ></button>
        <button
          type="button"
          className="button-bad"
          onClick={addPoint}
          name="bad"
        ></button>
      </div>
      );
  }
  // };
  
  export default Buttons;