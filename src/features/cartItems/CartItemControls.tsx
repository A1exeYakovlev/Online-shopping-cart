import { ShopItemsData } from "../../shared.types";
import {
  deleteFromLocalStorage,
  updateLocalStorageFav,
  updateLocalStorageQuant,
} from "../../services/localStorageServices";
import { useDispatch, useSelector } from "react-redux";
import {
  changeItemQuantity,
  deleteItem,
  toggleFavouriteItem,
} from "./cartSlice";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { formatRemainsComment } from "../../utils/formatting";
import FavouriteBtn from "../../ui/FavouriteBtn";
import DeleteBtn from "../../ui/DeleteBtn";

interface CartItemControlsProps {
  itemData: ShopItemsData;
}

export default function CartItemControls({ itemData }: CartItemControlsProps) {
  const dispatch = useDispatch();
  const idNumStr = itemData.idNum.toString();

  const userCart = useSelector((state: RootState) => state.cart);

  const { quant: itemQuantity = 1, favourite: selectedAsFavourite = false } =
    userCart.find((item) => item.idNum === itemData.idNum) || {};
  const [quantVal, setQuantVal] = useState<string>(itemQuantity.toString());

  const remainsComment = formatRemainsComment(
    itemData.remains - itemQuantity,
    3
  );

  function onManageQuantity(type: "increase" | "decrease") {
    let newQuantity = 1;
    if (type === "increase") {
      newQuantity = Math.min(itemData.remains, itemQuantity + 1);
    } else newQuantity = Math.max(1, itemQuantity - 1);

    updateLocalStorageQuant(itemData, newQuantity);
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
    updateLocalStorageQuant(itemData, newQuantity);
    dispatch(changeItemQuantity(itemData.idNum, newQuantity));
  }

  function onDeleteItem() {
    deleteFromLocalStorage(itemData.idNum);
    dispatch(deleteItem(itemData.idNum));
  }

  function onFavouriteBtn() {
    updateLocalStorageFav(itemData.idNum);
    dispatch(toggleFavouriteItem(itemData.idNum));
  }

  useEffect(() => {
    setQuantVal(itemQuantity.toString());
  }, [itemQuantity]);

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
      >
        {remainsComment}
      </p>
      <div className="cart-item__buttons">
        <FavouriteBtn
          onClickFunc={onFavouriteBtn}
          selectedAsFavourite={selectedAsFavourite}
        />
        <DeleteBtn onClickFunc={onDeleteItem} />
      </div>
    </div>
  );
}
