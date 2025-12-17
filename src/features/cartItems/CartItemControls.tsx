import {
  deleteFromLocalStorage,
  updateLocalStorageFav,
  updateLocalStorageQuant,
} from "../../services/cartLocalStorageServices";
import { useDispatch, useSelector } from "react-redux";
import {
  changeItemQuantity,
  deleteItem,
  toggleFavouriteItem,
} from "../../store/cartSlice";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { formatRemainsComment } from "../../utils/formatting";
import FavouriteBtn from "../../ui/FavouriteBtn";
import DeleteBtn from "../../ui/DeleteBtn";
import { useCartItemData } from "./hooks";

interface CartItemControlsProps {
  itemId: number;
}

export default function CartItemControls({ itemId }: CartItemControlsProps) {
  const dispatch = useDispatch();
  const itemData = useCartItemData(itemId);
  const itemIdStr = itemId.toString();

  const userCart = useSelector((state: RootState) => state.cart);

  const { quant: itemQuantity = 1, favourite: selectedAsFavourite = false } =
    userCart.find((item) => item.idNum === itemId) || {};
  const [quantVal, setQuantVal] = useState<string>(itemQuantity.toString());

  let remainsComment;
  if (itemData) {
    remainsComment = formatRemainsComment(itemData.remains - itemQuantity, 3);
  }

  function onManageQuantity(type: "increase" | "decrease") {
    if (!itemData) return;
    let newQuantity = 1;

    if (type === "increase") {
      newQuantity = Math.min(itemData.remains, itemQuantity + 1);
    } else newQuantity = Math.max(1, itemQuantity - 1);

    updateLocalStorageQuant(itemData, newQuantity);
    dispatch(changeItemQuantity(itemId, newQuantity));
  }

  function onChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    setQuantVal(e.target.value);
  }

  function onBlurQuantity() {
    if (!itemData) return;
    let newQuantity = Number(quantVal);

    if (!newQuantity || newQuantity < 1) newQuantity = 1;
    if (newQuantity > itemData.remains) newQuantity = itemData.remains;

    setQuantVal(newQuantity.toString());
    updateLocalStorageQuant(itemData, newQuantity);
    dispatch(changeItemQuantity(itemId, newQuantity));
  }

  function onDeleteItem() {
    if (!itemData) return;

    deleteFromLocalStorage(itemId);
    dispatch(deleteItem(itemId));
  }

  function onFavouriteBtn() {
    if (!itemData) return;

    updateLocalStorageFav(itemId);
    dispatch(toggleFavouriteItem(itemId));
  }

  useEffect(() => {
    setQuantVal(itemQuantity.toString());
  }, [itemQuantity]);

  return (
    <div className="cart-item__management">
      <div className="cart-item__quantity-btns quantity-btns">
        <button
          className="quantity-minus-btn body-text3"
          type="button"
          data-item={itemIdStr}
          onClick={onManageQuantity.bind(null, "decrease")}
          disabled={itemQuantity <= 1}
        >
          −
        </button>
        <input
          className="cart-item__quantity-number body-text2"
          type="number"
          data-item={itemIdStr}
          id={`cart-item${itemIdStr}-quantity`}
          value={quantVal}
          onChange={onChangeQuantity}
          onBlur={onBlurQuantity}
        />
        <button
          className="quantity-plus-btn body-text3"
          type="button"
          data-item={itemIdStr}
          onClick={onManageQuantity.bind(null, "increase")}
          disabled={itemQuantity >= (itemData?.remains || 0)}
        >
          +
        </button>
      </div>
      <p
        className="cart-item__remains caption caption--coral"
        data-item={itemIdStr}
      >
        {remainsComment}
      </p>
      <div className="cart-item__additional-buttons additional-buttons">
        <FavouriteBtn
          onClickFunc={onFavouriteBtn}
          selectedAsFavourite={selectedAsFavourite}
        />
        <DeleteBtn onClickFunc={onDeleteItem} />
      </div>
    </div>
  );
}
