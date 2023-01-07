import axios from "axios";

export const searchPokemon = async (name) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const resp = await axios.get(url);
  const data = resp.data;
  return data;
};

export const getPokemonData = async (url) => {
  const resp = await axios.get(url);
  const data = resp.data;
  return data;
};

export async function getPokemonsList(offset, limit) {
  let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const resp = await axios.get(url);
  const data = resp.data;
  return data;
}
