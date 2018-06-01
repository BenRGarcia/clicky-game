import React, { Component } from 'react';
import { Cards } from '../components/Cards';
import { pokemons } from '../pokemon/index';

// Component Class syntax
export class CardsContainer extends Component {
  render() {
    return (
      <Cards pokemons={pokemons} />
    );
  }
}
