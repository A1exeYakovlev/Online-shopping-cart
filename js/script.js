"use strict";

////Объекты с товарами

const cartItem1Obj = {
  name: "Футболка UZcotton мужская",
  properties: { Цвет: "белый", Размер: 56 },
  storage: "Коледино WB",
  seller: "OOO Вайлдберриз",
  remains: 3,
  discPrice: { value: 522, currency: "сом" },
  fullPrice: { value: 1051, currency: "сом" },
  delivery: [{ date: "5—6 февраля", quantity: 3 }, { date: "7—8 февраля", quantity: 0 }],
  imgAlt: "Футболка мужская",
  idNum: 1
}

const cartItem2Obj = {
  name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
  properties: { Цвет: "прозрачный" },
  storage: "Коледино WB",
  seller: "OOO Мегапрофстиль",
  remains: 300,
  discPrice: { value: 10500.235, currency: "сом" },
  fullPrice: { value: 11500.235, currency: "сом" },
  delivery: [{ date: "5—6 февраля", quantity: 184 }, { date: "7—8 февраля", quantity: 116 }],
  imgAlt: "Силиконовый чехол для iPhone",
  idNum: 2
}

const cartItem3Obj = {
  name: "Карандаши цветные Faber-Castell \"Замок\", набор 24 цвета, заточенные, шестигранные, Faber-Castell",
  properties: {},
  storage: "Коледино WB",
  seller: "OOO Вайлдберриз",
  remains: 4,
  discPrice: { value: 247, currency: "сом" },
  fullPrice: { value: 475, currency: "сом" },
  delivery: [{ date: "5—6 февраля", quantity: 4 }, { date: "7—8 февраля", quantity: 0 }],
  imgAlt: "Набор цветных карандашей",
  idNum: 3
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
const cartItem4El = document.getElementById("cart-item4");
const cartItem5El = document.getElementById("cart-item5");
const cartItem6El = document.getElementById("cart-item6");
const cartItemElArr = [cartItem1El, cartItem2El, cartItem3El, cartItem4El, cartItem5El, cartItem6El];

const selectAllCheckboxEl = document.querySelector(".cart__selectAll-input");
//selectCheckboxEl включает в себя selectAllCheckboxEl
const selectCheckboxEl = document.querySelectorAll(".cart-item__select-input");

const cartBadgeEl = document.querySelectorAll(".cart-badge");
const collapseBtnEl = document.querySelectorAll(".collapse-btn");
const cartItems = document.querySelector(".cart__items");
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
const itemsTopQuantEl = document.querySelectorAll(".items-top-quantity");
const selectedResultQuantEl = document.querySelectorAll(".items-result-quantity");
const itemsTopSumEl = document.getElementById("items-top-sum");
const missItemsTopEl = document.querySelector(".cart__missing-title");
const selectedResultCostEl = document.querySelectorAll(".items-result-cost");
const selectedResultFullPriceEl = document.querySelectorAll(".items-result-full");
const selectedResultDiscountEl = document.querySelectorAll(".items-result-discount");
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
function remainsComment(remainsValue, maxLimit) {
  //при превышении указанного лимита комментарий про остатки не показывается
  if (remainsValue > maxLimit) { return };

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

//Форматирование комментария по отсутствию товаров
const missingFormatting = function (quantity) {
  let missingComment;

  if (quantity % 10 === 1 && quantity % 100 !== 11) {
    missingComment = "Отсутствует · ";
  }

  else {
    missingComment = "Отсутствуют · ";
  }

  return missingComment + quantityFormatting(quantity);;
};

////Заполнение начальных значений

//Quantity
let item1QuantVal = 1;
let item2QuantVal = 1;
let item3QuantVal = 1;
const itemQuantValArr = [item1QuantVal, item2QuantVal, item3QuantVal];
item1QuantEl.value = item1QuantVal;
item2QuantEl.value = item2QuantVal;
item3QuantEl.value = item3QuantVal;

let item1RemainsVal = cartItem1Obj.remains - item1QuantVal;
let item2RemainsVal = cartItem2Obj.remains - item2QuantVal;
let item3RemainsVal = cartItem3Obj.remains - item3QuantVal;
const itemRemainsValArr = [item1RemainsVal, item2RemainsVal, item3RemainsVal]

item1RemainsEl.textContent = remainsComment(item1RemainsVal, 3);
item2RemainsEl.textContent = remainsComment(item2RemainsVal, 3);
item3RemainsEl.textContent = remainsComment(item3RemainsVal, 3);

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
let itemsTopQuantVal;
let itemsTopSumVal;
let missItemsTopVal;
let selectedResultFullPriceVal;
let selectedResultDiscPriceVal;
let selectedResultDiscountVal;
let selectedResultCostVal;
let deliveryCostVal = storeTerms.deliveryCost;
let selectedResultQuantVal;
const selectedResultQuantValArr = [];
const selectedResultDiscPriceValArr = [];
const selectedResultFullPriceValArr = [];

deliveryCostEl.forEach((el) => {
  deliveryCostVal === 0 ? el.textContent = "Бесплатно" : el.textContent = deliveryCostVal;
})

//Подсчет отсутствующих товаров
const calcMissItems = function () {
  missItemsTopVal = document.querySelectorAll(".cart-item--missing").length;
  missItemsTopEl.textContent = missingFormatting(missItemsTopVal);
}

calcMissItems();

// Чекбокс "Выбрать все"
selectAllCheckboxEl.addEventListener("click", function () {
  selectCheckboxEl.forEach((el) => {
    el.checked = selectAllCheckboxEl.checked;
  })
})

//пересчет данных после клика на чекбоксе
selectCheckboxEl.forEach((el) => {
  el.addEventListener(
    "click", function () {
      calcResult();
      renderDelivery();

      //снятие галочки с "выбрать все"
      if (el.dataset.item !== "all") {
        if (!this.checked) { selectAllCheckboxEl.checked = false; };
      }
    })
})

////Расчет количества товаров для доставки по датам
const renderDelivery = function () {
  const deliveryDateWrap = document.querySelector(".delivery__date-wrap");
  deliveryDateWrap.innerHTML = "";

  //объект заказываемых товаров, группировка по датам доставки
  const deliveryDatesGrouped = {};
  //повторная декларация переменной для обновления DOM (если остались чекбоксы ранее удаленных товаров)
  const selectCheckboxEl = document.querySelectorAll(".cart-item__select-input");
  //проходим по всем чекбоксам и отбираем только выбранные товары
  selectCheckboxEl.forEach((el) => {
    if (el.checked && el.dataset.item !== "all") {
      const selectedItemNum = el.dataset.item;
      const selectedItem = cartItemObjArr[selectedItemNum - 1];

      let firstDelivery;
      let secondDelivery;
      //проходим по каждой дате поставки в объекте товара 
      selectedItem.delivery.forEach((delivery) => {
        const dateSlot = delivery.date;

        //берем даты поставок из объектов товаров как ключи для объекта группировки
        const groupItemsByDates = function () {
          if (!deliveryDatesGrouped[dateSlot]) {
            deliveryDatesGrouped[dateSlot] = [];
          }

          deliveryDatesGrouped[dateSlot].push(selectedItem);
        }

        //первая дата доставки товара
        if (firstDelivery !== "added") {
          groupItemsByDates()
          firstDelivery = "added";

          //не хватило количества - нужна вторая дата доставки
          if (itemQuantValArr[selectedItem.idNum - 1] > delivery.quantity) {
            secondDelivery = "needed";
          }
        }

        //если первая дата доставки уже добавлена и нужно добавление второй даты доставки
        else if (firstDelivery === "added" && secondDelivery === "needed") {
          groupItemsByDates()
        }
      });
    }
  })

  //создаем html для каждой даты поставок
  for (const dateSlot in deliveryDatesGrouped) {
    if (deliveryDatesGrouped[dateSlot]) {
      const deliveryDate = document.createElement("div");
      deliveryDate.classList.add("delivery__date");
      deliveryDateWrap.appendChild(deliveryDate);
      deliveryDate.innerHTML = `<p class="headline4">${dateSlot}</p>`;

      const deliveryItemsWrap = document.createElement("div");
      deliveryItemsWrap.classList.add("delivery__items-wrap");
      deliveryDate.append(deliveryItemsWrap);

      //html для каждого товара, отобранного на данную дату 
      deliveryDatesGrouped[dateSlot].forEach((item) => {
        const deliveryItem = document.createElement("div");
        deliveryItem.classList.add("delivery__item");
        deliveryItemsWrap.appendChild(deliveryItem);

        //файл 05x используется как 1x, потому что в разделе доставки картинки товаров вдвое меньшего разрешения
        deliveryItem.innerHTML = `
      <img src="img/cart__item${item.idNum}_05x.jpg"
                alt="${item.imgAlt}"
                srcset="
            img/cart__item${item.idNum}_05x.jpg 1x,
            img/cart__item${item.idNum}_1x.jpg 2x,
            img/cart__item${item.idNum}_2x.jpg 3x,
            img/cart__item${item.idNum}_3x.jpg 4x"
            />
          `

        const deliveryItemBadge = document.createElement("div");
        deliveryItemBadge.classList.add("delivery__item-quantity", "badge-count", "caption2");

        //указание количества для товаров первой даты доставки
        if (dateSlot === item.delivery[0].date) {
          deliveryItemBadge.textContent = itemQuantValArr[item.idNum - 1] <= item.delivery[0].quantity ? itemQuantValArr[item.idNum - 1] : item.delivery[0].quantity;
        }

        //указание оставшегося количества для товаров второй даты доставки
        if ((itemQuantValArr[item.idNum - 1] > item.delivery[0].quantity) && (dateSlot === item.delivery[1].date)) {
          deliveryItemBadge.textContent = itemQuantValArr[item.idNum - 1] - item.delivery[0].quantity;
        }

        deliveryItem.appendChild(deliveryItemBadge)

        //Простановка стилей значкам с количеством товара
        deliveryItemBadge.classList.remove("badge-count--1digit");
        deliveryItemBadge.classList.remove("badge-count--2digit");
        deliveryItemBadge.classList.remove("badge-count--3digit");

        if (itemQuantValArr[item.idNum - 1] > 1 && itemQuantValArr[item.idNum - 1] < 10) {
          deliveryItemBadge.classList.add("badge-count--1digit");
        }

        if (itemQuantValArr[item.idNum - 1] >= 10 && itemQuantValArr[item.idNum - 1] < 100) {
          deliveryItemBadge.classList.add("badge-count--2digit");
        }

        if (itemQuantValArr[item.idNum - 1] >= 100) {
          deliveryItemBadge.classList.add("badge-count--3digit");
        }
      })
    }
  }
}

renderDelivery();

////Расчет суммарных значений 

//Сумма по товарам в корзине наверху при сворачивании блока
const calcTopSum = function () {

  itemsTopQuantVal = itemQuantValArr.reduce((sum, item) => sum += item);
  itemsTopQuantEl.forEach((el) => { el.textContent = quantityFormatting(itemsTopQuantVal) });

  //показываем общее количество товаров над значком корзины
  cartBadgeEl.forEach((el) => {
    el.textContent = itemsTopQuantVal;

    if (itemsTopQuantVal === 0) {
      el.classList.remove("badge-count--1digit");
      el.classList.remove("badge-count--2digit");
      el.classList.remove("badge-count--3digit");
    }

    if (itemsTopQuantVal > 0 && itemsTopQuantVal < 10) {
      el.classList.remove("badge-count--2digit");
      el.classList.remove("badge-count--3digit");
      el.classList.add("badge-count--1digit");
    }

    if (itemsTopQuantVal >= 10 && itemsTopQuantVal < 100) {
      el.classList.remove("badge-count--1digit");
      el.classList.remove("badge-count--3digit");
      el.classList.add("badge-count--2digit");
    }

    if (itemsTopQuantVal >= 100) {
      el.classList.remove("badge-count--1digit");
      el.classList.remove("badge-count--2digit");
      el.classList.add("badge-count--3digit");
    }
  });

  itemsTopSumVal = itemDiscPriceValArr.reduce((sum, item) => sum += item);
  itemsTopSumEl.textContent = priceFormatting(itemsTopSumVal, "largeSpace");
}

calcTopSum();

//Итоговый результат расчетов по выбранным товарам с учетом стоимости доставки

const calcResult = function () {
  //Cбор значений по выбранным товарам
  selectCheckboxEl.forEach((el) => {

    if (el.checked && el.dataset.item !== "all") {
      selectedResultQuantValArr.push(itemQuantValArr[el.dataset.item - 1]);
      selectedResultDiscPriceValArr.push(itemDiscPriceValArr[el.dataset.item - 1]);
      selectedResultFullPriceValArr.push(itemFullPriceValArr[el.dataset.item - 1]);
    }
  });

  //подсчет сумм значений по выбранным товарам
  selectedResultQuantValArr.length === 0 ? selectedResultQuantVal = 0 : selectedResultQuantVal = selectedResultQuantValArr.reduce((sum, item) => sum += item);
  selectedResultDiscPriceValArr.length === 0 ? selectedResultDiscPriceVal = 0 : selectedResultDiscPriceVal = selectedResultDiscPriceValArr.reduce((sum, item) => sum += item);
  selectedResultFullPriceValArr.length === 0 ? selectedResultFullPriceVal = 0 : selectedResultFullPriceVal = selectedResultFullPriceValArr.reduce((sum, item) => sum += item);

  //вывод результатов
  selectedResultQuantEl.forEach((el) => { el.textContent = quantityFormatting(selectedResultQuantVal) });
  selectedResultFullPriceEl.forEach((el) => { el.textContent = priceFormatting(selectedResultFullPriceVal, "largeSpace") });

  selectedResultDiscountVal = selectedResultFullPriceVal - selectedResultDiscPriceVal;
  selectedResultDiscountEl.forEach((el) => { el.textContent = "−" + priceFormatting(selectedResultDiscountVal) });

  selectedResultCostVal = selectedResultFullPriceVal - selectedResultDiscountVal + deliveryCostVal;
  selectedResultCostEl.forEach((el) => {
    el.textContent = priceFormatting(selectedResultCostVal, "largeSpace")
  });

  //очистка массивов с данными по выбранным товарам
  selectedResultQuantValArr.length = 0;
  selectedResultDiscPriceValArr.length = 0;
  selectedResultFullPriceValArr.length = 0;
}

calcResult();

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

//Удаление товара из корзины
cartItems.addEventListener("click", function (e) {
  if (!e.target) { return }

  else if (e.target.classList.contains('cart-item__buttons-delete')) {
    const wasMissItem = e.target.closest(".cart__missing");
    const clickedItem = e.target.dataset.item;
    cartItemElArr[clickedItem - 1].style.opacity = "0";

    cartItemElArr[clickedItem - 1].addEventListener('transitionend', function () {
      cartItemElArr[clickedItem - 1].remove();

      //Пересчет количества отсутствующих товаров
      if (wasMissItem) { calcMissItems() }

      else {
        //Обнуление цен и количества удаленного товара, пересчет суммарных значений (для товаров в наличии)
        itemDiscPriceValArr[clickedItem - 1] = 0;
        itemFullPriceValArr[clickedItem - 1] = 0;
        itemQuantValArr[clickedItem - 1] = 0;
        selectCheckboxEl[clickedItem].checked = false;
        calcTopSum();
        calcResult();
        renderDelivery();
      }
    })
  }
})

//функция пересчета цены с учетом количества товаров
const priceRecalc = function (clickedItem) {
  itemDiscPriceValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].discPrice.value * itemQuantValArr[clickedItem - 1];
  itemDiscPriceElArr[clickedItem - 1].textContent = priceFormatting(itemDiscPriceValArr[clickedItem - 1]);
  itemFullPriceValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].fullPrice.value * itemQuantValArr[clickedItem - 1];
  itemFullPriceElArr[clickedItem - 1].textContent = priceFormatting(itemFullPriceValArr[clickedItem - 1], "smallSpace", 6);
}

