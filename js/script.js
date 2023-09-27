"use strict";

////Объекты с товарами

const cartItem1Obj = {
  name: "Футболка UZcotton мужская",
  properties: { Цвет: "белый", Размер: 56 },
  storage: "Коледино WB",
  seller: "OOO Вайлдберриз",
  quantity: 1,
  remains: 2,
  discPrice: { value: 522, currency: "сом" },
  fullPrice: { value: 1051, currency: "сом" }
}

const cartItem2Obj = {
  name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
  properties: { Цвет: "прозрачный" },
  storage: "Коледино WB",
  seller: "OOO Мегапрофстиль",
  quantity: 200,
  remains: undefined,
  discPrice: { value: 10500.235, currency: "сом" },
  fullPrice: { value: 11500.235, currency: "сом" }
}

const cartItem3Obj = {
  name: "Карандаши цветные Faber-Castell \"Замок\", набор 24 цвета, заточенные, шестигранные, Faber-Castell",
  properties: {},
  storage: "Коледино WB",
  seller: "OOO Вайлдберриз",
  quantity: 2,
  remains: 2,
  discPrice: { value: 247, currency: "сом" },
  fullPrice: { value: 475, currency: "сом" }
}

const cartItemObjArr = [cartItem1Obj, cartItem2Obj, cartItem3Obj];

////Условия расчетов
const storeTerms = {
  deliveryCost: 0,
  currency: "сом"
}

////Элементы

const cartItem1El = document.getElementById("cart-item1");
const cartItem2El = document.getElementById("cart-item2");
const cartItem3El = document.getElementById("cart-item3");
const cartItemElArr = [cartItem1El, cartItem2El, cartItem3El]

const collapseBtnEl = document.querySelectorAll(".collapse-btn");
const cartItemsWrap = document.querySelector(".cart__items-wrap");
const missItemsWrap = document.querySelector(".cart__missing-wrap");
const cartItemsTopEl = document.querySelector(".cart__items-top");

//Quantity
const item1QuantEl = document.getElementById("cart-item1-quantity");
const item2QuantEl = document.getElementById("cart-item2-quantity");
const item3QuantEl = document.getElementById("cart-item3-quantity");
const itemQuantElArr = [item1QuantEl, item2QuantEl, item3QuantEl];

const quantPlusBtns = document.querySelectorAll(".cart-item__plus-btn");
const quantMinusBtns = document.querySelectorAll(".cart-item__minus-btn");
const item1RemainsEl = document.getElementById("cart-item1-remains");
const item2RemainsEl = document.getElementById("cart-item2-remains");
const item3RemainsEl = document.getElementById("cart-item3-remains");
const itemRemainsElArr = [item1RemainsEl, item2RemainsEl, item3RemainsEl];

//Price
const currentCurrencyEl = document.querySelectorAll(".current-currency");

const item1DiscPriceEl = document.getElementById("cart-item1-disc-price");
const item2DiscPriceEl = document.getElementById("cart-item2-disc-price");
const item3DiscPriceEl = document.getElementById("cart-item3-disc-price");

const item1DiscCurEl = document.getElementById("cart-item1-disc-cur");
const item2DiscCurEl = document.getElementById("cart-item2-disc-cur");
const item3DiscCurEl = document.getElementById("cart-item3-disc-cur");

const item1FullPriceEl = document.getElementById("cart-item1-full-price");
const item2FullPriceEl = document.getElementById("cart-item2-full-price");
const item3FullPriceEl = document.getElementById("cart-item3-full-price");

const item1FullCurEl = document.getElementById("cart-item1-full-cur");
const item2FullCurEl = document.getElementById("cart-item2-full-cur");
const item3FullCurEl = document.getElementById("cart-item3-full-cur");

//Total
const itemsTotalQuantEl = document.querySelectorAll(".items-total-quantity");
const itemsTotalCostEl = document.getElementById("items-total-cost");
const resultCostEl = document.querySelectorAll(".result-cost");
const itemsTotalFullPriceEl = document.querySelectorAll(".items-total-full");
const itemsTotalDiscountEl = document.querySelectorAll(".items-total-discount");
const deliveryCostEl = document.querySelectorAll(".delivery-cost");

