import CartItem from "./CartItem";
import MissingItems from "./missingItems";
import { ShopItemsData } from "../../shared.types";
import { getCartItemsData } from "../../services/apiCartItems";
import { useLoaderData, useNavigation } from "react-router";
import { getUserCartItems } from "../../services/localStorageServices";

export async function loader() {
  const shopItemsData = (await getCartItemsData()) as ShopItemsData[];
  const userCart = getUserCartItems();
  const cartItems = userCart.map((userItem) =>
    shopItemsData.find((item) => item.idNum === userItem.idNum)
  );

  return cartItems;
}

export default function CartItems() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const cartItems: ShopItemsData[] = useLoaderData();

  return (
    <section className="cart__items">
      <div className="container container--mob-only">
        <h1 className="cart__title headline2 headline2--lg-htmlFor-desktop">
          Корзина
        </h1>
        <div className="cart__items-top">
          <div className="cart__items-summary headline4">
            <span className="items-top-quantity">266 товаров</span> ·
            <span id="items-top-sum">2 100 569</span>
            <span className="current-currency">&nbsp;сом</span>
          </div>
          <div className="cart__selectAll custom-checkbox">
            <input
              className="custom-checkbox__input cart__selectAll-input cart-item__select-input"
              checked
              data-item="all"
              name="selectAll"
              type="checkbox"
              id="selectAll"
              value="all selected"
            />
            <label
              className="cart__selectAll-label custom-checkbox__label"
              htmlFor="selectAll"
            >
              <span className="cart__selectAll-checkbox custom-checkbox__checkbox"></span>
              Выбрать все
            </label>
          </div>
          <button
            className="cart__collapse-btn collapse-btn collapse-btn--cart-items"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.3417 14.9121C16.966 15.2982 16.3477 15.3044 15.9644 14.9258L10.1418 9.17475C10.0634 9.0973 9.93715 9.09788 9.85945 9.17603L4.15281 14.9159C3.76725 15.3037 3.14293 15.3137 2.74516 14.9384C2.33549 14.552 2.32163 13.9049 2.71437 13.5012L9.28326 6.74949C9.67588 6.34593 10.3241 6.34593 10.7167 6.74949L17.3417 13.5588C17.7082 13.9355 17.7082 14.5354 17.3417 14.9121Z"
                fill="#9797AF"
              />
            </svg>
          </button>
        </div>
        <div className="cart__items-wrap">
          {isLoading && <p>Товары загружаются...</p>}
          {!isLoading &&
            cartItems.length > 0 &&
            cartItems.map((item) => (
              <CartItem itemData={item} key={item.idNum} />
            ))}
        </div>
        <MissingItems />
      </div>
    </section>
  );
}
