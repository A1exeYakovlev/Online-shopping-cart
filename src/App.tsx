import { createBrowserRouter, RouterProvider } from "react-router";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { loader as cartItemsLoader } from "./features/cartItems/CartItems";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
        loader: cartItemsLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
