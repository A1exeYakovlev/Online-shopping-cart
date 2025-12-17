export default function CartPayment() {
  return (
    <section className="payment cart__payment">
      <div className="container">
        <div className="payment__title-wrap">
          <h2 className="payment__title headline2">Способ оплаты</h2>
          <button
            className="payment__change-btn change-btn headline3 headline3--magenta"
            type="button"
          >
            Изменить
          </button>
        </div>
        <div className="payment__card cart__payment-card">
          <div className="payment__card-syst">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 30 10"
              fill="none"
            >
              <path
                d="M16.6813 2.17708L14.8645 6.09161H14.6806V1.33362H12.0852V9.3357H14.2372C14.8212 9.3357 15.3403 9.00048 15.589 8.48142L17.4166 4.57771H17.6005V9.3357H20.1959V1.33362H18.0114C17.4491 1.33362 16.9192 1.66884 16.6813 2.17708Z"
                fill="#319B42"
              />
              <path
                d="M6.97243 2.38254L5.90182 6.09161H5.71798L4.63656 2.38254C4.45271 1.75535 3.87956 1.33362 3.2307 1.33362H0.667725V9.3357H3.26315V4.57771H3.44699L4.93935 9.3357H6.66963L8.162 4.57771H8.34584V9.3357H10.9413V1.33362H8.37829C7.72943 1.33362 7.14546 1.75535 6.97243 2.38254Z"
                fill="#319B42"
              />
              <path
                d="M21.3244 4.9007V9.3357H23.9207V6.7396H26.7116C27.9232 6.7396 28.9509 5.97159 29.3295 4.9007H21.3244Z"
                fill="#319B42"
              />
              <path
                d="M26.6358 1.33362H20.8591C21.2161 3.23742 22.882 4.57874 24.8833 4.57874H29.3727C29.4051 4.40567 29.4267 4.21096 29.4267 4.01625C29.4267 2.46941 28.1827 1.33362 26.6358 1.33362Z"
                fill="url(#paint0_linear_13_254)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_13_254"
                  x1="20.8591"
                  y1="2.95618"
                  x2="29.4267"
                  y2="2.95618"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00A3E1" />
                  <stop offset="0.3042" stopColor="#009ADD" />
                  <stop offset="0.7987" stopColor="#0082D4" />
                  <stop offset="1" stopColor="#0076CF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="payment__card-number body-text">
            1234 56•• •••• 1234
          </span>
          <span className="payment__card-date body-text">01/30</span>
        </div>
        <p className="payment__descr caption caption--gray">
          Спишем оплату с карты при получении
        </p>
      </div>
      {/* <div className="change-payment modal-window hidden">
        <div className="change-payment__inner modal-window__inner">
          <div className="change-payment__title-wrap modal-window__title-wrap">
            <h3 className="change-payment__title modal-window__title headline2 headline2--sbold-for-mobile headline2--sm-for-desktop">
              Способ оплаты
            </h3>
            <button
              className="change-payment__close-btn modal-window__close-btn"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.92888 17.6569C4.53836 18.0474 4.53836 18.6806 4.92888 19.0711C5.3194 19.4616 5.95257 19.4616 6.34309 19.0711L12 13.4143L17.6568 19.0711C18.0473 19.4616 18.6805 19.4616 19.071 19.0711C19.4615 18.6806 19.4615 18.0474 19.071 17.6569L13.4142 12L19.071 6.3432C19.4615 5.95268 19.4615 5.31951 19.071 4.92899C18.6805 4.53846 18.0473 4.53846 17.6568 4.92899L12 10.5858L6.3431 4.92899C5.95258 4.53846 5.31941 4.53846 4.92889 4.92899C4.53837 5.31951 4.53837 5.95268 4.92889 6.3432L10.5857 12L4.92888 17.6569Z"
                  fill="#A0A0A4"
                />
              </svg>
            </button>
          </div>
          <form action="">
            <fieldset>
              <ul className="change-payment__options-list">
                <li className="change-payment__option custom-radio">
                  <input
                    className="change-payment__option-input custom-radio__input"
                    name="payment-option"
                    type="radio"
                    value="1"
                    id="change-payment__option1"
                    checked
                  />
                  <label
                    className="change-payment__option-label body-text custom-radio__label"
                    htmlFor="change-payment__option1"
                  >
                    <span className="change-payment__option-radio custom-radio__radio-btn"></span>
                    <span className="change-payment__option-pic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="10"
                        viewBox="0 0 30 10"
                        fill="none"
                      >
                        <path
                          d="M16.682 1.84378L14.8652 5.75832H14.6814V1.00032H12.0859V9.0024H14.238C14.8219 9.0024 15.341 8.66718 15.5898 8.14813L17.4174 4.24441H17.6012V9.0024H20.1966V1.00032H18.0121C17.4498 1.00032 16.9199 1.33554 16.682 1.84378Z"
                          fill="#319B42"
                        />
                        <path
                          d="M6.97268 2.04924L5.90207 5.75832H5.71823L4.6368 2.04924C4.45296 1.42205 3.8798 1.00032 3.23095 1.00032H0.667969V9.0024H3.26339V4.24441H3.44723L4.9396 9.0024H6.66988L8.16225 4.24441H8.34609V9.0024H10.9415V1.00032H8.37853C7.72968 1.00032 7.14571 1.42205 6.97268 2.04924Z"
                          fill="#319B42"
                        />
                        <path
                          d="M21.3247 4.5674V9.0024H23.9209V6.40631H26.7119C27.9235 6.40631 28.9512 5.63829 29.3298 4.5674H21.3247Z"
                          fill="#319B42"
                        />
                        <path
                          d="M26.636 1.00032H20.8594C21.2164 2.90412 22.8823 4.24544 24.8836 4.24544H29.3729C29.4054 4.07237 29.427 3.87766 29.427 3.68295C29.427 2.13611 28.183 1.00032 26.636 1.00032Z"
                          fill="url(#paint0_linear_17_2032)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_17_2032"
                            x1="20.8594"
                            y1="2.62288"
                            x2="29.427"
                            y2="2.62288"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00A3E1" />
                            <stop offset="0.3042" stopColor="#009ADD" />
                            <stop offset="0.7987" stopColor="#0082D4" />
                            <stop offset="1" stopColor="#0076CF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span>1234 56•• •••• 1234</span>
                  </label>
                </li>
                <li className="change-payment__option custom-radio">
                  <input
                    className="change-payment__option-input custom-radio__input"
                    name="payment-option"
                    type="radio"
                    value="2"
                    id="change-payment__option2"
                  />

                  <label
                    className="change-payment__option-label body-text custom-radio__label"
                    htmlFor="change-payment__option2"
                  >
                    <span className="change-payment__option-radio custom-radio__radio-btn"></span>
                    <span className="change-payment__option-pic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="12"
                        viewBox="0 0 32 12"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.4709 4.17815C16.453 5.58578 17.7254 6.37131 18.6838 6.83836C19.6686 7.31761 19.9994 7.62491 19.9956 8.05338C19.9881 8.70928 19.21 8.99867 18.4818 9.00993C17.2113 9.02965 16.4727 8.66696 15.8855 8.3926L15.4279 10.5341C16.017 10.8057 17.108 11.0425 18.2394 11.0528C20.8949 11.0528 22.6323 9.74195 22.6418 7.70948C22.6521 5.13008 19.0738 4.98723 19.0982 3.83424C19.1067 3.4847 19.4403 3.11161 20.1713 3.01671C20.5331 2.96884 21.532 2.93215 22.6643 3.45364L23.1087 1.38174C22.4998 1.15995 21.7171 0.947548 20.7427 0.947548C18.2431 0.947548 16.485 2.27625 16.4709 4.17815ZM27.3796 1.12607C26.8947 1.12607 26.4859 1.40896 26.3037 1.84307L22.5102 10.9006H25.1638L25.6919 9.44123H28.9347L29.241 10.9006H31.5799L29.5389 1.12607H27.3796ZM27.7507 3.76657L28.5165 7.43692H26.4192L27.7507 3.76657ZM13.2535 1.12607L11.1618 10.9006H13.6904L15.7812 1.12607H13.2535ZM9.51266 1.12607L6.88061 7.77895L5.81595 2.12213C5.69101 1.49072 5.19768 1.12607 4.64982 1.12607H0.347122L0.286962 1.4099C1.17028 1.60157 2.17385 1.91074 2.78179 2.24151C3.15386 2.44351 3.2601 2.62015 3.38222 3.10034L5.39874 10.9006H8.07123L12.1682 1.12607H9.51266Z"
                          fill="#1434CB"
                        />
                      </svg>
                    </span>
                    <span>5678 90•• •••• 9708</span>
                  </label>
                </li>
                <li className="change-payment__option custom-radio">
                  <input
                    className="change-payment__option-input custom-radio__input"
                    name="payment-option"
                    type="radio"
                    value="3"
                    id="change-payment__option3"
                  />
                  <label
                    className="change-payment__option-label body-text custom-radio__label"
                    htmlFor="change-payment__option3"
                  >
                    <span className="change-payment__option-radio custom-radio__radio-btn"></span>
                    <span className="change-payment__option-pic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="14"
                        viewBox="0 0 24 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.9337 11.3367V11.0649H22.8629L22.781 11.2514L22.6996 11.0649H22.6286V11.3367H22.6788V11.132L22.7554 11.3086H22.8075L22.884 11.1315V11.3367H22.9339H22.9337ZM22.4846 11.3367V11.1115H22.5752V11.0656H22.3438V11.1115H22.4343V11.3367H22.4846Z"
                          fill="#F79410"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.8883 12.5014H8.76367V1.49463H14.8884L14.8883 12.5014Z"
                          fill="#FF5F00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.15147 6.99987C9.15147 4.76713 10.1969 2.77821 11.8248 1.49643C10.5928 0.524985 9.06814 -0.00258565 7.49923 -0.000236328C3.63356 -0.000236328 0.5 3.13376 0.5 6.99987C0.5 10.8659 3.63356 13.9999 7.49923 13.9999C9.06814 14.0023 10.5929 13.4747 11.8249 12.5032C10.1971 11.2217 9.15147 9.23269 9.15147 6.99987Z"
                          fill="#EB001B"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.1497 6.99987C23.1497 10.8659 20.0161 13.9999 16.1505 13.9999C14.5814 14.0022 13.0565 13.4747 11.8242 12.5032C13.4526 11.2215 14.498 9.23269 14.498 6.99987C14.498 4.76699 13.4526 2.77821 11.8242 1.49643C13.0564 0.524984 14.5813 -0.00251272 16.1504 -0.000236807C20.016 -0.000236807 23.1496 3.13376 23.1496 6.99987"
                          fill="#F79410"
                        />
                      </svg>
                    </span>
                    <span>9876 54•• •••• 6136</span>
                  </label>
                </li>
                <li className="change-payment__option custom-radio">
                  <input
                    className="change-payment__option-input custom-radio__input"
                    name="payment-option"
                    type="radio"
                    value="4"
                    id="change-payment__option4"
                  />
                  <label
                    className="change-payment__option-label body-text custom-radio__label"
                    htmlFor="change-payment__option4"
                  >
                    <span className="change-payment__option-radio custom-radio__radio-btn"></span>
                    <span className="change-payment__option-pic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="14"
                        viewBox="0 0 24 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.8883 12.5017H8.76367V1.49487H14.8884L14.8883 12.5017Z"
                          fill="#6C6BBD"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.15147 7.00012C9.15147 4.76738 10.1969 2.77845 11.8248 1.49668C10.5928 0.525229 9.06814 -0.00234151 7.49923 7.81249e-06C3.63356 7.81249e-06 0.5 3.13401 0.5 7.00012C0.5 10.8662 3.63356 14.0002 7.49923 14.0002C9.06814 14.0025 10.5929 13.4749 11.8249 12.5035C10.1971 11.2219 9.15147 9.23293 9.15147 7.00012Z"
                          fill="#EB001B"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.1497 7.00012C23.1497 10.8662 20.0161 14.0002 16.1505 14.0002C14.5814 14.0024 13.0565 13.4749 11.8242 12.5035C13.4526 11.2217 14.498 9.23293 14.498 7.00012C14.498 4.76723 13.4526 2.77845 11.8242 1.49668C13.0564 0.525229 14.5813 -0.00226858 16.1504 7.33385e-06C20.016 7.33385e-06 23.1496 3.13401 23.1496 7.00012"
                          fill="#0099DF"
                        />
                      </svg>
                    </span>
                    <span>5734 56•• •••• 1044</span>
                  </label>
                </li>
              </ul>
            </fieldset>
            <button
              className="change-payment__select-btn modal-window__select-btn brand-button headline3 headline3--white"
              type="submit"
            >
              Выбрать
            </button>
          </form>
        </div>
      </div> */}
    </section>
  );
}
