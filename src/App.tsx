import CartItems from "./features/cartItems/CartItems";
import Navbar from "./features/navbar/Navbar";
import CartResultDesktop from "./features/resultsDesktop/CartResultDesktop";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

function App() {
  return (
    <>
      <Header />
      <main className="cart">
        <div className="container container--desktop-only">
          <div className="cart__wrap">
            <CartItems />
            <CartResultDesktop />
          </div>
        </div>
      </main>
      <Footer />
      <Navbar />
      <div className="overlay hidden"></div>
    </>
  );
}

export default App;
