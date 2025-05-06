import { CartItemData } from "../shared.types";

const CART_ITEMS_URL = "http://localhost:5173";

export async function getCartItemsData() {
  try {
    const response = await fetch(`${CART_ITEMS_URL}/cartItems.json`);

    if (!response.ok) {
      throw new Error("Ошибка загрузки данных о товарах в корзине");
    }

    const data = (await response.json()) as CartItemData[];
    return data;
  } catch (err) {
    console.error(err.message);
  }
}
