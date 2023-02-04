import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  search: false,
  namepokemon: "",
  pokemonfound: false,
};
export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemons: (state, action) => {
      state.value = action.payload;
    },
    nameSearchPokemon: (state, action) => {
      state.namepokemon = action.payload;
    },
    changesearch: (state, action) => {
      state.search = action.payload;
    },
    changepokemonfound: (state, action) => {
      state.pokemonfound = action.payload;
    },
  },
});
export const {
  addPokemons,
  nameSearchPokemon,
  changesearch,
  changepokemonfound,
} = pokemonsSlice.actions;

export const selectPokemons = (state) => state.pokemons.value;
export const selectNamePokemon = (state) => state.pokemons.namepokemon;
export const selectSearchPokemon = (state) => state.pokemons.search;
export const selectPokemonFound = (state) => state.pokemons.pokemonfound;
export default pokemonsSlice.reducer;