////Начальные функции

//Форматирование цены товара
const priceFormatting = function (priceValue, spaceSize = "smallSpace", stepSize = 3) {

  let spaceChar;
  spaceSize === "largeSpace" ? spaceChar = "\u00A0" : spaceChar = "\u200A";
  let step;

  //для чисел в 6 знаков всегда пробелы через 3 цифры. Иначе - как в аргументе.
  priceValue.toFixed().toString().length >= 6 ? step = 3 : step = stepSize;
  let stepSum = step;

  let priceArr = priceValue.toFixed().toString().split("");

  while (stepSum < priceArr.length) {
    priceArr[priceArr.length - 1 - stepSum] += spaceChar;
    stepSum += step;
  }

  return priceArr.join("");
}

//Формулировка комментария по остаткам товара
function remainsComment(remainsValue) {

  if (!remainsValue && remainsValue !== 0) { return }

  else if (remainsValue === 0) {
    return `Осталось ${remainsValue} шт.`
  }

  else if (remainsValue.toString().match(/\d*11$/)) {
    return `Осталось ${remainsValue} шт.`
  }

  else if (remainsValue.toString().match(/\d*1$/)) {
    return `Осталась ${remainsValue} шт.`
  }

  else {
    return `Осталось ${remainsValue} шт.`
  }
}

////Заполнение начальных значений

//Quantity

let item1QuantVal = cartItem1Obj.quantity;
let item2QuantVal = cartItem2Obj.quantity;
let item3QuantVal = cartItem3Obj.quantity;
const itemQuantValArr = [item1QuantVal, item2QuantVal, item3QuantVal];

item1QuantEl.textContent = item1QuantVal;
item2QuantEl.textContent = item2QuantVal;
item3QuantEl.textContent = item3QuantVal;

let item1RemainsVal = cartItem1Obj.remains;
let item2RemainsVal = cartItem2Obj.remains;
let item3RemainsVal = cartItem3Obj.remains;
const itemRemainsValArr = [item1RemainsVal, item2RemainsVal, item3RemainsVal]

item1RemainsEl.textContent = remainsComment(item1RemainsVal);
item2RemainsEl.textContent = remainsComment(item2RemainsVal);
item3RemainsEl.textContent = remainsComment(item3RemainsVal);

//Price
const currentCurrencyVal = storeTerms.currency;
currentCurrencyEl.forEach((el) => { el.textContent = "\u00A0" + currentCurrencyVal; })

let item1DiscPriceVal = cartItem1Obj.discPrice.value * item1QuantVal;
let item2DiscPriceVal = cartItem2Obj.discPrice.value * item2QuantVal;
let item3DiscPriceVal = cartItem3Obj.discPrice.value * item3QuantVal;
const itemDiscPriceValArr = [item1DiscPriceVal, item2DiscPriceVal, item3DiscPriceVal];


let item1DiscCurVal = cartItem1Obj.discPrice.currency;
let item2DiscCurVal = cartItem2Obj.discPrice.currency;
let item3DiscCurVal = cartItem3Obj.discPrice.currency;

let item1FullPriceVal = cartItem1Obj.fullPrice.value * item1QuantVal;
let item2FullPriceVal = cartItem2Obj.fullPrice.value * item2QuantVal;
let item3FullPriceVal = cartItem3Obj.fullPrice.value * item3QuantVal;
const itemFullPriceValArr = [item1FullPriceVal, item2FullPriceVal, item3FullPriceVal];

let item1FullCurVal = cartItem1Obj.fullPrice.currency;
let item2FullCurVal = cartItem2Obj.fullPrice.currency;
let item3FullCurVal = cartItem3Obj.fullPrice.currency;

item1DiscPriceEl.textContent = priceFormatting(item1DiscPriceVal);
item2DiscPriceEl.textContent = priceFormatting(item2DiscPriceVal);
item3DiscPriceEl.textContent = priceFormatting(item3DiscPriceVal);
const itemDiscPriceElArr = [item1DiscPriceEl, item2DiscPriceEl, item3DiscPriceEl];

