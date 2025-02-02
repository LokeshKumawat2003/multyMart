import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import datileSlice from "./datile";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    datile: datileSlice,
  },
});

export default store;
