export default function CartResultDesktopPayment() {
  return (
    <>
      <div className="payment result__payment">
        <div className="container">
          <div className="payment__title-wrap">
            <p className="payment__title result__payment-title headline3">
              Оплата картой
            </p>
            <button className="payment__change-btn change-btn" type="button">
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
          <div className="payment__card result__payment-card">
            <div className="payment__card-syst">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 30 10"
                fill="none"
              >
                <path
                  d="M16.6813 2.17708L14.8645 6.09161H14.6806V1.33362H12.0852V9.3357H14.2372C14.8212 9.3357 15.3403 9.00048 15.589 8.48142L17.4166 4.57771H17.6005V9.3357H20.1959V1.33362H18.0114C17.4491 1.33362 16.9192 1.66884 16.6813 2.17708Z"
                  fill="#319B42"
                />
                <path
                  d="M6.97243 2.38254L5.90182 6.09161H5.71798L4.63656 2.38254C4.45271 1.75535 3.87956 1.33362 3.2307 1.33362H0.667725V9.3357H3.26315V4.57771H3.44699L4.93935 9.3357H6.66963L8.162 4.57771H8.34584V9.3357H10.9413V1.33362H8.37829C7.72943 1.33362 7.14546 1.75535 6.97243 2.38254Z"
                  fill="#319B42"
                />
                <path
                  d="M21.3244 4.9007V9.3357H23.9207V6.7396H26.7116C27.9232 6.7396 28.9509 5.97159 29.3295 4.9007H21.3244Z"
                  fill="#319B42"
                />
                <path
                  d="M26.6358 1.33362H20.8591C21.2161 3.23742 22.882 4.57874 24.8833 4.57874H29.3727C29.4051 4.40567 29.4267 4.21096 29.4267 4.01625C29.4267 2.46941 28.1827 1.33362 26.6358 1.33362Z"
                  fill="url(#paint0_linear_13_254)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_13_255"
                    x1="20.8591"
                    y1="2.95618"
                    x2="29.4267"
                    y2="2.95618"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00A3E1" />
                    <stop offset="0.3042" stopColor="#009ADD" />
                    <stop offset="0.7987" stopColor="#0082D4" />
                    <stop offset="1" stopColor="#0076CF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="payment__card-number body-text body-text--sm-htmlFor-desktop">
              1234 56•• •••• 1234
            </span>
            <span className="payment__card-date result__payment-card-date body-text">
              01/30
            </span>
          </div>
          <p className="payment__descr result__payment-descr caption caption--gray">
            Спишем оплату с карты при получении
          </p>
        </div>
      </div>
      <div className="result__pay-option pay-option">
        <div className="pay-option__instant-pay custom-checkbox">
          <input
            className="custom-checkbox__input pay-option__instant-pay-input"
            name="instant-pay"
            type="checkbox"
            id="instant-pay-desktop"
            value="checked"
          />
          <label
            className="pay-option__instant-pay-label custom-checkbox__label caption"
            htmlFor="instant-pay-desktop"
          >
            <span className="pay-option__instant-pay-checkbox custom-checkbox__checkbox custom-checkbox__checkbox--transparent"></span>
            Списать оплату сразу
          </label>
        </div>
        <p className="caption pay-option__descr">
          Спишем оплату с карты при получении
        </p>
      </div>
    </>
  );
}
