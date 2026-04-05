import { UserData } from "../shared.types";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

const INITIAL_USER_DATA: UserData = {
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

export function getUserData() {
  const userData = getFromLocalStorage<UserData>("userData", INITIAL_USER_DATA);

  if (userData.deliveryAddress.pickpointId.length === 0) {
    userData.deliveryAddress.pickpointId = [
      ...INITIAL_USER_DATA.deliveryAddress.pickpointId,
    ];
    userData.selectedDelivery = {
      ...INITIAL_USER_DATA.selectedDelivery,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  return userData;
}
