import RefuseDescr from "../../ui/RefuseDescr";
import { useUserData } from "../../store/useUserData";
import { useLoaderData } from "react-router";
import { ShopDataBase } from "../../shared.types";
import DeliveryAddressInfo from "./DeliveryAddressInfo";
import ChangeDeliveryModal from "./ChangeDeliveryModal";
import { useState } from "react";

export default function CartDelivery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { selectedDelivery } = useUserData();
  const { shopData } = useLoaderData<ShopDataBase>();

  const { costOfDelivery } = shopData;
  const costOfDeliveryText = selectedDelivery?.courier
    ? `${costOfDelivery.value.toString()} ${costOfDelivery.currency}`
    : "Бесплатно";

  return (
    <section className="delivery pickpoint-selected" id="delivery-section">
      <div className="container">
        <div className="delivery__title-wrap">
          <h2 className="delivery__title headline2">Способ доставки</h2>
          <button
            className="delivery-change-btn change-btn headline3 headline3--magenta"
            type="button"
            onClick={() => {
              setModalIsOpen((prev) => !prev);
            }}
          >
            Изменить
          </button>
        </div>
        <DeliveryAddressInfo />
        <div className="delivery__cost-wrap">
          <p className="headline4">Стоимость доставки</p>
          <p className="body-text delivery-cost">{costOfDeliveryText}</p>
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
        <RefuseDescr />
      </div>
      {modalIsOpen && <ChangeDeliveryModal onModalIsOpen={setModalIsOpen} />}
    </section>
  );
}
