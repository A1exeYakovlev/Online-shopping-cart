import { UserCart } from "../shared.types";

const INITIAL_CART_ITEMS: UserCart = [
  { idNum: 1, quant: 1 },
  { idNum: 2, quant: 1 },
  { idNum: 3, quant: 1 },
  { idNum: 4, quant: 1 },
  { idNum: 5, quant: 1 },
  { idNum: 6, quant: 1 },
];

export function getUserCartItems() {
  let storedUserCart = localStorage.getItem("userCartItems");

  if (!storedUserCart) {
    localStorage.setItem("userCartItems", JSON.stringify(INITIAL_CART_ITEMS));
    storedUserCart = JSON.stringify(INITIAL_CART_ITEMS);
  }

  const userCart = JSON.parse(storedUserCart) as UserCart;

  return userCart;
}
