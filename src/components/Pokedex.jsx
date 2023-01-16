import React from "react";
import { useSelector } from "react-redux";
import CardPokemon from "../components/CardPokemon";
import { selectLoading } from "../features/loading/loadingSlice";
import { Oval } from "svg-loaders-react";
import { selectPokemons } from "../features/pokemons/pokemonsSlice";
import Pagination from "./Pagination";

function Pokedex() {
  const Pokemons = useSelector(selectPokemons);
  const Loading = useSelector(selectLoading);
  return (
    <div>
      {Loading ? (
        <div className="loading d-flex align-items-center justify-content-center">
          <Oval
            stroke={"#4a3091"}
            width={200}
            height={200}
            viewBox="0 0 38 38"
          />
        </div>
      ) : (
        <div
          className="row row-cols-4-xxl d-flex justify-content-evenly"
          style={{ paddingTop: "1rem" }}
        >
          {Pokemons.map((pokemon) => {
            return (
              <div className="col" key={pokemon.name}>
                <CardPokemon pokemon={pokemon} />
              </div>
            );
          })}
        </div>
      )}
      <div
        className="paginate d-flex justify-content-center"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <Pagination></Pagination>
      </div>
    </div>
  );
}

export default Pokedex;
{
  /* {Pokemons.map((pokemon) => {
            return (
              <div className="col" key={pokemon.name}>
                <CardPokemon pokemon={pokemon} />
              </div>
            })} */
}
