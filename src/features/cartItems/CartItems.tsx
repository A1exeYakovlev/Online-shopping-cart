import CartItem from "./CartItem";
import MissingItems from "./MissingItems";
import { ShopItemsData } from "../../shared.types";
import { getCartItemsData } from "../../services/apiCartItems";
import { useLoaderData, useNavigation } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CartItemsTopSummary from "./CartItemsTopSummary";
import { useEffect, useRef, useState } from "react";

export async function loader() {
  const shopItemsData = (await getCartItemsData()) as ShopItemsData[];

  return shopItemsData;
}

export default function CartItems() {
  const [collapsibleStockHeight, setCollapsibleStockHeight] = useState<
    string | null
  >(null);
  const collapsibleStockEl = useRef<HTMLDivElement>(null);

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const shopItemsData: ShopItemsData[] = useLoaderData();
  const userCart = useSelector((state: RootState) => state.cart);

  const collapsedInStock = collapsibleStockHeight === "0px";

  function isShopItemsData(
    item: ShopItemsData | undefined
  ): item is ShopItemsData {
    return item !== undefined;
  }

  const shopItemsMap = new Map(shopItemsData.map((item) => [item.idNum, item]));

  const cartItems = userCart
    .map((userItem) => shopItemsMap.get(userItem.idNum))
    .filter(isShopItemsData);
  console.log(cartItems);

  const cartItemsInStock = cartItems.filter(
    (item) => item.remains && item.remains > 0
  );

  const missingItems = cartItems.filter((item) => item.remains === 0);
  const missingItemsQuantity = missingItems.length || 0;

  useEffect(() => {
    if (collapsibleStockHeight !== null || !collapsibleStockEl.current) return;

    const observer = new ResizeObserver((entries) => {
      const updHeight = entries[0].contentRect.height.toString() + "px";

      setCollapsibleStockHeight(updHeight);
    });

    observer.observe(collapsibleStockEl.current);

    return () => {
      observer.disconnect();
    };
  }, [collapsibleStockHeight]);

  return (
    <section className="cart__items">
      <div className="container container--mob-only">
        <h1 className="cart__title headline2 headline2--lg-htmlFor-desktop">
          Корзина
        </h1>
        <CartItemsTopSummary
          cartItemsInStock={cartItemsInStock}
          userCart={userCart}
          collapsedInStock={collapsedInStock}
          setCollapsibleStockHeight={setCollapsibleStockHeight}
          collapsibleStockEl={collapsibleStockEl}
          missingItemsQuantity={missingItemsQuantity}
        />
        <div
          className={`cart__items-wrap ${collapsedInStock ? "hide" : ""}`}
          ref={collapsibleStockEl}
          style={{
            maxHeight: collapsibleStockHeight ?? "none",
          }}
        >
          {isLoading && <p>Товары загружаются...</p>}
          {!isLoading && cartItemsInStock.length === 0 && (
            <p>
              В корзине нет товаров
              {missingItemsQuantity !== 0 && " в наличии"}
            </p>
          )}
          {!isLoading &&
            cartItemsInStock.length > 0 &&
            cartItemsInStock.map((item) => (
              <CartItem itemData={item} key={item.idNum} />
            ))}
        </div>
        {missingItemsQuantity > 0 && (
          <MissingItems
            missingItems={missingItems}
            missingItemsQuantity={missingItemsQuantity}
          />
        )}
      </div>
    </section>
  );
}
