import React from 'react';

export const Footer = props => {
  return (
    <footer className='bg-danger p-2 fixed-bottom'>
      <a
        href='https://github.com/BenRGarcia/clicky-game'
        target='_blank'
        className='text-white'
        rel='noopener noreferrer'
      >
        View Source Code
      </a>
    </footer>
  );
}
