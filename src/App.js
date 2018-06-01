import React, { Component } from 'react';
import { NavBar, Header, Footer } from './components/index';
import { CardsContainer } from './containers/index';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charsClicked: [],
      score: 0,
      topScore: 0,
      wiggle: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(charClicked) {
    const { charsClicked } = this.state;
    if (charsClicked.includes(charClicked)) {
      this.clearCharsClicked()
      this.resetScore()
    } else {
      this.addToCharsClicked(charClicked);
      this.incrementScore();
    }
  }

  incrementScore() {
    const { score, topScore } = this.state;
    const newTopScore = score >= topScore ? score + 1 : topScore;
    this.setState({
      score: score + 1,
      topScore: newTopScore
    });
  }

  resetScore() {
    this.setState({
      score: 0,
      wiggle: true
    }, () => (
      setTimeout(() => this.setState({ wiggle: false }), 500))
    )
  }

  addToCharsClicked(newChar) {
    const updatedArray = this.state.charsClicked.slice();
    updatedArray.push(newChar);
    this.setState({ charsClicked: updatedArray });
    return updatedArray;
  }

  clearCharsClicked() {
    return this.setState({ charsClicked: [] });
  }

  render() {
    return (
      <React.StrictMode>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore} />
        <Header />
        <CardsContainer
          onClick={this.handleClick}
          wiggle={this.state.wiggle}/>
        <Footer />
      </React.StrictMode>
    );
  }
}
