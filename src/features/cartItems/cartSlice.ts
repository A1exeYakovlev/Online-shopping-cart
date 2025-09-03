import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartSlice[] = [];

export interface CartSlice {
  idNum: number;
  quant: number;
  favourite: boolean;
  selected: boolean;
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
    selectItem(state, action: PayloadAction<number>) {
      return state.map((item) =>
        item.idNum === action.payload
          ? { ...item, selected: !item.selected }
          : item
      );
    },
    selectAllItems(state, action: PayloadAction<boolean>) {
      return state.map((item) => ({ ...item, selected: action.payload }));
    },
  },
});

export const {
  setCartItems,
  changeItemQuantity,
  deleteItem,
  toggleFavouriteItem,
  selectItem,
  selectAllItems,
} = cartSlice.actions;

export default cartSlice.reducer;
