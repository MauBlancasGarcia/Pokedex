import React from "react";
import "../styles/CardPokemon.css";
function CardPokemon(props) {
  const { pokemon } = props;

  return (
    <>
      <div className="card border border-0 mx-auto">
        <img
          className="face front"
          src={pokemon.sprites.other.home.front_default}
        />
        <div className="face front">
          <h3>{pokemon.name}</h3>
        </div>
        <div className="face back">
          <h3>{pokemon.species.name}</h3>

          <div className="pb-3">
            Type :
            {pokemon.types.map((type) => {
              return (
                <p key={type.slot} className="d-inline ps-1">
                  {type.type.name}
                </p>
              );
            })}
          </div>

          <p>
            {pokemon.stats[0].stat.name} : {pokemon.stats[0].base_stat}
          </p>
          <p>
            {pokemon.stats[1].stat.name} : {pokemon.stats[1].base_stat}
          </p>
          <p>
            {pokemon.stats[2].stat.name} : {pokemon.stats[2].base_stat}
          </p>
          <p>
            {pokemon.stats[3].stat.name} : {pokemon.stats[3].base_stat}
          </p>
          <p>
            {pokemon.stats[4].stat.name} : {pokemon.stats[4].base_stat}
          </p>
          <p>
            {pokemon.stats[5].stat.name} : {pokemon.stats[5].base_stat}
          </p>
        </div>
      </div>
    </>
  );
}

export default CardPokemon;
