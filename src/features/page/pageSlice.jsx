import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentpage: 0, totalpage: 0, offset: 0 };

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    updateCurrentPage: (state, action) => {
      state.currentpage = action.payload;
    },
    TotalPages: (state, action) => {
      state.totalpage = action.payload;
    },
    OffsetPokemons: (state) => {
      state.offset = state.currentpage * 12;
    },
  },
});

export const { updateCurrentPage, TotalPages, OffsetPokemons } =
  pageSlice.actions;

export const selectPage = (state) => state.page.currentpage;
export const selectOffset = (state) => state.page.offset;
export const selectTotalPages = (state) => state.page.totalpage;
export default pageSlice.reducer;
