import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartItems/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
