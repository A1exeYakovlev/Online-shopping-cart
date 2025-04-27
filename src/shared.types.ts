export interface CartItemData {
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

interface ItemProperties {
  name: string;
  value?: string | number;
}

interface PriceInfo {
  value: number;
  currency: string;
}

interface DeliveryInfo {
  date: string;
  quantity: number;
}
