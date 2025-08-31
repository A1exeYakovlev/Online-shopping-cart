import { useLoaderData } from "react-router";
import { ShopItemsData } from "../../shared.types";

export function useCartItemData(itemId: number) {
  const shopItemsData: ShopItemsData[] = useLoaderData();
  const shopItemsDataMap = new Map(
    shopItemsData.map((item) => [item.idNum, item])
  );
  const itemData = shopItemsDataMap.get(itemId);
  return itemData;
}
