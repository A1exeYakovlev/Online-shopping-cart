import CartBtn from "./CartBtn";
import MenuBtn from "./MenuBtn";
import ProfileBtn from "./ProfileBtn";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <header className="header">
      <div className="container container--wide">
        <div className="header__inner">
          <MenuBtn />
          <a className="header__title-link" href="#">
            <div className="header__title headline-main">Товары и точка</div>
          </a>
          <SearchForm />
          <div className="header__nav-links">
            <ProfileBtn />
            <CartBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
