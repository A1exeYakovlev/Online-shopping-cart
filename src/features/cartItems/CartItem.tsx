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
  const picPropertyStyle = itemData.properties.find(
    (prop) => prop.showOnPic === true
  )
    ? ""
    : "empty-pic-property ";
  const multilineNameStyle = itemData.name.length > 31 ? "multiline-name " : "";
  const emptyPropertiesStyle =
    itemData.properties.length === 0 ? "empty-properties " : "";
  const emptyRemainsStyle = itemData.remains > 3 ? "empty-remains " : "";

  const itemStyles =
    "cart-item cart__cart-item " +
    picPropertyStyle +
    multilineNameStyle +
    emptyPropertiesStyle +
    emptyRemainsStyle;

  return (
    <>
      <div className={itemStyles} id={`cart-item${itemData.idNum.toString()}`}>
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
