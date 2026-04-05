import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../shared.types";

const initialState: UserData = {
  name: "Алексей",
  selectedDelivery: { courier: false, optionId: 1 },
  deliveryAddress: {
    pickpointId: [1, 2, 3],
    courierAddress: [
      { optionId: 1, address: "Бишкек, улица Льва Толстого, 100" },
      { optionId: 2, address: "Бишкек, улица Жукеева-Пудовкина, 77/1" },
      {
        optionId: 3,
        address: "Бишкек, улица Токтогула, 202/1, кв. 45",
      },
    ],
  },
  selectedPaymentOption: 1,
  paymentOptionData: [
    {
      optionId: 1,
      system: "Мир",
      number: "1234 56•• •••• 1234",
      expiration: "01/30",
    },
    {
      optionId: 2,
      system: "Visa",
      number: "5678 90•• •••• 9708",
      expiration: "03/32",
    },
    {
      optionId: 3,
      system: "Master Card",
      number: "9876 54•• •••• 6136",
      expiration: "05/35",
    },
    {
      optionId: 4,
      system: "Maestro",
      number: "5734 56•• •••• 1044",
      expiration: "01/30",
    },
  ],
  personalDiscount: 0.09,
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
        state.selectedDelivery.optionId = action.payload;
      }
    },
    deletePickpoint(state, action: PayloadAction<number>) {
      state.deliveryAddress.pickpointId =
        state.deliveryAddress.pickpointId.filter(
          (pickpointId) => pickpointId !== action.payload,
        );
    },
  },
});

export const { setUserData, changeDeliveryOption, deletePickpoint } =
  userSlice.actions;
export default userSlice.reducer;
