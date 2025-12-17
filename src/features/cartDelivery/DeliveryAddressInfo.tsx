import { useUserData } from "../../store/useUserData";
import { usePickpoint } from "./hooks";

export default function DeliveryAddressInfo() {
  const { selectedDelivery, deliveryAddress } = useUserData();

  const courierIsSelected = selectedDelivery?.courier;
  const deliveryTypeText = courierIsSelected ? "Курьером" : "Пункт выдачи";
  const selectedDeliveryOption = selectedDelivery?.optionId;
  const pickpointData = usePickpoint(selectedDeliveryOption);

  let address;
  let schedule;
  let rating;

  if (courierIsSelected)
    address = deliveryAddress?.courierAddress.find(
      (option) => option.optionId === selectedDeliveryOption
    )?.address;
  if (!courierIsSelected && selectedDeliveryOption) {
    address = pickpointData?.address;
    schedule = pickpointData?.schedule;
    rating = pickpointData?.rating;
  }

  return (
    <div className="delivery__delivery-point">
      <p className="delivery__delivery-type headline4">{deliveryTypeText}</p>
      <div className="delivery__delivery-point-info">
        <p className="body-text delivery-address">{address}</p>
        {!selectedDelivery?.courier && (
          <p className="delivery__schedule-wrap caption">
            <span className="delivery__pickpoint-rating">{rating}</span>
            <span className="delivery__schedule">{schedule}</span>
          </p>
        )}
      </div>
    </div>
  );
}
