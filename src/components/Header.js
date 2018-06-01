import React from 'react';

const style = {
  border: '40px solid #000'
};

// Stateless Functional Component syntax
export const Header = props => {
  return (
    <header className='mb-3'>
      <div
        className="jumbotron jumbotron-fluid bg-white mb-0"
        style={style}
      >
        <div className="container">
          <h1 className="display-4 font-weight-bold">
            Gotta click&nbsp;'em all!
          </h1>
          <p className="lead font-weight-bold">
            (Just don't click the same one twice)
          </p>
        </div>
      </div>
    </header>
  );
}
