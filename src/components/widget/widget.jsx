import React, { Component } from "react";
import './widget.scss'

import Buttons from "../buttons/buttons"
import Statistics from "../statistics/statistics"
import StatisticsNone from "../statistics-none/statistics-none"

class PropsCounter extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  addPoint = e => {
    this.setState({ [e.target.name]: this.state[e.target.name] + 1 });
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getPercentages = () => {
    return Math.round((this.state.good / this.getTotal()) * 100);
  };


  render() {
    console.log(this.getTotal());
    return (
      <section className="section-counter-widget">
        <Buttons addPoint={this.addPoint} />
        <div className="statistics-div">
          {this.getTotal() === 0 ? (
            <StatisticsNone />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              getTotal={this.getTotal}
              getPercentages={this.getPercentages}
            />
          )}
        </div>
      </section>
    );
  }
};

export { PropsCounter }