import React from 'react';

const style = {
  border: '40px solid #000'
};

const title = `Gotta click&nbsp;'em all!`;
const subtitle = `(Just don't click the same one twice)`;

export const Header = () => (
  <header className='mb-3'>
    <div
      className="jumbotron jumbotron-fluid bg-white mb-0"
      style={style}>
      <div className="container">
        <h1 className="display-4 font-weight-bold">
          {title}
        </h1>
        <p className="lead font-weight-bold">
          {subtitle}
        </p>
      </div>
    </div>
  </header>
);
