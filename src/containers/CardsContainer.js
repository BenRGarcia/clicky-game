import React, { Component } from 'react';
import { Cards } from '../components/Cards';
import { pokemons } from '../pokemon/index';

// Component Class syntax
export class CardsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charsClicked: [],
      pokemons: pokemons
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    return this.shufflePokemon();
  }

  shufflePokemon() {
    const newArray = this.state.pokemons.slice();
    newArray.sort((a, b) => 0.5 - Math.random());
    this.setState({
      pokemons: newArray
    });
    return newArray;
  }

  handleClick(char) {
    this.shufflePokemon();
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
      <main className='row'>
        <Cards
          pokemons={this.state.pokemons}
          onClick={this.handleClick}
        />
      </main>
    );
  }
}
