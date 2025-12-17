import { useState } from "react";
import Modal from "../../ui/Modal";
import { useUserData } from "../../store/useUserData";
import PickpointOption from "./PickpointOption";
import { changeDeliveryOption } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { updateUserSelectedDelivery } from "../../services/userLocalStorageServices";

interface ChangeDeliveryModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ChangeDeliveryModal({
  onClose,
}: ChangeDeliveryModalProps) {
  const dispatch = useDispatch();
  const { selectedDelivery, deliveryAddress } = useUserData();
  const [courierSelected, setCourierSelected] = useState(
    selectedDelivery?.courier ?? false
  );
  const [selectedPickpoint, setSelectedPickpoint] = useState(
    selectedDelivery?.optionId
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedPickpoint) return;

    updateUserSelectedDelivery(selectedPickpoint);
    dispatch(changeDeliveryOption(selectedPickpoint));
    onClose(false);
  }

  return (
    <Modal>
      <div className="change-delivery modal-window">
        <div className="change-delivery__inner modal-window__inner">
          <div className="change-delivery__title-wrap modal-window__title-wrap">
            <h3 className="change-delivery__title modal-window__title headline2 headline2--sbold-for-mobile headline2--sm-for-desktop">
              Способ доставки
            </h3>
            <button
              className="change-delivery__close-btn modal-window__close-btn"
              type="button"
              onClick={() => {
                onClose(false);
              }}
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
          <div className="change-delivery__tabs">
            <button
              className="change-delivery__tab-pickpoint caption6 change-delivery__tab"
              type="button"
              data-tab="pickpoint"
            >
              В пункт выдачи
            </button>
            <button
              className="change-delivery__tab-courier caption6 change-delivery__tab"
              type="button"
              data-tab="courier"
            >
              Курьером
            </button>
          </div>
          <p className="change-delivery__descr caption6">Мои адреса</p>
          <div className="change-delivery__content">
            <form action="" onSubmit={onSubmit}>
              <fieldset>
                <ul className="change-delivery__options-list">
                  {deliveryAddress?.pickpointId.map((pickpoint) => (
                    <li
                      className="change-delivery__option custom-radio"
                      data-option="154"
                      key={pickpoint}
                    >
                      <PickpointOption
                        pickpointId={pickpoint}
                        selected={selectedPickpoint === pickpoint}
                        onSelectedPickpoint={setSelectedPickpoint}
                      />
                    </li>
                  ))}
                </ul>
              </fieldset>
              <button
                className="change-delivery__select-btn modal-window__select-btn brand-button headline3 headline3--white"
                type="submit"
                data-tab="pickpoint"
              >
                Выбрать
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}
