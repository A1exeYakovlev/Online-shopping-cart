export default function CartResultDesktopSum() {
  return (
    <>
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
    </>
  );
}
