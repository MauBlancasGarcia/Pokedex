import { configureStore } from "@reduxjs/toolkit";
import { loadingSlice } from "../features/loading/loadingSlice";
import { pageSlice } from "../features/page/pageSlice";
import { pokemonsSlice } from "../features/pokemons/pokemonsSlice";
export default configureStore({
  reducer: {
    loading: loadingSlice.reducer,
    pokemons: pokemonsSlice.reducer,
    page: pageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
