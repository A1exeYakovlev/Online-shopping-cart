import CartItems from "../features/cartItems/CartItems";
import CartResultDesktop from "../features/resultsDesktop/CartResultDesktop";

export default function CartPage() {
  return (
    <>
      <main className="cart">
        <div className="container container--desktop-only">
          <div className="cart__wrap">
            <CartItems />
            <CartResultDesktop />
          </div>
        </div>
      </main>
    </>
  );
}
