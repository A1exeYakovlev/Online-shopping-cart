export default function CartResultDesktopDelivery() {
  return (
    <>
      <div className="result__delivery-point">
        <p className="result__delivery-type headline3">
          Доставка в пункт выдачи
        </p>
        <button className="delivery-change-btn change-btn" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1585 3.05991L16.9401 6.84154L6.72705 17.0546L2.73544 17.8529C2.38557 17.9229 2.07711 17.6144 2.14709 17.2646L2.94541 13.273L13.1585 3.05991ZM4.17707 13.9321L13.1585 4.95072L15.0493 6.84154L6.06789 15.8229L3.70436 16.2956L4.17707 13.9321Z"
              fill="#CB11AB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9948 7.78715L12.2132 4.00552L13.6313 2.5874C14.4145 1.8042 15.6843 1.8042 16.4675 2.5874L17.4129 3.53281C18.1961 4.31601 18.1961 5.58584 17.4129 6.36904L15.9948 7.78715ZM16.4675 5.42363C16.7286 5.16256 16.7286 4.73929 16.4675 4.47822L15.5221 3.53281C15.261 3.27174 14.8378 3.27174 14.5767 3.53281L14.104 4.00552L15.9948 5.89634L16.4675 5.42363Z"
              fill="#CB11AB"
            />
          </svg>
        </button>
      </div>
      <p className="result__delivery-address delivery-address caption">
        Бишкек, улица Ахматбека Суюмбаева, 12/1
      </p>
      <a
        href="#delivery-section"
        className="result__date caption caption--magenta"
      >
        5–8 фев
      </a>
      <p className="result__refuse-descr refuse-descr refuse-descr--smoky-bg caption">
        Обратная доставка товаров на&nbsp;склад при отказе&nbsp;&mdash;&thinsp;
        <span className="refuse-descr__tooltip-trigger caption caption--green">
          бесплатно
        </span>
      </p>
    </>
  );
}
