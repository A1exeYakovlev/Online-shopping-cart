import { ShopItemsData, UserCart } from "../shared.types";

const INITIAL_CART_ITEMS: UserCart = [
  { idNum: 1, quant: 1, favourite: false },
  { idNum: 2, quant: 1, favourite: false },
  { idNum: 3, quant: 1, favourite: false },
  { idNum: 4, quant: 1, favourite: false },
  { idNum: 5, quant: 1, favourite: false },
  { idNum: 6, quant: 1, favourite: false },
];

export function getUserCartItems() {
  let storedUserCart = localStorage.getItem("userCartItems");

  if (!storedUserCart || storedUserCart.length === 0) {
    localStorage.setItem("userCartItems", JSON.stringify(INITIAL_CART_ITEMS));
    storedUserCart = JSON.stringify(INITIAL_CART_ITEMS);
  }

  const userCart = JSON.parse(storedUserCart) as UserCart;

  return userCart;
}

export function updateLocalStorage(
  itemData: ShopItemsData,
  newQuantity: number
) {
  const updatedCartItems = getUserCartItems().map((item) =>
    item.idNum === itemData.idNum ? { ...item, quant: newQuantity } : item
  );

  localStorage.setItem("userCartItems", JSON.stringify(updatedCartItems));
}
