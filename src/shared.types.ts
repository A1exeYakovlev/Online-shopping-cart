export type UserCart = Array<{
  idNum: number;
  quant: number;
  favourite: boolean;
  selected: boolean;
}>;

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
