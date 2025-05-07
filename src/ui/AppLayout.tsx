import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "../features/navbar/Navbar";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Navbar />
      <div className="overlay hidden"></div>
    </>
  );
}
