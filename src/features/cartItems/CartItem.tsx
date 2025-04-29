import { CartItemData } from "../../shared.types";
import CartItemPrice from "./CartItemPrice";
import CartItemProperty from "./CartItemProperty";
import CartItemControls from "./CartItemControls";
import CartItemSeller from "./CartItemSeller";

interface CartItemProps {
  itemData: CartItemData;
}

export default function CartItem({ itemData }: CartItemProps) {
  const itemImg = itemData.imgUrl;
  const srcSet = itemImg.map((img) => `${img.url} ${img.density}`).join(", ");

  return (
    <>
      <div
        className="cart-item cart__cart-item"
        id={`cart-item${itemData.idNum.toString()}`}
      >
        <div className="cart-item__pic">
          <div className="cart-item__select custom-checkbox">
            <input
              className="custom-checkbox__input cart-item__select-input"
              checked
              data-item={itemData.idNum}
              name={`selectItem${itemData.idNum.toString()}`}
              type="checkbox"
              id={`selectItem${itemData.idNum.toString()}`}
              value="selected"
            />
            <label
              className="cart-item__select-label custom-checkbox__label"
              htmlFor={`selectItem${itemData.idNum.toString()}`}
            >
              <span className="custom-checkbox__checkbox cart-item__select-checkbox"></span>
            </label>
          </div>
          <img
            src={itemData.imgUrl[0].url}
            alt="Футболка мужская"
            srcSet={srcSet}
          />
          <div className="cart-item__pic-property body-text2">
            {itemData.properties[1]?.value}
          </div>
        </div>
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
