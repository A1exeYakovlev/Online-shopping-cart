import { CartItemData } from "../../shared.types";

interface CartItemPriceProps {
  itemData: CartItemData;
}

export default function CartItemPrice({ itemData }: CartItemPriceProps) {
  return (
    <div className="cart-item__price">
      <div className="cart-item__price-discount-wrap headline3 headline3--lg">
        <span
          className="cart-item__price-discount-value"
          id={`cart-item${itemData.idNum.toString()}-disc-price`}
        >
          {itemData.discPrice.value}
        </span>
        <span
          className="headline3"
          id={`cart-item${itemData.idNum.toString()}-disc-cur`}
        >
          &nbsp;{itemData.discPrice.currency}
        </span>
      </div>
      <div
        className="cart-item__price-full-wrap caption caption--gray"
        data-id={itemData.idNum.toString()}
      >
        <span
          className="cart-item__price-full-value"
          id={`cart-item${itemData.idNum.toString()}-full-price`}
        >
          {itemData.fullPrice.value}
        </span>
        <span id={`cart-item${itemData.idNum.toString()}-full-cur`}>
          &nbsp;{itemData.fullPrice.currency}
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
