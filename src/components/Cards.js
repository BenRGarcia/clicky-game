import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  border: '10px solid #000',
  borderRadius: '50%',
  boxShadow: '5px 10px 8px #888888'
};

export class Cards extends Component{
  handleClick(e) {
    const characterClicked = e.target.alt;
    this.props.onClick(characterClicked);
  }

  render() {
    const pokemons = this.props.pokemons.map(pokemon => {
      const { name, src } = pokemon;
      return (
        <div
          key={name}
          className='col-4 col-md-3 mb-4'>
          <img
            data-pokemon
            src={src}
            alt={name}
            className='img-fluid'
            style={style}
            onClick={(e) => this.handleClick(e)} />
        </div>
      );
    })

    return pokemons;
  }
}

Cards.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired
};
