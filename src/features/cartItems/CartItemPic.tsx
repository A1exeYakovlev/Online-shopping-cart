import { CartItemData } from "../../shared.types";

interface CartItemPicProps {
  itemData: CartItemData;
}
export default function CartItemPic({ itemData }: CartItemPicProps) {
  const itemImg = itemData.imgUrl;
  const srcSet = itemImg.map((img) => `${img.url} ${img.density}`).join(", ");

  return (
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
  );
}
