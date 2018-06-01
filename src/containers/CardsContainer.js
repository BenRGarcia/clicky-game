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

  handleClick(character) {
    console.log(`${character} was clicked`)
  }

  addToCharsClicked() {

  }

  clearCharsClicked() {

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
