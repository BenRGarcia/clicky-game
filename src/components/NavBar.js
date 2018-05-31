import React from 'react';
import { ScoresContainer } from '../containers/ScoresContainer';

const style = {
  nav: { fontSize: '2rem' }
};

// Stateless Functional Component syntax
export const NavBar = props => {
  return (
    <nav className='p-3' style={style.nav}>
      <ScoresContainer />
    </nav>
  );
}
