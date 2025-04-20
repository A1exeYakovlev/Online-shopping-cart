import CartResultDesktopDelivery from "../CartResultDesktopDelivery";
import CartResultDesktopPayment from "./CartResultDesktopPayment";
import CartResultDesktopSum from "./CartResultDesktopSum";

export default function CartResultDesktop() {
  return (
    <section className="cart__result cart__result--desktop result">
      <CartResultDesktopSum />
      <CartResultDesktopDelivery />
      <CartResultDesktopPayment />
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
    </section>
  );
}
