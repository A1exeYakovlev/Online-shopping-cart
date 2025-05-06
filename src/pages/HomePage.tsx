import { Link } from "react-router";

export default function HomePage() {
  const style = {
    display: "block",
    margin: "20rem auto 0 auto",
    padding: "1rem",
    width: "20rem",
    textAlign: "center",
  };

  return (
    <Link
      style={style}
      className="brand-button headline3 headline3--white"
      to="/cart"
    >
      Открыть корзину
    </Link>
  );
}