//Функционал изменения единиц одного товара кнопками +/-
function quantBtns(buttonType) {
  cartItemsWrap.addEventListener("click", function (e) {
    if (!e.target) { return }

    else if (e.target.classList.contains(`cart-item__${buttonType}-btn`)) {

      // определяем номер cart-item, в котором произошел клик
      const clickedItem = e.target.dataset.item;

      //кнопка минус выключается, когда выбрана 1 единица товара
      if (buttonType === "minus" && itemQuantValArr[clickedItem - 1] > 1) {
        itemQuantValArr[clickedItem - 1] -= 1;
        itemQuantElArr[clickedItem - 1].value = itemQuantValArr[clickedItem - 1]

        itemRemainsValArr[clickedItem - 1] += 1;
        itemRemainsElArr[clickedItem - 1].textContent = remainsComment(itemRemainsValArr[clickedItem - 1], 3);
        //убираем класс, когда уже уменьшили кол-во товара (делает кнопку серой)
        cartItemElArr[clickedItem - 1].classList.remove("maximum-number");

        //добавляем класс, если теперь выбрана только 1 единица товара
        if (itemQuantValArr[clickedItem - 1] === 1) {
          cartItemElArr[clickedItem - 1].classList.add("minimal-number");
        }

        //пересчет цен с учетом количества товаров
        priceRecalc(clickedItem);

        //пересчет суммарных значений наверху корзины
        calcTopSum();

        //пересчет результатов для выбранных товаров (clickedItem совпадает по индексу в selectCheckboxEl)
        if (selectCheckboxEl[clickedItem].checked) {
          calcResult();
          renderDelivery();
        }
      }

      //кнопка плюс выключается, когда остаток товара 0
      if (buttonType === "plus" && itemRemainsValArr[clickedItem - 1] > 0) {

        itemQuantValArr[clickedItem - 1] += 1;
        itemQuantElArr[clickedItem - 1].value = itemQuantValArr[clickedItem - 1];

        itemRemainsValArr[clickedItem - 1] -= 1;
        itemRemainsElArr[clickedItem - 1].textContent = remainsComment(itemRemainsValArr[clickedItem - 1], 3);
        //убираем класс, когда уже увеличили кол-во товара (делает кнопку серой)
        cartItemElArr[clickedItem - 1].classList.remove("minimal-number");

        //добавляем класс, если теперь остаток товара 0
        if (itemRemainsValArr[clickedItem - 1] === 0) {
          cartItemElArr[clickedItem - 1].classList.add("maximum-number");
        }

        //пересчет цен с учетом количества товаров
        priceRecalc(clickedItem);

        //пересчет суммарных значений наверху корзины
        calcTopSum();

        //пересчет результатов для выбранных товаров (clickedItem совпадает по индексу в selectCheckboxEl)
        if (selectCheckboxEl[clickedItem].checked) {
          calcResult(clickedItem);
          renderDelivery();
        }
      }
    }
  })
}
quantBtns("minus");
quantBtns("plus");

