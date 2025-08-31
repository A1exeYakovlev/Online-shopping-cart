import CartItemPrice from "./CartItemPrice";
import CartItemProperty from "./CartItemProperty";
import CartItemControls from "./CartItemControls";
import CartItemSeller from "./CartItemSeller";
import CartItemPic from "./CartItemPic";
import { useCartItemData } from "./hooks";

interface CartItemProps {
  itemId: number;
  type?: "missing";
}

export default function CartItem({ itemId, type }: CartItemProps) {
  const itemData = useCartItemData(itemId);

  const picPropertyClass = itemData?.properties.some(
    (prop) => prop.showOnPic === true
  )
    ? ""
    : "empty-pic-property ";
  const multilineNameClass =
    (itemData?.name.length ?? 0) > 31 ? "multiline-name " : "";
  const emptyPropertiesClass =
    itemData?.properties.length === 0 ? "empty-properties " : "";
  const emptyRemainsClass =
    (itemData?.remains ?? 0) > 3 ? "empty-remains " : "";

  const missingItemsClass = type === "missing" ? "cart-item--missing " : "";

  const itemClasses =
    "cart-item cart__cart-item " +
    picPropertyClass +
    multilineNameClass +
    emptyPropertiesClass +
    emptyRemainsClass +
    missingItemsClass;

  return (
    <>
      <div className={itemClasses} id={`cart-item${itemId.toString()}`}>
        <CartItemPic itemId={itemId} />
        {type !== "missing" && <CartItemPrice itemId={itemId} />}
        <p className="cart-item__name body-text2">{itemData?.name}</p>
        <div className="cart-item__properties caption">
          {itemData?.properties.map((property) => (
            <CartItemProperty property={property} key={property.name} />
          ))}
        </div>
        {type !== "missing" && (
          <p className="cart-item__storage caption caption--gray">
            {itemData?.storage}
          </p>
        )}
        {type !== "missing" && <CartItemSeller itemId={itemId} />}
        <CartItemControls itemId={itemId} />
      </div>
    </>
  );
}
