import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// Higher order component
const withLayout = WrappedComponent => props => (
  <div className='text-center mb-5'>
    <WrappedComponent {...props}/>
  </div>
);

const WrappedApp = withLayout(App);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
