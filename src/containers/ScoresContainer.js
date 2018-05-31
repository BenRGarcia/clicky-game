import React, { Component } from 'react';
import { Score } from '../components/Score';
import { TopScore } from '../components/TopScore';

// Component Class syntax
export class ScoresContainer extends Component {
  render() {
    return (
      <span>
        <Score />
          &nbsp;|&nbsp;
        <TopScore />
      </span>
    );
  }
}
