import { useLoaderData } from "react-router";
import { PickPointData, ShopDataBase } from "../../shared.types";
import { useUserData } from "../../store/useUserData";

export default function DeliveryAddressInfo() {
  const { selectedDelivery, deliveryAddress } = useUserData();
  const { shopData } = useLoaderData<ShopDataBase>();
  const pickpoints = shopData.pickpoints;

  const courierIsSelected = selectedDelivery?.courier;
  const deliveryTypeText = courierIsSelected ? "Курьером" : "Пункт выдачи";
  const selectedDeliveryOption = selectedDelivery?.optionId;

  let address: string | undefined;
  let selectedPickpoint: PickPointData | undefined;

  if (courierIsSelected)
    address = deliveryAddress?.courierAddress.find(
      (option) => option.optionId === selectedDeliveryOption
    )?.address;
  if (!courierIsSelected && selectedDeliveryOption) {
    const pickpointsMap = new Map(
      pickpoints.map((point) => [point.pickPointId, point])
    );
    selectedPickpoint = pickpointsMap.get(selectedDeliveryOption);
    address = selectedPickpoint?.address;
  }

  return (
    <div className="delivery__delivery-point">
      <p className="delivery__delivery-type headline4">{deliveryTypeText}</p>
      <div className="delivery__delivery-point-info">
        <p className="body-text delivery-address">{address}</p>
        {!selectedDelivery?.courier && (
          <p className="delivery__schedule-wrap caption">
            <span className="delivery__pickpoint-rating">
              {selectedPickpoint?.rating}
            </span>
            <span className="delivery__schedule">
              {selectedPickpoint?.schedule}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
