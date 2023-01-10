import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };
export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemons: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addPokemons } = pokemonsSlice.actions;

export const selectPokemons = (state) => state.pokemons.value;

export default pokemonsSlice.reducer;
