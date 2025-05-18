//Форматирование цены товара

export const formatPrice = function (
  priceValue: number,
  spaceSize: "smallSpace" | "largeSpace" = "smallSpace",
  stepSize: number = 3
): string {
  let spaceChar: string = "";
  if (spaceSize === "largeSpace") spaceChar = "\u00A0";
  if (spaceSize === "smallSpace") spaceChar = "\u200A";
  let step;

  //для чисел в 6 знаков всегда пробелы через 3 цифры. Иначе - как в аргументе.
  if (priceValue.toFixed().toString().length >= 6) step = 3;
  else step = stepSize;
  let stepSum = step;

  const priceArr = priceValue.toFixed().toString().split("");

  while (stepSum < priceArr.length) {
    priceArr[priceArr.length - 1 - stepSum] += spaceChar;
    stepSum += step;
  }

  return priceArr.join("");
};
