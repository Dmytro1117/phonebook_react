import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = choise => {
    this.setState(previos => ({ [choise]: previos[choise] + 1 }));
  };

  countTotalFeedback = () => {
    const numArr = Object.values(this.state);
    return numArr.reduce((tot, val) => tot + val, 0);
  };

  countPositiveFeedbackPercentage = totalFeedback => {
    return totalFeedback > 0
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback:">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.updateState} />
        </Section>

        <Section title="Statistics:">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage(totalFeedback)}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
