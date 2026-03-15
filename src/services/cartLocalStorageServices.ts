import { UserCart } from "../shared.types";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

const INITIAL_CART_ITEMS: UserCart = [
  { idNum: 1, quant: 1, favourite: false, selected: true },
  { idNum: 2, quant: 1, favourite: false, selected: true },
  { idNum: 3, quant: 1, favourite: false, selected: true },
  { idNum: 4, quant: 1, favourite: false, selected: true },
  { idNum: 5, quant: 1, favourite: false, selected: true },
  { idNum: 6, quant: 1, favourite: false, selected: true },
];

export function getUserCartItems() {
  const cart = getFromLocalStorage<UserCart>(
    "userCartItems",
    INITIAL_CART_ITEMS,
  );

  if (cart.length === 0) {
    localStorage.setItem("userCartItems", JSON.stringify(INITIAL_CART_ITEMS));
    return INITIAL_CART_ITEMS;
  }

  return cart;
}
