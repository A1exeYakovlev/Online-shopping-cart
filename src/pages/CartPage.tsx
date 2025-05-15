import CartDelivery from "../features/cartDelivery/CartDelivery";
import CartItems from "../features/cartItems/CartItems";
import CartPayment from "../features/cartPayment/CartPayment";
import CartReceiver from "../features/cartReceiver/CartReceiver";
import CartResult from "../features/cartResult/CartResult";
import CartResultDesktop from "../features/resultsDesktop/CartResultDesktop";

export default function CartPage() {
  return (
    <>
      <main className="cart">
        <div className="container container--desktop-only">
          <div className="cart__wrap">
            <section className="cart__inner">
              <CartItems />
              <CartDelivery />
              <CartPayment />
              <CartReceiver />
              <CartResult />
            </section>
            <CartResultDesktop />
          </div>
        </div>
      </main>
    </>
  );
}
