import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonData, getPokemonsList } from "../api/pokeApi";
import Pokedex from "../components/Pokedex";
import { changeFalse, changeTrue } from "../features/loading/loadingSlice";
import {
  selectOffset,
  selectPage,
  TotalPages,
} from "../features/page/pageSlice";
import { addPokemons } from "../features/pokemons/pokemonsSlice";
function Home() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const offset = useSelector(selectOffset);

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
    getPokemons();
  }, [page]);
  return (
    <div className="container">
      <Pokedex />
    </div>
  );
}

export default Home;
