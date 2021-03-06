import React, { Component } from 'react';
import { Cards } from '../components/index';
import { pokemons } from '../pokemon/index';
import PropTypes from 'prop-types';

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
    this.setState({ pokemons: newArray });
    return newArray;
  }

  handleClick(characterClicked) {
    this.shufflePokemon();
    this.props.onClick(characterClicked);
  }

  render() {
    let classes = `row ${this.props.wiggle ? 'wiggle' : ''}`
    return (
      <div className='container'>
        <main className={classes}>
          <Cards
            pokemons={this.state.pokemons}
            onClick={this.handleClick} />
        </main>
      </div>
    );
  }
}

CardsContainer.propTypes = {
  onClick: PropTypes.func.isRequired,
  wiggle: PropTypes.bool.isRequired
};
