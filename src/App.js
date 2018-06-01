import React, { Component } from 'react';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { CardsContainer } from './containers/CardsContainer';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className='text-center mb-5'>
        <div className='bg-success text-white'>
          <NavBar />
        </div>
        <Header />
        <div className='container'>
          <CardsContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