item1DiscCurEl.textContent = "\u00A0" + item1DiscCurVal;
item2DiscCurEl.textContent = "\u00A0" + item1DiscCurVal;
item3DiscCurEl.textContent = "\u00A0" + item1DiscCurVal;

item1FullPriceEl.textContent = priceFormatting(item1FullPriceVal, "smallSpace", 6);
item2FullPriceEl.textContent = priceFormatting(item2FullPriceVal, "smallSpace", 6);
item3FullPriceEl.textContent = priceFormatting(item3FullPriceVal, "smallSpace", 6);
const itemFullPriceElArr = [item1FullPriceEl, item2FullPriceEl, item3FullPriceEl];

item1FullCurEl.textContent = "\u00A0" + item1FullCurVal;
item2FullCurEl.textContent = "\u00A0" + item2FullCurVal;
item3FullCurEl.textContent = "\u00A0" + item3FullCurVal;

//Total
let itemsTotalQuantVal;
let itemsTotalCostVal;

let itemsTotalFullPriceVal;
let itemsTotalDiscountVal;
let resultCostVal;
let deliveryCostVal = storeTerms.deliveryCost;
deliveryCostEl.forEach((el) => {
  deliveryCostVal === 0 ? el.textContent = "Бесплатно" : el.textContent = deliveryCostVal;
})

////Расчет суммарных значений по корзине
const calcTotal = function () {
  itemsTotalQuantVal = itemQuantValArr.reduce((sum, item) => sum += item);

  //Форматирование комментария по числу товаров
  const quantityFormatting = function (quantity) {
    let quantityComment;
    if (quantity % 10 === 1 && quantity % 100 !== 11) {
      quantityComment = quantity + " товар";
    }

    else if (quantity % 10 >= 2 && quantity % 10 <= 4 && (quantity % 100 < 10 || quantity % 100 >= 20)) {
      quantityComment = quantity + " товара";
    }

    else {
      quantityComment = quantity + " товаров";
    }
    return quantityComment;
  };

  itemsTotalQuantEl.forEach((el) => { el.textContent = quantityFormatting(itemsTotalQuantVal) });

  //Сумма по товарам в корзине при сворачивании блока
  itemsTotalCostVal = itemDiscPriceValArr.reduce((sum, item) => sum += item);
  itemsTotalCostEl.textContent = priceFormatting(itemsTotalCostVal, "largeSpace");

  //Итоговая сумма по товарам с учетом стоимости доставки
  itemsTotalFullPriceVal = itemFullPriceValArr.reduce((sum, item) => sum += item);
  itemsTotalFullPriceEl.forEach((el) => { el.textContent = priceFormatting(itemsTotalFullPriceVal, "largeSpace") });

  itemsTotalDiscountVal = itemsTotalFullPriceVal - itemsTotalCostVal;
  itemsTotalDiscountEl.forEach((el) => { el.textContent = "−" + priceFormatting(itemsTotalDiscountVal) });

  resultCostVal = itemsTotalFullPriceVal - itemsTotalDiscountVal + deliveryCostVal;
  resultCostEl.forEach((el) => { el.textContent = priceFormatting(resultCostVal, "largeSpace") });
}

calcTotal();

////Изменение количества товаров

//сделать серым кнопку минус, если выбрана 1 единица товара 
itemQuantValArr.forEach((item, index) => {
  if (item === 1) { cartItemElArr[index].classList.add("minimal-number") }
});

//сделать серым кнопку плюс, если осталась 1 единица товара
itemRemainsValArr.forEach((item, index) => {
  if (item === 0) {
    cartItemElArr[index].classList.add("maximum-number");
  }
})

