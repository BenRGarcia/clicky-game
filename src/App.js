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

  handleClick(charClicked) {
    if (this.state.charsClicked.includes(charClicked)) {
      this.clearCharsClicked(charClicked)
      this.resetScore()
    } else {
      this.addToCharsClicked(charClicked);
      this.incrementScore();
    }
  }

  incrementScore() {
    const score = this.state.score;
    const topScore = this.state.topScore;
    const newTopScore = score >= topScore ? score + 1 : topScore;
    this.setState({
      score: score + 1,
      topScore: newTopScore
    });
  }

  resetScore() {
    this.setState({ score: 0 });
  }

  addToCharsClicked(newChar) {
    const newArray = this.state.charsClicked;
    newArray.push(newChar);
    this.setState({ charsClicked: newArray });
    return this.state.charsClicked;
  }

  clearCharsClicked(char) {
    this.setState({ charsClicked: [] });
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
