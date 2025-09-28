import CartResultTotals from "./CartResultTotals";
import OrderBtn from "../../ui/OrderBtn";
import TermsInfo from "../../ui/TermsInfo";

export default function CartResult() {
  return (
    <section className="cart__result result">
      <div className="container">
        <CartResultTotals />
        <p className="result__refuse-descr refuse-descr refuse-descr--smoky-dark-bg caption">
          Обратная доставка товаров на&nbsp;склад при
          отказе&nbsp;&mdash;&nbsp;&hairsp;
          <span className="refuse-descr__tooltip-trigger caption caption--green">
            бесплатно
          </span>
        </p>
        <div className="result__pay-option pay-option">
          <div className="pay-option__instant-pay custom-checkbox">
            <input
              className="custom-checkbox__input pay-option__instant-pay-input"
              name="instant-pay"
              type="checkbox"
              id="instant-pay-mobile"
              value="checked"
            />
            <label
              className="pay-option__instant-pay-label custom-checkbox__label caption"
              htmlFor="instant-pay-mobile"
            >
              <span className="pay-option__instant-pay-checkbox custom-checkbox__checkbox custom-checkbox__checkbox--transparent"></span>
              Списать оплату сразу
            </label>
          </div>
          <p className="caption pay-option__descr">
            Спишем оплату с карты при получении
          </p>
        </div>
        <OrderBtn />
        <TermsInfo />
      </div>
    </section>
  );
}
