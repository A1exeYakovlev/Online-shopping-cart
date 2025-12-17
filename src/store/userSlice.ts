import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../shared.types";

const initialState: UserData = {
  name: null,
  selectedDelivery: null,
  deliveryAddress: null,
  selectedPaymentOption: null,
  paymentOptionData: null,
  personalDiscount: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserData>) {
      return action.payload;
    },
    changeDeliveryOption(state, action: PayloadAction<number>) {
      {
        if (!state.selectedDelivery) return;
        state.selectedDelivery.optionId = action.payload;
      }
    },
  },
});

export const { setUserData, changeDeliveryOption } = userSlice.actions;
export default userSlice.reducer;
