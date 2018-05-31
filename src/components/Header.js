import React from 'react';

const style = {
  backgroundImage: 'url(' + require('../wormz.png') + ')'
};

// Stateless Functional Component syntax
export const Header = props => {
  return (
    <header>
      <div
        className="jumbotron jumbotron-fluid"
        style={style}
      >
        <div className="container">
          <h1 className="display-2 font-weight-bold">
            Clicky Game!
          </h1>
          <p className="lead">
            Click on an image to earn points, but don't click on any more than once!
          </p>
        </div>
      </div>
    </header>
  );
}
