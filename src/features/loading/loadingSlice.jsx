import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: true };

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    verdadero: (state) => {
      state.value = true;
    },
    falso: (state) => {
      state.value = false;
    },
  },
});
export const { verdadero, falso } = loadingSlice.actions;
export const selectLoading = (state) => state.loading.value;
export default loadingSlice.reducer;
