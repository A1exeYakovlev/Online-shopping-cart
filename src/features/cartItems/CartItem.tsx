export default function CartItem() {
  return (
    <>
      <div className="cart-item cart__cart-item" id="cart-item1">
        <div className="cart-item__pic">
          <div className="cart-item__select custom-checkbox">
            <input
              className="custom-checkbox__input cart-item__select-input"
              checked
              data-item="1"
              name="selectItem1"
              type="checkbox"
              id="selectItem1"
              value="selected"
            />
            <label
              className="cart-item__select-label custom-checkbox__label"
              htmlFor="selectItem1"
            >
              <span className="custom-checkbox__checkbox cart-item__select-checkbox"></span>
            </label>
          </div>
          <img
            src="img/cart__item1_1x.jpg"
            alt="Футболка мужская"
            srcSet="
                img/cart__item1_1x.jpg 1x,
                img/cart__item1_2x.jpg 2x,
                img/cart__item1_3x.jpg 3x,
                img/cart__item1_4x.jpg 4x
              "
          />
          <div className="cart-item__pic-property body-text2">56</div>
        </div>
        <div className="cart-item__price">
          <div className="cart-item__price-discount-wrap headline3 headline3--lg">
            <span
              className="cart-item__price-discount-value"
              id="cart-item1-disc-price"
            >
              522
            </span>
            <span className="headline3" id="cart-item1-disc-cur">
              &nbsp;сом
            </span>
          </div>
          <div
            className="cart-item__price-full-wrap caption caption--gray"
            data-id="1"
          >
            <span
              className="cart-item__price-full-value"
              id="cart-item1-full-price"
            >
              1051
            </span>
            <span id="cart-item1-full-cur">&nbsp;сом</span>
            <div className="cart-item__price-tooltip tooltip">
              <div className="cart-item__price-itemDisc">
                <span className="cart-item__price-itemDisc-info caption caption--gray">
                  <span className="cart-item__price-itemDisc-descr">
                    Скидка
                  </span>
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
        <p className="cart-item__name body-text2">Футболка UZcotton мужская</p>
        <div className="cart-item__properties caption">
          <p className="cart-item__properties-color">
            Цвет: <span>белый</span>
          </p>
          <p className="cart-item__properties-size">
            Размер: <span>56</span>
          </p>
        </div>
        <p className="cart-item__storage caption caption--gray">Коледино WB</p>
        <div className="cart-item__seller">
          <p className="cart-item__seller-name caption caption--gray">
            OOO Вайлдберриз
          </p>
          <div className="cart-item__seller-btn-wrap">
            <button
              className="cart-item__seller-tooltip-btn"
              type="button"
              data-seller="1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="7.5" stroke="#9797AF" />
                <path
                  d="M9.88867 7.58691C9.62826 7.58691 9.41504 7.51042 9.24902 7.35742C9.08301 7.20117 9 7.01074 9 6.78613C9 6.55501 9.08301 6.36621 9.24902 6.21973C9.41504 6.07324 9.62826 6 9.88867 6C10.1523 6 10.3656 6.07324 10.5283 6.21973C10.6943 6.36621 10.7773 6.55501 10.7773 6.78613C10.7773 7.02051 10.6943 7.21257 10.5283 7.3623C10.3656 7.51204 10.1523 7.58691 9.88867 7.58691ZM10.6504 13.3779H9.10742V8.37793H10.6504V13.3779Z"
                  fill="#9797AF"
                />
              </svg>
            </button>
            <div className="cart-item__seller-tooltip tooltip">
              <p className="cart-item__seller-name caption6"></p>
              <p className="cart-item__seller-ogrn caption"></p>
              <p className="cart-item__seller-address caption"></p>
            </div>
          </div>
        </div>
        <div className="cart-item__management">
          <div className="cart-item__quantity">
            <button
              className="cart-item__minus-btn body-text3"
              type="button"
              data-item="1"
            >
              −
            </button>
            <input
              className="cart-item__quantity-number body-text2"
              type="number"
              data-item="1"
              id="cart-item1-quantity"
              value="1"
            />
            <button
              className="cart-item__plus-btn body-text3"
              type="button"
              data-item="1"
            >
              +
            </button>
          </div>
          <p
            className="cart-item__remains caption caption--coral"
            data-item="1"
            id="cart-item1-remains"
          >
            Осталось 2 шт.
          </p>
          <div className="cart-item__buttons">
            <button
              className="cart-item__buttons-favourite"
              type="button"
              data-id="1"
            >
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
                  d="M3.03386 4.05857C2.2658 4.75224 1.76675 5.83284 1.99484 7.42928C2.22323 9.02783 3.26485 10.6852 4.80427 12.3478C6.25856 13.9184 8.10953 15.4437 9.99986 16.874C11.8902 15.4437 13.7412 13.9184 15.1955 12.3478C16.7349 10.6852 17.7765 9.02783 18.0049 7.4293C18.2329 5.83285 17.7339 4.75224 16.9658 4.05856C16.1765 3.34572 15.0549 3 13.9999 3C12.1318 3 11.0922 4.08479 10.5176 4.68443C10.458 4.7466 10.4034 4.80356 10.3534 4.85355C10.1582 5.04882 9.84157 5.04882 9.64631 4.85355C9.59632 4.80356 9.54173 4.7466 9.48215 4.68443C8.90748 4.08479 7.86788 3 5.99986 3C4.94486 3 3.82316 3.34573 3.03386 4.05857ZM2.36361 3.31643C3.3736 2.40427 4.75192 2 5.99986 2C8.07114 2 9.3453 3.11257 9.99986 3.77862C10.6544 3.11257 11.9286 2 13.9999 2C15.2478 2 16.6261 2.40428 17.6361 3.31644C18.6673 4.24776 19.2668 5.66715 18.9948 7.5707C18.7232 9.47217 17.5148 11.3148 15.9293 13.0272C14.3354 14.7486 12.3063 16.3952 10.2999 17.9C10.1221 18.0333 9.87764 18.0333 9.69986 17.9C7.69344 16.3952 5.66434 14.7485 4.0705 13.0272C2.48494 11.3148 1.27656 9.47217 1.00489 7.57072C0.732921 5.66716 1.3324 4.24776 2.36361 3.31643Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              className="cart-item__buttons-delete"
              type="button"
              data-id="1"
            >
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
                  d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="cart-item cart__cart-item multiline-name empty-pic-property empty-remains"
        id="cart-item2"
      >
        <div className="cart-item__pic">
          <div className="cart-item__select custom-checkbox">
            <input
              className="custom-checkbox__input cart-item__select-input"
              checked
              data-item="2"
              name="selectItem2"
              type="checkbox"
              id="selectItem2"
              value="selected"
            />
            <label
              className="cart-item__select-label custom-checkbox__label"
              htmlFor="selectItem2"
            >
              <span className="custom-checkbox__checkbox cart-item__select-checkbox"></span>
            </label>
          </div>
          <img
            src="img/cart__item2_1x.jpg"
            alt="Силиконовый чехол для iPhone"
            srcSet="
                img/cart__item2_1x.jpg 1x,
                img/cart__item2_2x.jpg 2x,
                img/cart__item2_3x.jpg 3x,
                img/cart__item2_4x.jpg 4x
              "
          />
          <div className="cart-item__pic-property body-text2"></div>
        </div>
        <div className="cart-item__price">
          <div className="cart-item__price-discount-wrap headline3">
            <span
              className="cart-item__price-discount-value"
              id="cart-item2-disc-price"
            >
              2 100 047
            </span>
            <span className="headline3" id="cart-item2-disc-cur">
              &nbsp;сом
            </span>
          </div>
          <div
            className="cart-item__price-full-wrap caption caption--gray"
            data-id="2"
          >
            <span
              className="cart-item__price-full-value"
              id="cart-item2-full-price"
            >
              2 300 047
            </span>
            <span id="cart-item2-full-cur">&nbsp;сом</span>
            <div className="cart-item__price-tooltip tooltip">
              <div className="cart-item__price-itemDisc">
                <span className="cart-item__price-itemDisc-info caption caption--gray">
                  <span className="cart-item__price-itemDisc-descr">
                    Скидка
                  </span>
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
        <p className="cart-item__name body-text2">
          Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс
          бампер на Apple iPhone XR, MobiSafe
        </p>
        <div className="cart-item__properties caption">
          <p className="cart-item__properties-color">
            Цвет: <span>прозрачный</span>
          </p>
          <p className="cart-item__properties-size"></p>
        </div>
        <p className="cart-item__storage caption caption--gray">Коледино WB</p>
        <div className="cart-item__seller">
          <p className="cart-item__seller-name caption caption--gray">
            OOO Мегапрофстиль
          </p>
          <div className="cart-item__seller-btn-wrap">
            <button
              className="cart-item__seller-tooltip-btn"
              type="button"
              data-seller="345"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="7.5" stroke="#9797AF" />
                <path
                  d="M9.88867 7.58691C9.62826 7.58691 9.41504 7.51042 9.24902 7.35742C9.08301 7.20117 9 7.01074 9 6.78613C9 6.55501 9.08301 6.36621 9.24902 6.21973C9.41504 6.07324 9.62826 6 9.88867 6C10.1523 6 10.3656 6.07324 10.5283 6.21973C10.6943 6.36621 10.7773 6.55501 10.7773 6.78613C10.7773 7.02051 10.6943 7.21257 10.5283 7.3623C10.3656 7.51204 10.1523 7.58691 9.88867 7.58691ZM10.6504 13.3779H9.10742V8.37793H10.6504V13.3779Z"
                  fill="#9797AF"
                />
              </svg>
            </button>
            <div className="cart-item__seller-tooltip tooltip">
              <p className="cart-item__seller-name caption6"></p>
              <p className="cart-item__seller-ogrn caption"></p>
              <p className="cart-item__seller-address caption"></p>
            </div>
          </div>
        </div>
        <div className="cart-item__management">
          <div className="cart-item__quantity">
            <button
              className="cart-item__minus-btn body-text3"
              type="button"
              data-item="2"
            >
              −
            </button>
            <input
              className="cart-item__quantity-number body-text2"
              type="number"
              data-item="2"
              id="cart-item2-quantity"
              value="1"
            />
            <button
              className="cart-item__plus-btn body-text3"
              type="button"
              data-item="2"
            >
              +
            </button>
          </div>
          <p
            className="cart-item__remains caption caption--coral"
            data-item="2"
            id="cart-item2-remains"
          ></p>
          <div className="cart-item__buttons">
            <button
              className="cart-item__buttons-favourite"
              type="button"
              data-id="2"
            >
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
                  d="M3.03386 4.05857C2.2658 4.75224 1.76675 5.83284 1.99484 7.42928C2.22323 9.02783 3.26485 10.6852 4.80427 12.3478C6.25856 13.9184 8.10953 15.4437 9.99986 16.874C11.8902 15.4437 13.7412 13.9184 15.1955 12.3478C16.7349 10.6852 17.7765 9.02783 18.0049 7.4293C18.2329 5.83285 17.7339 4.75224 16.9658 4.05856C16.1765 3.34572 15.0549 3 13.9999 3C12.1318 3 11.0922 4.08479 10.5176 4.68443C10.458 4.7466 10.4034 4.80356 10.3534 4.85355C10.1582 5.04882 9.84157 5.04882 9.64631 4.85355C9.59632 4.80356 9.54173 4.7466 9.48215 4.68443C8.90748 4.08479 7.86788 3 5.99986 3C4.94486 3 3.82316 3.34573 3.03386 4.05857ZM2.36361 3.31643C3.3736 2.40427 4.75192 2 5.99986 2C8.07114 2 9.3453 3.11257 9.99986 3.77862C10.6544 3.11257 11.9286 2 13.9999 2C15.2478 2 16.6261 2.40428 17.6361 3.31644C18.6673 4.24776 19.2668 5.66715 18.9948 7.5707C18.7232 9.47217 17.5148 11.3148 15.9293 13.0272C14.3354 14.7486 12.3063 16.3952 10.2999 17.9C10.1221 18.0333 9.87764 18.0333 9.69986 17.9C7.69344 16.3952 5.66434 14.7485 4.0705 13.0272C2.48494 11.3148 1.27656 9.47217 1.00489 7.57072C0.732921 5.66716 1.3324 4.24776 2.36361 3.31643Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              className="cart-item__buttons-delete"
              type="button"
              data-id="2"
            >
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
                  d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="cart-item cart__cart-item multiline-name empty-properties empty-pic-property"
        id="cart-item3"
      >
        <div className="cart-item__pic">
          <div className="cart-item__select custom-checkbox">
            <input
              className="custom-checkbox__input cart-item__select-input"
              checked
              data-item="3"
              name="selectItem3"
              type="checkbox"
              id="selectItem3"
              value="selected"
            />
            <label
              className="cart-item__select-label custom-checkbox__label"
              htmlFor="selectItem3"
            >
              <span className="custom-checkbox__checkbox cart-item__select-checkbox"></span>
            </label>
          </div>
          <img
            src="img/cart__item3_1x.jpg"
            alt="Набор цветных карандашей"
            srcSet="
                img/cart__item3_1x.jpg 1x,
                img/cart__item3_2x.jpg 2x,
                img/cart__item3_3x.jpg 3x,
                img/cart__item3_4x.jpg 4x
              "
          />
          <div className="cart-item__pic-property body-text2"></div>
        </div>
        <div className="cart-item__price">
          <div className="cart-item__price-discount-wrap headline3 headline3--lg">
            <span
              className="cart-item__price-discount-value"
              id="cart-item3-disc-price"
            >
              494
            </span>
            <span className="headline3" id="cart-item3-disc-cur">
              &nbsp;сом
            </span>
          </div>
          <div
            className="cart-item__price-full-wrap caption caption--gray"
            data-id="3"
          >
            <span
              className="cart-item__price-full-value"
              id="cart-item3-full-price"
            >
              950
            </span>
            <span id="cart-item3-full-cur">&nbsp;сом</span>
            <div className="cart-item__price-tooltip tooltip">
              <div className="cart-item__price-itemDisc">
                <span className="cart-item__price-itemDisc-info caption caption--gray">
                  <span className="cart-item__price-itemDisc-descr">
                    Скидка
                  </span>
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
        <p className="cart-item__name body-text2">
          Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные,
          шестигранные, Faber-Castell
        </p>
        <div className="cart-item__properties caption">
          <p className="cart-item__properties-color"></p>
          <p className="cart-item__properties-size"></p>
        </div>
        <p className="cart-item__storage caption caption--gray">Коледино WB</p>
        <div className="cart-item__seller">
          <p className="cart-item__seller-name caption caption--gray">
            OOO Вайлдберриз
          </p>
          <div className="cart-item__seller-btn-wrap">
            <button
              className="cart-item__seller-tooltip-btn"
              type="button"
              data-seller="1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="7.5" stroke="#9797AF" />
                <path
                  d="M9.88867 7.58691C9.62826 7.58691 9.41504 7.51042 9.24902 7.35742C9.08301 7.20117 9 7.01074 9 6.78613C9 6.55501 9.08301 6.36621 9.24902 6.21973C9.41504 6.07324 9.62826 6 9.88867 6C10.1523 6 10.3656 6.07324 10.5283 6.21973C10.6943 6.36621 10.7773 6.55501 10.7773 6.78613C10.7773 7.02051 10.6943 7.21257 10.5283 7.3623C10.3656 7.51204 10.1523 7.58691 9.88867 7.58691ZM10.6504 13.3779H9.10742V8.37793H10.6504V13.3779Z"
                  fill="#9797AF"
                />
              </svg>
            </button>
            <div className="cart-item__seller-tooltip tooltip">
              <p className="cart-item__seller-name caption6"></p>
              <p className="cart-item__seller-ogrn caption"></p>
              <p className="cart-item__seller-address caption"></p>
            </div>
          </div>
        </div>
        <div className="cart-item__management">
          <div className="cart-item__quantity">
            <button
              className="cart-item__minus-btn body-text3"
              type="button"
              data-item="3"
            >
              −
            </button>
            <input
              className="cart-item__quantity-number body-text2"
              type="number"
              data-item="3"
              id="cart-item3-quantity"
              value="1"
            />
            <button
              className="cart-item__plus-btn body-text3"
              type="button"
              data-item="3"
            >
              +
            </button>
          </div>
          <p
            className="cart-item__remains caption caption--coral"
            data-item="3"
            id="cart-item3-remains"
          >
            Осталось 2 шт.
          </p>
          <div className="cart-item__buttons">
            <button
              className="cart-item__buttons-favourite"
              type="button"
              data-id="3"
            >
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
                  d="M3.03386 4.05857C2.2658 4.75224 1.76675 5.83284 1.99484 7.42928C2.22323 9.02783 3.26485 10.6852 4.80427 12.3478C6.25856 13.9184 8.10953 15.4437 9.99986 16.874C11.8902 15.4437 13.7412 13.9184 15.1955 12.3478C16.7349 10.6852 17.7765 9.02783 18.0049 7.4293C18.2329 5.83285 17.7339 4.75224 16.9658 4.05856C16.1765 3.34572 15.0549 3 13.9999 3C12.1318 3 11.0922 4.08479 10.5176 4.68443C10.458 4.7466 10.4034 4.80356 10.3534 4.85355C10.1582 5.04882 9.84157 5.04882 9.64631 4.85355C9.59632 4.80356 9.54173 4.7466 9.48215 4.68443C8.90748 4.08479 7.86788 3 5.99986 3C4.94486 3 3.82316 3.34573 3.03386 4.05857ZM2.36361 3.31643C3.3736 2.40427 4.75192 2 5.99986 2C8.07114 2 9.3453 3.11257 9.99986 3.77862C10.6544 3.11257 11.9286 2 13.9999 2C15.2478 2 16.6261 2.40428 17.6361 3.31644C18.6673 4.24776 19.2668 5.66715 18.9948 7.5707C18.7232 9.47217 17.5148 11.3148 15.9293 13.0272C14.3354 14.7486 12.3063 16.3952 10.2999 17.9C10.1221 18.0333 9.87764 18.0333 9.69986 17.9C7.69344 16.3952 5.66434 14.7485 4.0705 13.0272C2.48494 11.3148 1.27656 9.47217 1.00489 7.57072C0.732921 5.66716 1.3324 4.24776 2.36361 3.31643Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              className="cart-item__buttons-delete"
              type="button"
              data-id="3"
            >
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
                  d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