//Изменение количества товара через ввод значения пользователем
itemQuantElArr.forEach((item) => {
  item.addEventListener("input", function () {
    const inputValue = Number(item.value);
    const clickedItem = item.dataset.item;

    //если введенное количество не превышает остатки товара
    if (inputValue < cartItemObjArr[clickedItem - 1].remains && inputValue > 1) {
      itemQuantValArr[clickedItem - 1] = inputValue;
      item.value = itemQuantValArr[clickedItem - 1];
      //перерасчет новых остатков товара
      itemRemainsValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].remains - inputValue;
      //убрать полупрозрачный стиль с кнопки плюс
      cartItemElArr[clickedItem - 1].classList.remove("maximum-number");
    }
    //если введеное количество превышает остатки
    if (inputValue >= cartItemObjArr[clickedItem - 1].remains && inputValue > 1) {
      itemQuantValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].remains;
      item.value = itemQuantValArr[clickedItem - 1];
      //перерасчет новых остатков товара
      itemRemainsValArr[clickedItem - 1] = 0;
      //добавить полупрозрачный стиль на кнопку плюс
      cartItemElArr[clickedItem - 1].classList.add("maximum-number");
    }

    //убрать полупрозрачный стиль с кнопки минус
    cartItemElArr[clickedItem - 1].classList.remove("minimal-number");

    //если ввели 1 менее - ставится 1 ед.
    if (inputValue <= 1) {
      itemQuantValArr[clickedItem - 1] = 1;
      item.value = itemQuantValArr[clickedItem - 1];
      itemRemainsValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].remains - 1;
      //добавить полупрозрачный стиль на кнопку минус
      cartItemElArr[clickedItem - 1].classList.add("minimal-number");
      //убрать полупрозрачный стиль с кнопки плюс
      if (inputValue !== cartItemObjArr[clickedItem - 1].remains) { cartItemElArr[clickedItem - 1].classList.remove("maximum-number"); }
    }

    //вывод комментария по новым остаткам
    itemRemainsElArr[clickedItem - 1].textContent = remainsComment(itemRemainsValArr[clickedItem - 1], 3);

    //пересчет цен с учетом количества товаров
    priceRecalc(clickedItem);

    //пересчет суммарных значений наверху корзины
    calcTopSum();

    //пересчет результатов для выбранных товаров (clickedItem совпадает по индексу в selectCheckboxEl)
    if (selectCheckboxEl[clickedItem].checked) {
      calcResult();
      renderDelivery();
    }
  })
})

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

//Пересчет max-height в случае изменения ширины окна
const recalcCollapsHeight = function () {
  if (!cartItemsWrap.classList.contains("hide")) {
    calcCollapsHeight(cartItemsWrap);

  }
  if (!missItemsWrap.classList.contains("hide")) {
    calcCollapsHeight(missItemsWrap);
  }
}

window.addEventListener("resize", recalcCollapsHeight);