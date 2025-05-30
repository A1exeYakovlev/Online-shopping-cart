export default function ProfileBtn() {
  return (
    <a className="header__profile-link caption caption--white" href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="29"
        viewBox="0 0 28 29"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5207 9.28873C18.5207 12.0587 16.4361 14.2066 14.006 14.2066C11.5759 14.2066 9.49117 12.0587 9.49117 9.31221C9.47931 6.60094 11.5878 4.5 14.006 4.5C16.4241 4.5 18.5207 6.55399 18.5207 9.28873ZM4.5 22.9977C4.5 23.9836 5.14326 24.5 6.94201 24.5H21.058C22.8567 24.5 23.5 23.9836 23.5 22.9977C23.5 20.1338 19.8429 16.1901 14.006 16.1901C8.15705 16.1901 4.5 20.1338 4.5 22.9977Z"
          fill="white"
        />
      </svg>
      <div className="header__profile-badge badge-count caption3"></div>
      <span>Профиль</span>
    </a>
  );
}
