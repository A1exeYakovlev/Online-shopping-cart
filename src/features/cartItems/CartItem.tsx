import { CartItemData } from "../../shared.types";
import CartItemPrice from "./CartItemPrice";
import CartItemProperty from "./CartItemProperty";
import CartItemControls from "./CartItemControls";
import CartItemSeller from "./CartItemSeller";
import CartItemPic from "./CartItemPic";

interface CartItemProps {
  itemData: CartItemData;
}

export default function CartItem({ itemData }: CartItemProps) {
  return (
    <>
      <div
        className="cart-item cart__cart-item"
        id={`cart-item${itemData.idNum.toString()}`}
      >
        <CartItemPic itemData={itemData} />
        <CartItemPrice itemData={itemData} />
        <p className="cart-item__name body-text2">{itemData.name}</p>
        <div className="cart-item__properties caption">
          {itemData.properties.map((property) => (
            <CartItemProperty property={property} key={property.name} />
          ))}
        </div>
        <p className="cart-item__storage caption caption--gray">
          {itemData.storage}
        </p>
        <CartItemSeller itemData={itemData} />
        <CartItemControls itemData={itemData} />
      </div>
    </>
  );
}
