import React from "react";
import { useEffect, useState } from "react";
import { getPokemonData, getPokemonsList } from "../api/pokeApi";

function Home() {
  useEffect(() => {
    getpokeApi();
  }, []);

  const getpokeApi = async () => {
    const data = await getPokemonsList(0, 10);
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });
    const results = await Promise.all(promises);
  };

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
