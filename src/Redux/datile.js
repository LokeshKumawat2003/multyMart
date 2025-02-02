import { createSlice } from "@reduxjs/toolkit";

export const datileSlice = createSlice({
  name: "datile",
  initialState: {
    datileItem: {},
  },
  reducers: {
    datile: (state, action) => {
      const item = action.payload;
      state.datileItem = item;
    },
  },
});

export const { datile } = datileSlice.actions;
export default datileSlice.reducer;
