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
  },
});

export const { setCartItems, changeItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
