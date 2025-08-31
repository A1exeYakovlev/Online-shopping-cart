import { useLoaderData } from "react-router";
import { ShopItemsData } from "../../shared.types";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

export function useCartItemData(itemId: number) {
  const shopItemsData: ShopItemsData[] = useLoaderData();
  const shopItemsDataMap = new Map(
    shopItemsData.map((item) => [item.idNum, item])
  );
  const itemData = shopItemsDataMap.get(itemId);

  return itemData;
}

export function useCartItems() {
  const shopItemsData: ShopItemsData[] = useLoaderData();
  const userCart = useSelector((state: RootState) => state.cart);
  const shopItemsMap = new Map(shopItemsData.map((item) => [item.idNum, item]));

  function isShopItemsData(
    item: ShopItemsData | undefined
  ): item is ShopItemsData {
    return item !== undefined;
  }

  const cartItems = userCart
    .map((userItem) => shopItemsMap.get(userItem.idNum))
    .filter(isShopItemsData);

  return cartItems;
}
