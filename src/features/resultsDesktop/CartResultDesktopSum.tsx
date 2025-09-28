import { useCartItems, useCartItemsTotals } from "../cartItems/hooks";
import { formatPrice, quantityFormatting } from "../../utils/formatting";

export default function CartResultDesktopSum() {
  const cartItems = useCartItems("only-selected");

  const { totalCost, totalQuant, fullCost, currency } =
    useCartItemsTotals(cartItems);
  const totalDiscount = fullCost - totalCost;

  return (
    <>
      <div className="result__title-wrap">
        <span className="result__title headline2">Итого</span>
        <span className="result__total-price headline2">
          <span className="result__total-price-value items-result-cost">
            {formatPrice(totalCost, "largeSpace")}
          </span>
          <span className="headline2 headline2--sm-htmlFor-desktop current-currency">
            &nbsp;{currency}
          </span>
        </span>
      </div>
      <div className="result__goods">
        <span className="body-text body-text items-result-quantity">
          {quantityFormatting(totalQuant)}
        </span>
        <span className="body-text body-text">
          <span className="items-result-full">
            {" "}
            {formatPrice(fullCost, "largeSpace")}
          </span>
          <span className="current-currency">&nbsp;{currency}</span>
        </span>
      </div>
      <div className="result__discount">
        <span className="body-text body-text">Скидка</span>
        <span className="body-text body-text">
          <span className="items-result-discount">
            {" "}
            {"−" + formatPrice(totalDiscount).toString()}
          </span>
          <span className="current-currency">&nbsp;{currency}</span>
        </span>
      </div>
      <div className="result__delivery">
        <span className="body-text body-text">Доставка</span>
        <span className="body-text body-text delivery-cost">Бесплатно</span>
      </div>
    </>
  );
}
