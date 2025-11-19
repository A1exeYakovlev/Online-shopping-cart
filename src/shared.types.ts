export type UserCart = UserCartItem[];
export interface UserCartItem {
  idNum: number;
  quant: number;
  favourite: boolean;
  selected: boolean;
}

export interface UserData {
  name: string | null;
  selectedDelivery: SelectedDelivery | null;
  deliveryAddress: DeliveryAddress | null;
  selectedPaymentOption: number | null;
  paymentOptionData:
    | {
        optionId: number;
        system: string;
        number: string;
        expiration: string;
      }[]
    | null;
  personalDiscount: number | null;
}

export interface SelectedDelivery {
  courier: boolean;
  optionId: number;
}

export interface DeliveryAddress {
  pickpointId: number[];
  courierAddress: { optionId: number; address: string }[];
}

export interface ShopDataBase {
  shopItems: ShopItemsData[];
  shopData: ShopData;
}

export interface ShopData {
  currency: string;
  costOfDelivery: { value: number; currency: string };
  pickpoints: PickPointData[];
}

export interface PickPointData {
  pickPointId: number;
  address: string;
  schedule: string;
  rating: number;
}

export interface ShopItemsData {
  idNum: number;
  name: string;
  properties: ItemProperties[] | [];
  storage: string;
  seller: string;
  remains: number;
  discPrice: PriceInfo;
  fullPrice: PriceInfo;
  discount: number;
  delivery: DeliveryInfo[];
  imgAlt: string;
  imgUrl: { url: string; density: string }[];
}

export interface ItemProperties {
  name: string;
  value?: string | number;
  showOnPic?: boolean;
}

interface PriceInfo {
  value: number;
  currency: string;
}

interface DeliveryInfo {
  date: string;
  quantity: number;
}
