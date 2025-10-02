interface RefuseDescrProps {
  bgStyle?: "smoky-dark" | "smoky";
}

export default function RefuseDescr({ bgStyle }: RefuseDescrProps) {
  return (
    <p
      className={`refuse-descr caption ${
        bgStyle === "smoky-dark"
          ? "refuse-descr--smoky-dark-bg"
          : bgStyle === "smoky"
          ? "refuse-descr--smoky-bg"
          : ""
      }`}
    >
      Обратная доставка товаров на&nbsp;склад при отказе&nbsp;&mdash;&nbsp;
      {"\u200A"}
      <span className="refuse-descr__tooltip-trigger caption caption--green">
        бесплатно
      </span>
    </p>
  );
}
