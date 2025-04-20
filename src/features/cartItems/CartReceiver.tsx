export default function CartReceiver() {
  return (
    <section className="receiver cart__receiver">
      <div className="container">
        <h2 className="receiver__title headline2">Получатель</h2>
        <form id="receiver-form" action="#" method="post">
          <div className="receiver__pers-info">
            <div className="receiver__form-field">
              <input
                className="receiver__name-input body-text js-validate"
                type="text"
                name="receiver-name"
                id="receiver-name"
                placeholder="Имя"
                pattern="^[A-Za-zА-Яа-яЁё]+(?:[\s&#39;\-][A-Za-zА-Яа-яЁё]+)*$"
                required
                aria-describedby="receiver__name-input-error"
              />
              <label
                className="receiver__name-label body-text body-text--gray"
                htmlFor="receiver-name"
              >
                <span>Имя</span>
              </label>
              <p
                className="receiver__form-error caption4 caption4--orange"
                id="receiver__name-input-error"
                hidden
              ></p>
            </div>
            <div className="receiver__form-field">
              <input
                className="receiver__surname-input body-text js-validate"
                name="receiver-surname"
                id="receiver-surname"
                type="text"
                placeholder="Фамилия"
                pattern="^[A-Za-zА-Яа-яЁё]+(?:[\s&#39;\-][A-Za-zА-Яа-яЁё]+)*$"
                required
                aria-describedby="receiver__surname-input-error"
              />
              <label
                className="receiver__surname-label body-text body-text--gray"
                htmlFor="receiver-surname"
              >
                <span>Фамилия</span>
              </label>
              <p
                className="receiver__form-error caption4 caption4--orange"
                id="receiver__surname-input-error"
                hidden
              ></p>
            </div>
          </div>
          <div className="receiver__other-info">
            <div className="receiver__form-field">
              <input
                className="receiver__email-input body-text js-validate"
                type="email"
                id="receiver-email"
                name="receiver-email"
                placeholder="Электронная почта"
                required
                aria-describedby="receiver__email-input-error"
              />
              <label
                className="receiver__email-label body-text body-text--gray"
                htmlFor="receiver-email"
              >
                <span>Электронная почта</span>
              </label>
              <p
                className="receiver__form-error caption4 caption4--orange"
                id="receiver__email-input-error"
                hidden
              ></p>
            </div>
            <div className="receiver__form-field">
              <input
                className="receiver__phone-input body-text js-validate"
                type="tel"
                id="receiver-phone"
                name="receiver-phone"
                placeholder="Телефон"
                required
                pattern="^[\+][0-9]{1}\s[0-9]{3}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$"
                maxLength={30}
                aria-describedby="receiver__phone-input-error"
              />
              <label
                className="receiver__phone-label body-text body-text--gray"
                htmlFor="receiver-phone"
              >
                <span>Телефон</span>
              </label>
              <p
                className="receiver__form-error caption4 caption4--orange"
                id="receiver__phone-input-error"
                hidden
              ></p>
            </div>
            <div className="receiver__form-field">
              <input
                className="receiver__tax-number-input body-text js-validate"
                type="text"
                id="receiver-tax-number"
                name="receiver-tax-number"
                placeholder="ИНН"
                required
                pattern="(?!0{14})[0-9]{14}"
                maxLength={14}
                aria-describedby="receiver__tax-number-input-error"
              />
              <label
                className="receiver__tax-number-label body-text body-text--gray"
                htmlFor="receiver-tax-number"
              >
                <span>ИНН</span>
                <p className="receiver__tax-number-descr caption4">
                  Для таможенного оформления
                </p>
              </label>
              <p
                className="receiver__form-error caption4 caption4--orange"
                id="receiver__tax-number-input-error"
                hidden
              ></p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
