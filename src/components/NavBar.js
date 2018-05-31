import React from 'react';
import { ScoresContainer } from '../containers/ScoresContainer';

const style = {
  nav: {
    padding: '1rem',
    fontSize: '3rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  logo: {
    // justifyContent: 'flex-start'
  },
  scores: {
    // justifyContent: 'flex-end'
  }
};

// Stateless Functional Component syntax
export const NavBar = props => {
  return (
    <nav style={style.nav}>
      <span style={style.logo}>
        Clicky Game!
      </span>
      <span style={style.scores}>
        <ScoresContainer />
      </span>
    </nav>
  );
}
