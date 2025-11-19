import { useLoaderData } from "react-router";
import { ShopDataBase, ShopItemsData } from "../../shared.types";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export function useCartItemData(itemId: number) {
  const shopDataBase: ShopDataBase = useLoaderData();
  const shopItemsData = shopDataBase.shopItems;
  const shopItemsDataMap = new Map(
    shopItemsData.map((item) => [item.idNum, item])
  );
  const itemData = shopItemsDataMap.get(itemId);

  return itemData;
}

export function useCartItems(selection?: "only-selected") {
  const shopDataBase = useLoaderData<ShopDataBase>();
  const shopItemsData = shopDataBase.shopItems;
  const userCart = useSelector((state: RootState) => state.cart);
  const shopItemsMap = new Map(shopItemsData.map((item) => [item.idNum, item]));

  function isShopItemsData(
    item: ShopItemsData | undefined
  ): item is ShopItemsData {
    return item !== undefined;
  }

  let prefilteredCartItems = userCart;

  if (selection === "only-selected") {
    prefilteredCartItems = userCart.filter((userItem) => userItem.selected);
  }

  const cartItems = prefilteredCartItems
    .map((userItem) => shopItemsMap.get(userItem.idNum))
    .filter(isShopItemsData);

  return cartItems;
}

export function useCartItemsTotals(cartItems: ShopItemsData[]) {
  const cartItemsInStock = cartItems.filter(
    (item) => item.remains && item.remains > 0
  );
  const shopItemMap = new Map(
    cartItemsInStock.map((item) => [item.idNum, item])
  );

  const userCart = useSelector((state: RootState) => state.cart);

  const currency = cartItems[0]?.discPrice.currency || "сом";

  const totalCost = userCart.reduce((sum, userItem) => {
    const shopItem = shopItemMap.get(userItem.idNum);
    if (!shopItem) return sum;
    return sum + userItem.quant * shopItem.discPrice.value;
  }, 0);

  const totalQuant = userCart.reduce((sum, userItem) => {
    const inStock = shopItemMap.has(userItem.idNum);
    return inStock ? sum + userItem.quant : sum;
  }, 0);

  const fullCost = userCart.reduce((sum, userItem) => {
    const shopItem = shopItemMap.get(userItem.idNum);
    if (!shopItem) return sum;
    return sum + userItem.quant * shopItem.fullPrice.value;
  }, 0);

  return { totalCost, totalQuant, fullCost, currency };
}
