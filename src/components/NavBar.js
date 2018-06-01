import React from 'react';
import { Score } from './Score';
import PropTypes from 'prop-types';

const style = {
  nav: { fontSize: '1.8rem' }
};

export const NavBar = props => {
  return (
    <nav
      className='p-3 bg-danger text-white'
      style={style.nav}>
      <Score
        score={props.score}
        topScore={props.topScore} />
    </nav>
  );
}

NavBar.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired
};
