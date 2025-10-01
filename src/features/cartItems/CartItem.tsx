import CartItemPrice from "./CartItemPrice";
import CartItemProperty from "./CartItemProperty";
import CartItemControls from "./CartItemControls";
import CartItemSeller from "./CartItemSeller";
import CartItemPic from "./CartItemPic";
import { useCartItemData } from "./hooks";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

interface CartItemProps {
  itemId: number;
  type?: "missing";
}

export default function CartItem({ itemId, type }: CartItemProps) {
  const itemData = useCartItemData(itemId);
  const userCart = useSelector((state: RootState) => state.cart);
  const userCartItem = userCart.find((item) => item.idNum === itemId);
  const itemQuantity = userCartItem?.quant || 1;
  const noRemainsText = (itemData?.remains ?? 0) - itemQuantity > 3;
  const picPropertyClass = itemData?.properties.some(
    (prop) => prop.showOnPic === true
  )
    ? ""
    : "empty-pic-property ";
  const multilineNameClass =
    (itemData?.name.length ?? 0) > 31 ? "multiline-name " : "";
  const emptyPropertiesClass =
    itemData?.properties.length === 0 ? "empty-properties " : "";
  const emptyRemainsTextClass = noRemainsText ? "empty-remains-text " : "";

  const missingItemsClass = type === "missing" ? "cart-item--missing " : "";
  const minQuantLimit = itemQuantity === 1 ? "minimal-number" : "";
  const maxQuantLimit =
    itemQuantity === itemData?.remains ? "maximal-number" : "";

  const itemClasses =
    "cart-item cart__cart-item " +
    picPropertyClass +
    multilineNameClass +
    emptyPropertiesClass +
    emptyRemainsTextClass +
    missingItemsClass +
    minQuantLimit +
    maxQuantLimit;

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
