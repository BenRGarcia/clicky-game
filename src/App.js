import React, { Component } from 'react';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { CardsContainer } from './containers/CardsContainer';
import { Footer } from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charsClicked: [],
      score: 0,
      topScore: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  incrementScore(newScore) {
    this.setState({
      score: newScore
    });
  }

  updateTopScore(newScore) {
    this.setState({
      topScore: newScore
    });
  }

  handleClick(characterClicked) {
    return this.charPreviouslyClicked(characterClicked)
      ? this.clearCharsClicked(characterClicked)
      : this.addToCharsClicked(characterClicked);
  }

  charPreviouslyClicked(char) {
    return this.state.charsClicked.includes(char);
  }

  addToCharsClicked(newChar) {
    const newArray = this.state.charsClicked;
    newArray.push(newChar);
    this.setState({
      charsClicked: newArray
    });
    return this.state.charsClicked;
  }

  clearCharsClicked(char) {
    this.setState({
      charsClicked: []
    });
    return this.state.charsClicked;
  }

  render() {
    return (
      <React.StrictMode>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore} />
        <Header />
        <CardsContainer onClick={this.handleClick} />
        <Footer />
      </React.StrictMode>
    );
  }
}

export default App;
