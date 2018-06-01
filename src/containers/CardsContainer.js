import React, { Component } from 'react';
import { Cards } from '../components/Cards';
import { pokemons } from '../pokemon/index';

// Component Class syntax
export class CardsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charsClicked: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(char) {
    return this.charPreviouslyClicked(char)
      ? this.clearCharsClicked(char)
      : this.addToCharsClicked(char);
  }

  charPreviouslyClicked(char) {
    return this.state.charsClicked.includes(char);
  }

  addToCharsClicked(newChar) {
    const newArray = this.state.charsClicked;
    newArray.push(newChar)
    this.setState({
      charsClicked: newArray
    });
    return this.state.charsClicked
  }

  clearCharsClicked(char) {
    this.setState({
      charsClicked: []
    });
    return this.state.charsClicked
  }

  render() {
    return (
      <Cards
        pokemons={pokemons}
        onClick={this.handleClick}
      />
    );
  }
}
