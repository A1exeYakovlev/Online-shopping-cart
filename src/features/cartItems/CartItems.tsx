import CartItem from "./CartItem";
import MissingItems from "./MissingItems";
import { ShopItemsData } from "../../shared.types";
import { getCartItemsData } from "../../services/apiCartItems";
import { useNavigation } from "react-router";
import CartItemsTopSummary from "./CartItemsTopSummary";
import { useEffect, useRef, useState } from "react";
import { useCartItems } from "./hooks";

export async function loader() {
  const shopItemsData = (await getCartItemsData()) as ShopItemsData[];
  return shopItemsData;
}

export default function CartItems() {
  const [collapsibleStockHeight, setCollapsibleStockHeight] = useState<
    string | null
  >(null);
  const collapsibleStockEl = useRef<HTMLDivElement>(null);
  const collapsedInStock = collapsibleStockHeight === "0px";

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const cartItems = useCartItems();
  const cartItemsInStock = cartItems.filter(
    (item) => item.remains && item.remains > 0
  );

  const cartItemsInStockQuantity = cartItemsInStock.length;
  const missingItemsQuantity = cartItems.length - cartItemsInStock.length;

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
        <h1 className="cart__title headline2 headline2--lg-for-desktop">
          Корзина
        </h1>
        <CartItemsTopSummary
          collapsedInStock={collapsedInStock}
          setCollapsibleStockHeight={setCollapsibleStockHeight}
          collapsibleStockEl={collapsibleStockEl}
          missingItemsQuantity={missingItemsQuantity}
          cartItemsInStockQuantity={cartItemsInStockQuantity}
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
              <CartItem itemId={item.idNum} key={item.idNum} />
            ))}
        </div>
        {missingItemsQuantity > 0 && (
          <MissingItems missingItemsQuantity={missingItemsQuantity} />
        )}
      </div>
    </section>
  );
}
