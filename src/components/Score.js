import React from 'react';
import PropTypes from 'prop-types';

export const Score = ({ score, topScore }) => (
    <span>
      Score: {score}
      &nbsp;&nbsp;|&nbsp;&nbsp;
      Top Score: {topScore}
    </span>
);


Score.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired
};
