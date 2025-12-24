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
    deletePickpoint(state, action: PayloadAction<number>) {
      if (!state.deliveryAddress) return;
      state.deliveryAddress.pickpointId =
        state.deliveryAddress.pickpointId.filter(
          (pickpointId) => pickpointId !== action.payload
        );

      if (state.selectedDelivery?.optionId === action.payload) {
        state.selectedDelivery.optionId = null;
      }
    },
  },
});

export const { setUserData, changeDeliveryOption, deletePickpoint } =
  userSlice.actions;
export default userSlice.reducer;
