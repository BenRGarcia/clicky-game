import React from 'react';
import { ScoresContainer } from '../containers/ScoresContainer';

const style = {
  nav: { fontSize: '2rem' }
};

// Stateless Functional Component syntax
export const NavBar = props => {
  return (
    <nav className='d-flex justify-content-between p-3' style={style.nav}>
      <span>
        Clicky Game!
      </span>
      <span>
        <ScoresContainer />
      </span>
    </nav>
  );
}
