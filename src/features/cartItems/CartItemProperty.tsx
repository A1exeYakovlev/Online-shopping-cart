import { ItemProperties } from "../../shared.types";

interface CartItemPropertyProps {
  property: ItemProperties;
}

export default function CartItemProperty({ property }: CartItemPropertyProps) {
  return (
    <>
      {property.name && (
        <p
          className={property.showOnPic ? "cart-item__properties--on-pic" : ""}
        >
          {property.name}
          <span>{property.value && ": " + property.value.toString()}</span>
        </p>
      )}
    </>
  );
}
