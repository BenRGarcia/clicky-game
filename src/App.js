import React, { Component } from 'react';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { CardsContainer } from './containers/CardsContainer';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <CardsContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
