import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatting";
import { RootState } from "../../store/store";
import { useCartItemData } from "./hooks";

interface CartItemPriceProps {
  itemId: number;
}

export default function CartItemPrice({ itemId }: CartItemPriceProps) {
  const itemData = useCartItemData(itemId);
  const userCart = useSelector((state: RootState) => state.cart);
  const quantity = userCart.find((item) => item.idNum === itemId)?.quant || 1;

  let discPriceVal = "";
  let fullPriceVal = "";

  if (itemData) {
    discPriceVal = formatPrice(
      itemData.discPrice.value * quantity,
      "smallSpace",
      3
    );
    fullPriceVal = formatPrice(
      itemData.fullPrice.value * quantity,
      "smallSpace",
      6
    );
  }

  return (
    <div className="cart-item__price">
      <div className="cart-item__price-discount-wrap headline3 headline3--lg">
        <span
          className="cart-item__price-discount-value"
          id={`cart-item${itemId.toString()}-disc-price`}
        >
          {discPriceVal}
        </span>
        <span
          className="headline3"
          id={`cart-item${itemId.toString()}-disc-cur`}
        >
          &nbsp;{itemData?.discPrice.currency}
        </span>
      </div>
      <div
        className="cart-item__price-full-wrap caption caption--gray"
        data-id={itemId.toString()}
      >
        <span
          className="cart-item__price-full-value"
          id={`cart-item${itemId.toString()}-full-price`}
        >
          {fullPriceVal}
        </span>
        <span id={`cart-item${itemId.toString()}-full-cur`}>
          &nbsp;{itemData?.fullPrice.currency}
        </span>
        <div className="cart-item__price-tooltip tooltip">
          <div className="cart-item__price-itemDisc">
            <span className="cart-item__price-itemDisc-info caption caption--gray">
              <span className="cart-item__price-itemDisc-descr">Скидка</span>
              <span className="cart-item__price-itemDisc-perc"></span>
            </span>
            <span className="cart-item__price-itemDisc-amount caption">
              <span className="cart-item__price-itemDisc-val"></span>
              <span className="cart-item__price-itemDisc-cur"></span>
            </span>
          </div>
          <div className="cart-item__price-userDisc">
            <span className="cart-item__price-userDisc-info caption caption--gray">
              <span className="cart-item__price-userDisc-descr">
                Скидка покупателя
              </span>
              <span className="cart-item__price-userDisc-perc"></span>
            </span>
            <span className="cart-item__price-userDisc-amount caption">
              <span className="cart-item__price-userDisc-val"></span>
              <span className="cart-item__price-userDisc-cur"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
