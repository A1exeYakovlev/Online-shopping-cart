import { CartItemData } from "../../shared.types";

interface CartItemSellerProps {
  itemData: CartItemData;
}

export default function CartItemSeller({ itemData }: CartItemSellerProps) {
  return (
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
  );
}
