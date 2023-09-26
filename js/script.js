"use strict";

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
  discPrice: { value: 2100047, currency: "сом" },
  fullPrice: { value: 2300047, currency: "сом" }
}

const cartItem3Obj = {
  name: "Карандаши цветные Faber-Castell \"Замок\", набор 24 цвета, заточенные, шестигранные, Faber-Castell",
  properties: {},
  storage: "Коледино WB",
  seller: "OOO Вайлдберриз",
  quantity: 1,
  remains: 3,
  discPrice: { value: 494, currency: "сом" },
  fullPrice: { value: 950, currency: "сом" }
}

const cartItem1El = document.getElementById("cart-item1");
const cartItem2El = document.getElementById("cart-item2");
const cartItem3El = document.getElementById("cart-item3");

const cartItemElArr = [cartItem1El, cartItem2El, cartItem3El]

const collapseBtnEl = document.querySelectorAll(".collapse-btn");
const cartItemsWrap = document.querySelector(".cart__items-wrap");
const missItemsWrap = document.querySelector(".cart__missing-wrap");
const cartItemsTopEl = document.querySelector(".cart__items-top");

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

//Заполнение карточек товаров
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
    }
  })
}
quantBtns("minus");
quantBtns("plus");

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