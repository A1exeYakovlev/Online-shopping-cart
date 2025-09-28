import { useDispatch, useSelector } from "react-redux";
import { formatPrice, quantityFormatting } from "../../utils/formatting";
import { useCartItems, useCartItemsTotals } from "./hooks";
import { RootState } from "../../store";
import { selectAllItems } from "./cartSlice";
import { updateLocalStorageAllSelected } from "../../services/localStorageServices";

interface CartItemsTopSummaryProps {
  collapsedInStock: boolean;
  setCollapsibleStockHeight: React.Dispatch<
    React.SetStateAction<string | null>
  >;
  missingItemsQuantity: number;
  collapsibleStockEl: React.RefObject<HTMLDivElement | null>;
  cartItemsInStockQuantity: number;
}

export default function CartItemsTopSummary({
  collapsedInStock,
  setCollapsibleStockHeight,
  collapsibleStockEl,
  missingItemsQuantity,
  cartItemsInStockQuantity,
}: CartItemsTopSummaryProps) {
  const dispatch = useDispatch();
  const cartItems = useCartItems();
  const userCart = useSelector((state: RootState) => state.cart);

  const allSelected =
    cartItemsInStockQuantity > 0
      ? userCart.every((item) => item.selected)
      : false;

  const { totalCost, totalQuant, currency } = useCartItemsTotals(cartItems);

  function handleCollapse() {
    if (!collapsibleStockEl.current) return;
    if (collapsedInStock) {
      setCollapsibleStockHeight(
        collapsibleStockEl.current.scrollHeight.toString() + "px"
      );
    } else setCollapsibleStockHeight("0px");
  }

  function handleAllSelected() {
    updateLocalStorageAllSelected(!allSelected);
    dispatch(selectAllItems(!allSelected));
  }

  return (
    <div
      className={`cart__items-top ${collapsedInStock ? "show-summary" : ""}`}
      style={{
        marginBottom: missingItemsQuantity === 0 ? "4.3rem" : "",
      }}
    >
      <div className="cart__items-summary headline4">
        <span className="items-top-quantity">
          {quantityFormatting(totalQuant)}
        </span>
        {` · `}
        <span id="items-top-sum">{formatPrice(totalCost, "largeSpace")}</span>
        <span className="current-currency">&nbsp;{currency}</span>
      </div>
      <div className="cart__selectAll custom-checkbox">
        <input
          className="custom-checkbox__input cart__selectAll-input cart-item__select-input"
          checked={allSelected}
          disabled={cartItemsInStockQuantity === 0}
          data-item="all"
          name="selectAll"
          type="checkbox"
          id="selectAll"
          value="all selected"
          onChange={handleAllSelected}
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
        className={`cart__collapse-btn collapse-btn ${
          collapsedInStock ? "collapse-btn--closed" : ""
        }`}
        type="button"
        onClick={handleCollapse}
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
  );
}
