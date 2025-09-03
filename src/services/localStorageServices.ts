import { ShopItemsData, UserCart } from "../shared.types";

const INITIAL_CART_ITEMS: UserCart = [
  { idNum: 1, quant: 1, favourite: false, selected: true },
  { idNum: 2, quant: 1, favourite: false, selected: true },
  { idNum: 3, quant: 1, favourite: false, selected: true },
  { idNum: 4, quant: 1, favourite: false, selected: true },
  { idNum: 5, quant: 1, favourite: false, selected: true },
  { idNum: 6, quant: 1, favourite: false, selected: true },
];

export function getUserCartItems() {
  let storedUserCart = localStorage.getItem("userCartItems");

  if (!storedUserCart || storedUserCart === "[]") {
    localStorage.setItem("userCartItems", JSON.stringify(INITIAL_CART_ITEMS));
    storedUserCart = JSON.stringify(INITIAL_CART_ITEMS);
  }

  const userCart = JSON.parse(storedUserCart) as UserCart;

  return userCart;
}

export function updateLocalStorageQuant(
  itemData: ShopItemsData,
  newQuantity: number
) {
  const updatedCartItems = getUserCartItems().map((item) =>
    item.idNum === itemData.idNum ? { ...item, quant: newQuantity } : item
  );

  localStorage.setItem("userCartItems", JSON.stringify(updatedCartItems));
}

export function deleteFromLocalStorage(idNum: number) {
  const updatedCartItems = getUserCartItems().filter(
    (item) => item.idNum !== idNum
  );

  localStorage.setItem("userCartItems", JSON.stringify(updatedCartItems));
}

export function updateLocalStorageFav(idNum: number) {
  const updatedCartItems = getUserCartItems().map((item) =>
    item.idNum !== idNum ? item : { ...item, favourite: !item.favourite }
  );
  localStorage.setItem("userCartItems", JSON.stringify(updatedCartItems));
}

export function updateLocalStorageSelected(idNum: number) {
  const updatedCartItems = getUserCartItems().map((item) =>
    item.idNum === idNum ? { ...item, selected: !item.selected } : item
  );
  localStorage.setItem("userCartItems", JSON.stringify(updatedCartItems));
}

export function updateLocalStorageAllSelected(selectAll: boolean) {
  const updatedCartItems = getUserCartItems().map((item) => ({
    ...item,
    selected: selectAll,
  }));
  localStorage.setItem("userCartItems", JSON.stringify(updatedCartItems));
}
