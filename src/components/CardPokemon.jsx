import React from "react";
import "../styles/CardPokemon.css";
function CardPokemon(props) {
  const { pokemon } = props;

  return (
    <>
      <div className="card border border-0 mx-auto" style={{ width: "18rem" }}>
        <img
          className="face front"
          src={pokemon.sprites.other.home.front_default}
        />
        <div className="face front">
          <h3>{pokemon.name}</h3>
        </div>
        <div className="face back">
          <h3>{pokemon.name}</h3>
        </div>
      </div>
    </>
  );
}

export default CardPokemon;
