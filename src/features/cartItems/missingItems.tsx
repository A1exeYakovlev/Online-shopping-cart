import { useState } from "react";
import { ShopItemsData } from "../../shared.types";
import { missingFormatting } from "../../utils/formatting";
import CartItem from "./CartItem";

interface MissingItemsProps {
  missingItems: ShopItemsData[];
  missingItemsQuantity: number;
}

export default function MissingItems({
  missingItems,
  missingItemsQuantity,
}: MissingItemsProps) {
  const [collapsedMissing, setCollapsedMissing] = useState(false);

  return (
    <section className="cart__missing">
      <div className="cart__missing-title-wrap">
        <p className="cart__missing-title headline4">
          {missingFormatting(missingItemsQuantity)}
        </p>
        <button
          className={`cart__missing-btn collapse-btn ${
            collapsedMissing ? "collapse-btn--closed" : ""
          }`}
          type="button"
          onClick={() => {
            setCollapsedMissing((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.3417 14.9117C16.966 15.2978 16.3477 15.304 15.9644 14.9254L10.1418 9.17438C10.0634 9.09694 9.93715 9.09751 9.85945 9.17566L4.15281 14.9155C3.76725 15.3033 3.14293 15.3133 2.74516 14.9381C2.33549 14.5516 2.32163 13.9045 2.71437 13.5008L9.28326 6.74912C9.67588 6.34557 10.3241 6.34557 10.7167 6.74912L17.3417 13.5585C17.7082 13.9351 17.7082 14.5351 17.3417 14.9117Z"
              fill="#9797AF"
            />
          </svg>
        </button>
      </div>
      <div
        className={`cart__missing-collapse-wrap ${
          collapsedMissing ? "hide" : ""
        }`}
      >
        <div className="cart__missing-wrap">
          {missingItems.map((item) => (
            <CartItem itemData={item} key={item.idNum} type={"missing"} />
          ))}
        </div>
      </div>
    </section>
  );
}
