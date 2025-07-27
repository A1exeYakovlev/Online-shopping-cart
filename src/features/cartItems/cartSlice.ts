import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartSlice[] = [];

export interface CartSlice {
  idNum: number;
  quant: number;
  favourite: boolean;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<CartSlice[]>) {
      return action.payload;
    },

    changeItemQuantity: {
      prepare(idNum: number, quant: number) {
        return { payload: { idNum, quant } };
      },
      reducer(state, action: PayloadAction<{ idNum: number; quant: number }>) {
        return state.map((item) =>
          item.idNum === action.payload.idNum
            ? { ...item, quant: action.payload.quant }
            : item
        );
      },
    },
    deleteItem(state, action: PayloadAction<number>) {
      return state.filter((item) => item.idNum !== action.payload);
    },
    toggleFavouriteItem(state, action: PayloadAction<number>) {
      return state.map((item) =>
        item.idNum !== action.payload
          ? item
          : { ...item, favourite: !item.favourite }
      );
    },
  },
});

export const {
  setCartItems,
  changeItemQuantity,
  deleteItem,
  toggleFavouriteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
