import React from 'react';
import PropTypes from 'prop-types';

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
