import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectItem } from "../../store/cartSlice";
import { updateLocalStorageSelected } from "../../services/cartLocalStorageServices";
import { useCartItemData } from "./hooks";

interface CartItemPicProps {
  itemId: number;
}
export default function CartItemPic({ itemId }: CartItemPicProps) {
  const dispatch = useDispatch();
  const userCart = useSelector((state: RootState) => state.cart);
  const itemData = useCartItemData(itemId);

  const itemImg = itemData?.imgUrl || "";
  let srcSet = "";
  if (itemImg) {
    srcSet = itemImg.map((img) => `${img.url} ${img.density}`).join(", ");
  }

  const isSelected = userCart.find(
    (cartItem) => cartItem.idNum === itemId
  )?.selected;

  function handleSelect() {
    updateLocalStorageSelected(itemId);
    dispatch(selectItem(itemId));
  }

  return (
    <div className="cart-item__pic">
      <div className="cart-item__select custom-checkbox">
        <input
          className="custom-checkbox__input cart-item__select-input"
          checked={isSelected}
          data-item={itemId}
          name={`selectItem${itemId.toString()}`}
          type="checkbox"
          id={`selectItem${itemId.toString()}`}
          value="selected"
          onChange={handleSelect}
        />
        <label
          className="cart-item__select-label custom-checkbox__label"
          htmlFor={`selectItem${itemId.toString()}`}
        >
          <span className="custom-checkbox__checkbox cart-item__select-checkbox"></span>
        </label>
      </div>
      <img
        src={itemData?.imgUrl[0].url}
        alt={itemData?.imgAlt}
        srcSet={srcSet}
      />
      <div className="cart-item__pic-property body-text2">
        {itemData?.properties[1]?.value}
      </div>
    </div>
  );
}
