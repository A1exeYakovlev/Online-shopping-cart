import { CartItemData } from "../../shared.types";
import CartItemPrice from "./CartItemPrice";
import CartItemProperty from "./CartItemProperty";
import CartItemControls from "./CartItemControls";

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
        <div className="cart-item__seller">
          <p className="cart-item__seller-name caption caption--gray">
            {itemData.seller}
          </p>
          <div className="cart-item__seller-btn-wrap">
            <button
              className="cart-item__seller-tooltip-btn"
              type="button"
              data-seller={itemData.idNum.toString()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="7.5" stroke="#9797AF" />
                <path
                  d="M9.88867 7.58691C9.62826 7.58691 9.41504 7.51042 9.24902 7.35742C9.08301 7.20117 9 7.01074 9 6.78613C9 6.55501 9.08301 6.36621 9.24902 6.21973C9.41504 6.07324 9.62826 6 9.88867 6C10.1523 6 10.3656 6.07324 10.5283 6.21973C10.6943 6.36621 10.7773 6.55501 10.7773 6.78613C10.7773 7.02051 10.6943 7.21257 10.5283 7.3623C10.3656 7.51204 10.1523 7.58691 9.88867 7.58691ZM10.6504 13.3779H9.10742V8.37793H10.6504V13.3779Z"
                  fill="#9797AF"
                />
              </svg>
            </button>
            <div className="cart-item__seller-tooltip tooltip">
              <p className="cart-item__seller-name caption6"></p>
              <p className="cart-item__seller-ogrn caption"></p>
              <p className="cart-item__seller-address caption"></p>
            </div>
          </div>
        </div>
        <CartItemControls itemData={itemData} />
      </div>
    </>
  );
}
