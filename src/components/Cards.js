import React from 'react';

const style = {
  border: '5px solid #000',
  borderRadius: '50%',
  boxShadow: '5px 10px 8px #888888'
};

// Stateless Functional Component syntax
export const Cards = props => {
  const pokemons = props.pokemons.map(pokemon => {
    return (
      <div
        key={pokemon.name}
        className='col-4 col-md-3 mb-4'
      >
        <img
          src={pokemon.src}
          alt={`Pokemon named ${pokemon.name}`}
          className='img-fluid'
          style={style}
        />
      </div>
    );
  })
  return (
    <main className='row'>
      {pokemons}
    </main>
  );
}
