import { ItemProperties } from "../../shared.types";

interface CartItemPropertyProps {
  property: ItemProperties;
}

export default function CartItemProperty({ property }: CartItemPropertyProps) {
  return (
    <>
      {property.name && (
        <p
          className={
            property.name.toLowerCase() === "размер"
              ? "cart-item__properties-size"
              : ""
          }
        >
          {property.name}
          <span>{property.value && ": " + property.value.toString()}</span>
        </p>
      )}
    </>
  );
}
