import { useDispatch } from "react-redux";
import CartDelivery from "../features/cartDelivery/CartDelivery";
import CartItems from "../features/cartItems/CartItems";
import CartPayment from "../features/cartPayment/CartPayment";
import CartReceiver from "../features/cartReceiver/CartReceiver";
import CartResult from "../features/cartResult/CartResult";
import CartResultDesktop from "../features/cartResult/CartResultDesktop";
import { useEffect } from "react";
import { getUserCartItems } from "../services/localStorageServices";
import { setCartItems } from "../features/cartItems/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userCartItems = getUserCartItems();

    dispatch(setCartItems(userCartItems));
  }, [dispatch]);

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
