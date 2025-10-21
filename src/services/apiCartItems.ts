const CART_ITEMS_URL = "http://localhost:5000";

export async function getShopDataBase<T>(route: string): Promise<T> {
  try {
    const response = await fetch(`${CART_ITEMS_URL}/${route}`);

    if (!response.ok) {
      throw new Error("Ошибка загрузки из базы данных магазина");
    }

    const data = (await response.json()) as T;
    return data;
  } catch (err) {
    console.error((err as Error).message);
    throw err;
  }
}