//Функционал изменения единиц одного товара кнопками +/-
function quantBtns(buttonType) {
  cartItemsWrap.addEventListener("click", function (e) {

    if (!e.target) { return };

    if (e.target.classList.contains(`cart-item__${buttonType}-btn`)) {

      // определяем номер cart-item, в котором произошел клик
      const clickedItem = e.target.dataset.item;

      //кнопка минус не работает, когда выбрана 1 единица товара
      if (buttonType === "minus" && itemQuantValArr[clickedItem - 1] != 1) {
        itemQuantValArr[clickedItem - 1] -= 1;
        itemQuantElArr[clickedItem - 1].textContent = itemQuantValArr[clickedItem - 1]

        itemRemainsValArr[clickedItem - 1] += 1;
        itemRemainsElArr[clickedItem - 1].textContent = remainsComment(itemRemainsValArr[clickedItem - 1]);
        //убираем класс, когда уже уменьшили кол-во товара (делает кнопку серой)
        cartItemElArr[clickedItem - 1].classList.remove("maximum-number");

        //добавляем класс, если теперь выбрана только 1 единица товара
        if (itemQuantValArr[clickedItem - 1] === 1) {
          cartItemElArr[clickedItem - 1].classList.add("minimal-number");
        }
      }

      //кнопка плюс не работает, когда остаток товара 0
      if (buttonType === "plus" && itemRemainsValArr[clickedItem - 1] != 0) {

        itemQuantValArr[clickedItem - 1] += 1;
        itemQuantElArr[clickedItem - 1].textContent = itemQuantValArr[clickedItem - 1]

        itemRemainsValArr[clickedItem - 1] -= 1;
        itemRemainsElArr[clickedItem - 1].textContent = remainsComment(itemRemainsValArr[clickedItem - 1]);
        //убираем класс, когда уже увеличили кол-во товара (делает кнопку серой)
        cartItemElArr[clickedItem - 1].classList.remove("minimal-number");

        //добавляем класс, если теперь остатка товара не осталось
        if (itemRemainsValArr[clickedItem - 1] === 0) {
          cartItemElArr[clickedItem - 1].classList.add("maximum-number");
        }
      }

      //пересчет цены
      itemDiscPriceValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].discPrice.value * itemQuantValArr[clickedItem - 1]
      itemDiscPriceElArr[clickedItem - 1].textContent = priceFormatting(itemDiscPriceValArr[clickedItem - 1]);
      itemFullPriceValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].fullPrice.value * itemQuantValArr[clickedItem - 1]
      itemFullPriceElArr[clickedItem - 1].textContent = priceFormatting(itemFullPriceValArr[clickedItem - 1], "smallSpace", 6);

      //пересчет итоговых значений
      calcTotal();
    }
  })
}
quantBtns("minus");
quantBtns("plus");

////Визуальные изменения

//Расчет высоты скрываемых блоков по collapse-btn 
const calcCollapsHeight = function (collapsEl, heightVal = collapsEl.scrollHeight + "px") {
  collapsEl.style.maxHeight = heightVal;
}

calcCollapsHeight(cartItemsWrap);
calcCollapsHeight(missItemsWrap);

//Функция сокрытия блока по collapse-btn
const collapseBlock = function (blockToCollapse) {

  if (blockToCollapse.classList.contains("hide")) {
    calcCollapsHeight(blockToCollapse)
  }

  else {
    calcCollapsHeight(blockToCollapse, 0)
  }

  blockToCollapse.classList.toggle("hide");
  this.classList.toggle("collapse-btn--closed");
}

//Обработчик события сокрытия блока по collapse-btn
collapseBtnEl.forEach((btn) => {
  btn.addEventListener("click", function (e) {

    if (e.target.closest(".collapse-btn--cart-items")) {
      collapseBlock.call(this, cartItemsWrap)
      cartItemsTopEl.classList.toggle("show-summary");
    }

    if (e.target.closest(".collapse-btn--missing-items")) {
      collapseBlock.call(this, missItemsWrap)
    }

  })
});

//Пересчет max-heigth в случае изменения ширины экрана
const recalcCollapsHeight = function () {
  if (!cartItemsWrap.classList.contains("hide")) {
    calcCollapsHeight(cartItemsWrap);

  }
  if (!missItemsWrap.classList.contains("hide")) {
    calcCollapsHeight(missItemsWrap);
  }
}

window.addEventListener("resize", recalcCollapsHeight);