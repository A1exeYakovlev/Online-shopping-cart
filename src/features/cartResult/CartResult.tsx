export default function CartResult() {
  return (
    <section className="cart__result result">
      <div className="container">
        <div className="result__title-wrap">
          <span className="result__title headline2">Итого</span>
          <span className="result__total-price headline2">
            <span className="result__total-price-value items-result-cost">
              2 101 063
            </span>
            <span className="headline2 headline2--sm-htmlFor-desktop current-currency">
              &nbsp;сом
            </span>
          </span>
        </div>
        <div className="result__goods">
          <span className="body-text body-text items-result-quantity">
            203 товара
          </span>
          <span className="body-text body-text">
            <span className="items-result-full">2 302 048</span>
            <span className="current-currency">&nbsp;сом</span>
          </span>
        </div>
        <div className="result__discount">
          <span className="body-text body-text">Скидка</span>
          <span className="body-text body-text">
            <span className="items-result-discount">−200 985</span>
            <span className="current-currency">&nbsp;сом</span>
          </span>
        </div>
        <div className="result__delivery">
          <span className="body-text body-text">Доставка</span>
          <span className="body-text body-text delivery-cost">Бесплатно</span>
        </div>
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
        <button
          className="result__order-btn brand-button headline3 headline3--white"
          type="submit"
          form="receiver-form"
        >
          Заказать
        </button>
        <p className="result__terms caption">
          Соглашаюсь с&nbsp;правилами пользования торговой площадкой
          и&nbsp;возврата
        </p>
      </div>
    </section>
  );
}
