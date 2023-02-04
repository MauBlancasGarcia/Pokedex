import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonData, getPokemonsList, searchPokemon } from "../api/pokeApi";
import NotFound from "../components/NotFound";
import Pokedex from "../components/Pokedex";
import { changeFalse, changeTrue } from "../features/loading/loadingSlice";
import {
  selectOffset,
  selectPage,
  TotalPages,
} from "../features/page/pageSlice";
import {
  addPokemons,
  changepokemonfound,
  changesearch,
  selectNamePokemon,
  selectPokemonFound,
  selectSearchPokemon,
} from "../features/pokemons/pokemonsSlice";
function Home() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const offset = useSelector(selectOffset);
  const namepokemon = useSelector(selectNamePokemon);
  const search = useSelector(selectSearchPokemon);
  const pokemonfound = useSelector(selectPokemonFound);

  const getPokemons = async () => {
    dispatch(changeTrue());
    const data = await getPokemonsList(offset);
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });
    const results = await Promise.all(promises);
    const totalPages = Math.ceil(data.count / 12);
    dispatch(TotalPages(totalPages));

    dispatch(addPokemons(results));
    dispatch(changeFalse());
  };

  useEffect(() => {
    if (!search) {
      getPokemons();
    }
  }, [page]);

  useEffect(() => {
    if (!namepokemon) {
      dispatch(changepokemonfound(false));
      getPokemons();
    } else {
      Searching();
    }
  }, [namepokemon]);

  const Searching = async () => {
    dispatch(changeTrue());
    dispatch(changesearch(true));
    dispatch(changepokemonfound(false));
    const result = await searchPokemon(namepokemon);
    if (!result) {
      dispatch(changepokemonfound(true));
    } else {
      dispatch(addPokemons([result]));
      dispatch(TotalPages(1));
    }
    dispatch(changesearch(false));
    dispatch(changeFalse());
  };
  return (
    <div className="container">
      {pokemonfound ? <NotFound></NotFound> : <Pokedex />}
    </div>
  );
}

export default Home;
