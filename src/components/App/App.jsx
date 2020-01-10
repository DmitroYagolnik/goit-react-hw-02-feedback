import React, { Component } from 'react';
import Feedback from '../Feedback/Feedback';
import Statistics from '../Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, elem) => acc + elem, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Feedback handleButton={this.handleButton} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}

export default App;
