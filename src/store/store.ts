import { configureStore, Middleware } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import { getUserData } from "../services/userLocalStorageServices";
import { getUserCartItems } from "../services/cartLocalStorageServices";

const preloadedState = {
  user: getUserData(),
  cart: getUserCartItems(),
};

const localStorageMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const { cart, user } = storeAPI.getState() as RootState;

  localStorage.setItem("userData", JSON.stringify(user));
  localStorage.setItem("userCartItems", JSON.stringify(cart));

  return result;
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
