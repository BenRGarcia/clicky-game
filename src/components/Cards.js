import React from 'react';

// Stateless Functional Component syntax
export const Cards = props => {
  const pokemons = props.pokemons.map(pokemon => {
    return (
      <div
        key={pokemon.name}
      >
        <img
          src={pokemon.src}
          alt={`Pokemon named ${pokemon.name}`}
        />
      </div>
    );
  })
  return (
    <main>
      {pokemons}
    </main>
  );
}
