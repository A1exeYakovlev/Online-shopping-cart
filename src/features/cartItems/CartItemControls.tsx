import { ShopItemsData } from "../../shared.types";
import {
  deleteFromLocalStorage,
  updateLocalStorage,
} from "../../services/localStorageServices";
import { useDispatch, useSelector } from "react-redux";
import { changeItemQuantity, deleteItem } from "./cartSlice";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { formatRemainsComment } from "../../utils/formatting";

interface CartItemControlsProps {
  itemData: ShopItemsData;
}

export default function CartItemControls({ itemData }: CartItemControlsProps) {
  const dispatch = useDispatch();
  const idNumStr = itemData.idNum.toString();

  const userCart = useSelector((state: RootState) => state.cart);
  const itemQuantity =
    userCart.find((item) => item.idNum === itemData.idNum)?.quant || 1;
  const [quantVal, setQuantVal] = useState<string>(itemQuantity.toString());

  const remainsComment = formatRemainsComment(
    itemData.remains - itemQuantity,
    3
  );

  function onManageQuantity(type: "increase" | "decrease") {
    let newQuantity = 1;
    if (type === "increase") {
      newQuantity = Math.min(itemData.remains, itemQuantity + 1);
    } else if (type === "decrease") newQuantity = Math.max(1, itemQuantity - 1);

    updateLocalStorage(itemData, newQuantity);
    dispatch(changeItemQuantity(itemData.idNum, newQuantity));
  }

  function onChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    setQuantVal(e.target.value);
  }

  function onBlurQuantity() {
    let newQuantity = Number(quantVal);
    if (!newQuantity || newQuantity < 1) newQuantity = 1;
    if (newQuantity > itemData.remains) newQuantity = itemData.remains;

    setQuantVal(newQuantity.toString());
    updateLocalStorage(itemData, newQuantity);
    dispatch(changeItemQuantity(itemData.idNum, newQuantity));
  }

  useEffect(() => {
    setQuantVal(itemQuantity.toString());
  }, [itemQuantity]);

  function onDeleteItem() {
    deleteFromLocalStorage(itemData.idNum);
    dispatch(deleteItem(itemData.idNum));
  }

  return (
    <div className="cart-item__management">
      <div className="cart-item__quantity">
        <button
          className="cart-item__minus-btn body-text3"
          type="button"
          data-item={itemData.idNum.toString()}
          onClick={onManageQuantity.bind(null, "decrease")}
          disabled={itemQuantity <= 1}
        >
          −
        </button>
        <input
          className="cart-item__quantity-number body-text2"
          type="number"
          data-item={itemData.idNum.toString()}
          id={`cart-item${itemData.idNum.toString()}-quantity`}
          value={quantVal}
          onChange={onChangeQuantity}
          onBlur={onBlurQuantity}
        />
        <button
          className="cart-item__plus-btn body-text3"
          type="button"
          data-item={itemData.idNum.toString()}
          onClick={onManageQuantity.bind(null, "increase")}
          disabled={itemQuantity >= itemData.remains}
        >
          +
        </button>
      </div>
      <p
        className="cart-item__remains caption caption--coral"
        data-item={idNumStr}
        id={`cart-item${idNumStr}-remains`}
      >
        {remainsComment}
      </p>
      <div className="cart-item__buttons">
        <button
          className="cart-item__buttons-favourite"
          type="button"
          data-id={idNumStr}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.03386 4.05857C2.2658 4.75224 1.76675 5.83284 1.99484 7.42928C2.22323 9.02783 3.26485 10.6852 4.80427 12.3478C6.25856 13.9184 8.10953 15.4437 9.99986 16.874C11.8902 15.4437 13.7412 13.9184 15.1955 12.3478C16.7349 10.6852 17.7765 9.02783 18.0049 7.4293C18.2329 5.83285 17.7339 4.75224 16.9658 4.05856C16.1765 3.34572 15.0549 3 13.9999 3C12.1318 3 11.0922 4.08479 10.5176 4.68443C10.458 4.7466 10.4034 4.80356 10.3534 4.85355C10.1582 5.04882 9.84157 5.04882 9.64631 4.85355C9.59632 4.80356 9.54173 4.7466 9.48215 4.68443C8.90748 4.08479 7.86788 3 5.99986 3C4.94486 3 3.82316 3.34573 3.03386 4.05857ZM2.36361 3.31643C3.3736 2.40427 4.75192 2 5.99986 2C8.07114 2 9.3453 3.11257 9.99986 3.77862C10.6544 3.11257 11.9286 2 13.9999 2C15.2478 2 16.6261 2.40428 17.6361 3.31644C18.6673 4.24776 19.2668 5.66715 18.9948 7.5707C18.7232 9.47217 17.5148 11.3148 15.9293 13.0272C14.3354 14.7486 12.3063 16.3952 10.2999 17.9C10.1221 18.0333 9.87764 18.0333 9.69986 17.9C7.69344 16.3952 5.66434 14.7485 4.0705 13.0272C2.48494 11.3148 1.27656 9.47217 1.00489 7.57072C0.732921 5.66716 1.3324 4.24776 2.36361 3.31643Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          className="cart-item__buttons-delete"
          type="button"
          data-id={idNumStr}
          onClick={onDeleteItem}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
