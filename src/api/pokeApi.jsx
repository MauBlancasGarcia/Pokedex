import axios from "axios";
//se mostraran 12 pokemones en cada pagina
const limit = 12;

export const searchPokemon = async (name) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const resp = await axios.get(url);
  const data = resp.data;
  return data;
};

export const getPokemonData = async (url) => {
  try {
    const resp = await axios.get(url);
    const data = resp.data;
    return data;
  } catch (err) {}
};

export const getPokemonsList = async (offset) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    const resp = await axios.get(url);
    const data = resp.data;
    return data;
  } catch (err) {}
};
