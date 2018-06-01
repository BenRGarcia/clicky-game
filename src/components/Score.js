import React from 'react';
import PropTypes from 'prop-types';

// Stateless Functional Component syntax
export const Score = props => {
  return (
    <span>
      Score: {props.score}
      &nbsp;&nbsp;|&nbsp;&nbsp;
      Top Score: {props.topScore}
    </span>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired
};
