export default function CartDelivery() {
  return (
    <section className="delivery pickpoint-selected" id="delivery-section">
      <div className="container">
        <div className="delivery__title-wrap">
          <h2 className="delivery__title headline2">Способ доставки</h2>
          <button
            className="delivery-change-btn change-btn headline3 headline3--magenta"
            type="button"
          >
            Изменить
          </button>
        </div>
        <div className="delivery__delivery-point">
          <p className="delivery__delivery-type headline4">Пункт выдачи</p>
          <div className="delivery__delivery-point-info">
            <p className="body-text delivery-address">
              Бишкек, улица Ахматбека Суюмбаева, 12/1
            </p>
            <p className="delivery__schedule-wrap caption">
              <span className="delivery__pickpoint-rating">4.99</span>
              <span className="delivery__schedule">Ежедневно с 10 до 21</span>
            </p>
          </div>
        </div>
        <div className="delivery__cost-wrap">
          <p className="headline4">Стоимость доставки</p>
          <p className="body-text delivery-cost">Бесплатно</p>
        </div>
        <div className="delivery__date-wrap">
          <div className="delivery__date">
            <p className="headline4">5—6 февраля</p>
            <div className="delivery__items-wrap">
              <div className="delivery__item">
                <img
                  src="img/cart__item1_05x.jpg"
                  alt="Футболка мужская"
                  srcSet="
          img/cart__item1_05x.jpg 1x,
          img/cart__item1_1x.jpg  2x,
          img/cart__item1_2x.jpg  3x,
          img/cart__item1_3x.jpg  4x
        "
                />
                <div className="delivery__item-quantity badge-count caption2"></div>
              </div>
              <div className="delivery__item">
                <img
                  src="img/cart__item2_05x.jpg"
                  alt="Силиконовый чехол для iPhone"
                  srcSet="
          img/cart__item2_05x.jpg 1x,
          img/cart__item2_1x.jpg  2x,
          img/cart__item2_2x.jpg  3x,
          img/cart__item2_3x.jpg  4x
        "
                />
                <div className="delivery__item-quantity badge-count badge-count--3digit caption2">
                  184
                </div>
              </div>
              <div className="delivery__item">
                <img
                  src="img/cart__item3_05x.jpg"
                  alt="Набор цветных карандашей"
                  srcSet="
          img/cart__item3_05x.jpg 1x,
          img/cart__item3_1x.jpg  2x,
          img/cart__item3_2x.jpg  3x,
          img/cart__item3_3x.jpg  4x
        "
                />
                <div className="delivery__item-quantity badge-count badge-count--1digit caption2">
                  2
                </div>
              </div>
            </div>
          </div>
          <div className="delivery__date">
            <p className="headline4">7—8 февраля</p>
            <div className="delivery__items-wrap">
              <div className="delivery__item">
                <img
                  src="img/cart__item2_05x.jpg"
                  alt="Силиконовый чехол для iPhone"
                  srcSet="
          img/cart__item2_05x.jpg 1x,
          img/cart__item2_1x.jpg  2x,
          img/cart__item2_2x.jpg  3x,
          img/cart__item2_3x.jpg  4x
        "
                />
                <div className="delivery__item-quantity badge-count badge-count--2digit caption2">
                  16
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="delivery__refuse-descr refuse-descr caption">
          Обратная доставка товаров на&nbsp;склад при
          отказе&nbsp;&mdash;&nbsp;&hairsp;
          <span className="refuse-descr__tooltip-trigger caption caption--green">
            бесплатно
          </span>
        </p>
      </div>
      <div className="change-delivery modal-window hidden pickpoint-tab">
        <div className="change-delivery__inner modal-window__inner">
          <div className="change-delivery__title-wrap modal-window__title-wrap">
            <h3 className="change-delivery__title modal-window__title headline2 headline2--sbold-htmlFor-mobile headline2--sm-htmlFor-desktop">
              Способ доставки
            </h3>
            <button
              className="change-delivery__close-btn modal-window__close-btn"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.92888 17.6569C4.53836 18.0474 4.53836 18.6806 4.92888 19.0711C5.3194 19.4616 5.95257 19.4616 6.34309 19.0711L12 13.4143L17.6568 19.0711C18.0473 19.4616 18.6805 19.4616 19.071 19.0711C19.4615 18.6806 19.4615 18.0474 19.071 17.6569L13.4142 12L19.071 6.3432C19.4615 5.95268 19.4615 5.31951 19.071 4.92899C18.6805 4.53846 18.0473 4.53846 17.6568 4.92899L12 10.5858L6.3431 4.92899C5.95258 4.53846 5.31941 4.53846 4.92889 4.92899C4.53837 5.31951 4.53837 5.95268 4.92889 6.3432L10.5857 12L4.92888 17.6569Z"
                  fill="#A0A0A4"
                />
              </svg>
            </button>
          </div>
          <div className="change-delivery__tabs">
            <button
              className="change-delivery__tab-pickpoint caption6 change-delivery__tab"
              type="button"
              data-tab="pickpoint"
            >
              В пункт выдачи
            </button>
            <button
              className="change-delivery__tab-courier caption6 change-delivery__tab"
              type="button"
              data-tab="courier"
            >
              Курьером
            </button>
          </div>
          <p className="change-delivery__descr caption6">Мои адреса</p>
          <div className="change-delivery__pickpoint-wrap">
            <form action="">
              <fieldset>
                <ul className="change-delivery__options-list">
                  <li
                    className="change-delivery__option custom-radio"
                    data-option="11"
                  >
                    <div className="change-delivery__option-wrap">
                      <div className="change-delivery__option-pickpoint">
                        <div className="change-delivery__option-address">
                          <input
                            className="change-delivery__option-input custom-radio__input"
                            data-id="11"
                            name="delivery-pickpoint-option"
                            type="radio"
                            value="11"
                            id="change-delivery__pickpoint1"
                            checked
                          />
                          <label
                            className="change-delivery__option-label body-text custom-radio__label"
                            htmlFor="change-delivery__pickpoint1"
                          >
                            <span className="change-delivery__option-radio custom-radio__radio-btn"></span>
                            г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д.
                            67/1
                          </label>
                        </div>
                        <p className="change-delivery__option-rating caption caption--gray">
                          <span className="change-delivery__option-rating-num"></span>
                          <span className="change-delivery__option-rating-label">
                            Пункт выдачи
                          </span>
                        </p>
                      </div>
                      <button
                        className="change-delivery__option-delete-btn"
                        type="button"
                        data-option="11"
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
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                            fill="#A0A0A4"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                  <li
                    className="change-delivery__option custom-radio"
                    data-option="2"
                  >
                    <div className="change-delivery__option-wrap">
                      <div className="change-delivery__option-pickpoint">
                        <div className="change-delivery__option-address">
                          <input
                            className="change-delivery__option-input custom-radio__input"
                            data-id="2"
                            name="delivery-pickpoint-option"
                            type="radio"
                            value="2"
                            id="change-delivery__pickpoint2"
                          />
                          <label
                            className="change-delivery__option-label body-text custom-radio__label"
                            htmlFor="change-delivery__pickpoint2"
                          >
                            <span className="change-delivery__option-radio custom-radio__radio-btn"></span>
                            г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д.
                            67/1
                          </label>
                        </div>
                        <p className="change-delivery__option-rating caption caption--gray">
                          <span className="change-delivery__option-rating-num">
                            4.99
                          </span>
                          <span className="change-delivery__option-rating-label">
                            Пункт выдачи
                          </span>
                        </p>
                      </div>
                      <button
                        className="change-delivery__option-delete-btn"
                        type="button"
                        data-option="2"
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
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                            fill="#A0A0A4"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                  <li
                    className="change-delivery__option custom-radio"
                    data-option="154"
                  >
                    <div className="change-delivery__option-wrap">
                      <div className="change-delivery__option-pickpoint">
                        <div className="change-delivery__option-address">
                          <input
                            className="change-delivery__option-input custom-radio__input"
                            data-id="154"
                            name="delivery-pickpoint-option"
                            type="radio"
                            value="154"
                            id="change-delivery__pickpoint3"
                          />
                          <label
                            className="change-delivery__option-label body-text custom-radio__label"
                            htmlFor="change-delivery__pickpoint3"
                          >
                            <span className="change-delivery__option-radio custom-radio__radio-btn"></span>
                            г. Бишкек, улица Табышалиева, д. 57
                          </label>
                        </div>
                        <p className="change-delivery__option-rating caption caption--gray">
                          <span className="change-delivery__option-rating-num">
                            4.99
                          </span>
                          <span className="change-delivery__option-rating-label">
                            Пункт выдачи
                          </span>
                        </p>
                      </div>
                      <button
                        className="change-delivery__option-delete-btn"
                        type="button"
                        data-option="154"
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
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                            fill="#A0A0A4"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>
              </fieldset>
              <button
                className="change-delivery__select-btn modal-window__select-btn brand-button headline3 headline3--white"
                type="submit"
                data-tab="pickpoint"
              >
                Выбрать
              </button>
            </form>
          </div>
          <div className="change-delivery__courier-wrap">
            <form action="">
              <fieldset>
                <ul className="change-delivery__options-list">
                  <li
                    className="change-delivery__option custom-radio"
                    data-option="1"
                  >
                    <div className="change-delivery__option-wrap">
                      <input
                        className="change-delivery__option-input custom-radio__input"
                        name="delivery-address-option"
                        type="radio"
                        value="1"
                        id="change-delivery__address1"
                      />
                      <label
                        className="change-delivery__option-label body-text custom-radio__label"
                        htmlFor="change-delivery__address1"
                      >
                        <span className="change-delivery__option-radio custom-radio__radio-btn"></span>
                        Бишкек, улица Табышалиева, 57
                      </label>
                      <button
                        className="change-delivery__option-delete-btn"
                        type="button"
                        data-option="1"
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
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                            fill="#A0A0A4"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                  <li
                    className="change-delivery__option custom-radio"
                    data-option="2"
                  >
                    <div className="change-delivery__option-wrap">
                      <input
                        className="change-delivery__option-input custom-radio__input"
                        name="delivery-address-option"
                        type="radio"
                        value="2"
                        id="change-delivery__address2"
                      />
                      <label
                        className="change-delivery__option-label body-text custom-radio__label"
                        htmlFor="change-delivery__address2"
                      >
                        <span className="change-delivery__option-radio custom-radio__radio-btn"></span>
                        Бишкек, улица Жукеева-Пудовкина, 77/1
                      </label>

                      <button
                        className="change-delivery__option-delete-btn"
                        type="button"
                        data-option="2"
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
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                            fill="#A0A0A4"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                  <li
                    className="change-delivery__option custom-radio"
                    data-option="3"
                  >
                    <div className="change-delivery__option-wrap">
                      <input
                        className="change-delivery__option-input custom-radio__input"
                        name="delivery-address-option"
                        type="radio"
                        value="3"
                        id="change-delivery__address3"
                      />
                      <label
                        className="change-delivery__option-label body-text custom-radio__label"
                        htmlFor="change-delivery__address3"
                      >
                        <span className="change-delivery__option-radio custom-radio__radio-btn"></span>
                        Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1
                      </label>
                      <button
                        className="change-delivery__option-delete-btn"
                        type="button"
                        data-option="3"
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
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                            fill="#A0A0A4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                            fill="#A0A0A4"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>
              </fieldset>
              <button
                className="change-delivery__select-btn modal-window__select-btn brand-button headline3 headline3--white"
                type="button"
                data-tab="courier"
              >
                Выбрать
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
