import React, { Component } from 'react';
import { Score } from '../components/Score';
import { TopScore } from '../components/TopScore';

// Component Class syntax
export class ScoresContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      topScore: 0
    };

    this.updateScore = this.updateScore.bind(this);
    this.updateTopScore = this.updateTopScore.bind(this);
  }

  updateScore(newScore) {
    this.setState({
      score: newScore
    });
  }

  updateTopScore(newScore) {
    this.setState({
      topScore: newScore
    });
  }

  render() {
    return (
      <span>
        <Score />
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <TopScore  />
      </span>
    );
  }
}
