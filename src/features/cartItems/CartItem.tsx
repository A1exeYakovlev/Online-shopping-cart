import { ShopItemsData } from "../../shared.types";
import CartItemPrice from "./CartItemPrice";
import CartItemProperty from "./CartItemProperty";
import CartItemControls from "./CartItemControls";
import CartItemSeller from "./CartItemSeller";
import CartItemPic from "./CartItemPic";

interface CartItemProps {
  itemData: ShopItemsData;
  type?: "missing";
}

export default function CartItem({ itemData, type }: CartItemProps) {
  const picPropertyStyle = itemData.properties.find(
    (prop) => prop.showOnPic === true
  )
    ? ""
    : "empty-pic-property ";
  const multilineNameStyle = itemData.name.length > 31 ? "multiline-name " : "";
  const emptyPropertiesStyle =
    itemData.properties.length === 0 ? "empty-properties " : "";
  const emptyRemainsStyle = itemData.remains > 3 ? "empty-remains " : "";

  const missingItemsStyle = type === "missing" ? "cart-item--missing " : "";

  const itemStyles =
    "cart-item cart__cart-item " +
    picPropertyStyle +
    multilineNameStyle +
    emptyPropertiesStyle +
    emptyRemainsStyle +
    missingItemsStyle;

  return (
    <>
      <div className={itemStyles} id={`cart-item${itemData.idNum.toString()}`}>
        <CartItemPic itemId={itemData.idNum} />
        {type !== "missing" && <CartItemPrice itemData={itemData} />}
        <p className="cart-item__name body-text2">{itemData.name}</p>
        <div className="cart-item__properties caption">
          {itemData.properties.map((property) => (
            <CartItemProperty property={property} key={property.name} />
          ))}
        </div>
        {type !== "missing" && (
          <p className="cart-item__storage caption caption--gray">
            {itemData.storage}
          </p>
        )}
        {type !== "missing" && <CartItemSeller itemData={itemData} />}
        <CartItemControls itemData={itemData} />
      </div>
    </>
  );
}
