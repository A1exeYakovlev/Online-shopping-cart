import CartResultTotals from "./CartResultTotals";
import CartResultDesktopDelivery from "./CartResultDesktopDelivery";
import CartResultDesktopPayment from "./CartResultDesktopPayment";
import OrderBtn from "../../ui/OrderBtn";
import TermsInfo from "../../ui/TermsInfo";

export default function CartResultDesktop() {
  return (
    <section className="cart__result cart__result--desktop result--desktop result">
      <CartResultTotals />
      <CartResultDesktopDelivery />
      <CartResultDesktopPayment />
      <OrderBtn />
      <TermsInfo />
    </section>
  );
}
