export default function MenuBtn() {
  return (
    <button className="header__menu" type="button">
      <svg
        className="header__menu-icon-mob"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.75 6C2.75 5.30964 3.30964 4.75 4 4.75H24C24.6904 4.75 25.25 5.30964 25.25 6C25.25 6.69036 24.6904 7.25 24 7.25H4C3.30964 7.25 2.75 6.69036 2.75 6Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.75 14C2.75 13.3096 3.30964 12.75 4 12.75H24C24.6904 12.75 25.25 13.3096 25.25 14C25.25 14.6904 24.6904 15.25 24 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.75 22C2.75 21.3096 3.30964 20.75 4 20.75H18C18.6904 20.75 19.25 21.3096 19.25 22C19.25 22.6904 18.6904 23.25 18 23.25H4C3.30964 23.25 2.75 22.6904 2.75 22Z"
          fill="white"
        />
      </svg>
      <svg
        className="header__menu-icon-desktop"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
      >
        <path
          d="M0 2C0 0.895431 0.895431 0 2 0H26C27.1046 0 28 0.895431 28 2C28 3.10457 27.1046 4 26 4H2C0.895431 4 0 3.10457 0 2Z"
          fill="white"
        />
        <path
          d="M0 12C0 10.8954 0.895431 10 2 10H26C27.1046 10 28 10.8954 28 12C28 13.1046 27.1046 14 26 14H2C0.895431 14 0 13.1046 0 12Z"
          fill="white"
        />
        <path
          d="M0 22C0 20.8954 0.895431 20 2 20H26C27.1046 20 28 20.8954 28 22C28 23.1046 27.1046 24 26 24H2C0.895431 24 0 23.1046 0 22Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
