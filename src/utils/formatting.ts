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

//Форматирование комментария по числу товаров
export const quantityFormatting = function (quantity: number): string {
  let quantityComment;
  if (quantity % 10 === 1 && quantity % 100 !== 11) {
    quantityComment = quantity.toString() + " товар";
  } else if (
    quantity % 10 >= 2 &&
    quantity % 10 <= 4 &&
    (quantity % 100 < 10 || quantity % 100 >= 20)
  ) {
    quantityComment = quantity.toString() + " товара";
  } else {
    quantityComment = quantity.toString() + " товаров";
  }
  return quantityComment;
};

//Форматирование комментария по отсутствию товаров
export const missingFormatting = function (quantity: number): string {
  let missingComment;

  if (quantity % 10 === 1 && quantity % 100 !== 11) {
    missingComment = "Отсутствует · ";
  } else {
    missingComment = "Отсутствуют · ";
  }

  return missingComment + quantityFormatting(quantity);
};

//Формулировка комментария по остаткам товара
export function formatRemainsComment(remainsValue: number, maxLimit: number) {
  //при превышении указанного лимита комментарий про остатки не показывается
  if (remainsValue > maxLimit) {
    return;
  }

  if (!remainsValue && remainsValue !== 0) {
    return;
  } else if (remainsValue === 0) {
    return `Осталось ${remainsValue.toString()} шт.`;
  } else if (remainsValue.toString().match(/\d*11$/)) {
    return `Осталось ${remainsValue.toString()} шт.`;
  } else if (remainsValue.toString().match(/\d*1$/)) {
    return `Осталась ${remainsValue.toString()} шт.`;
  } else {
    return `Осталось ${remainsValue.toString()} шт.`;
  }
}
