import {
  userDataObj,
  pickpointsInfo,
  sellersData,
  cartItemObjArr,
  storeTerms,
} from "./model.js";

import {
  item1QuantVal,
  item2QuantVal,
  item3QuantVal,
  itemQuantValArr,
} from "./model.js";
import {
  item1QuantEl,
  item2QuantEl,
  item3QuantEl,
  itemQuantElArr,
} from "./view.js";
import { itemDiscPriceValArr, itemFullPriceValArr } from "./model.js";

import {
  item1RemainsVal,
  item2RemainsVal,
  item3RemainsVal,
  itemRemainsValArr,
} from "./model.js";
import { item1RemainsEl, item2RemainsEl, item3RemainsEl } from "./view.js";
import { remainsComment } from "./view.js";

import { currentCurrencyEl } from "./view.js";
import { currentCurrencyVal } from "./model.js";

import {
  item1DiscPriceEl,
  item2DiscPriceEl,
  item3DiscPriceEl,
} from "./view.js";
import { item1DiscCurEl, item2DiscCurEl, item3DiscCurEl } from "./view.js";
import {
  item1FullPriceEl,
  item2FullPriceEl,
  item3FullPriceEl,
} from "./view.js";
import { item1FullCurEl, item2FullCurEl, item3FullCurEl } from "./view.js";

import {
  item1DiscPriceVal,
  item2DiscPriceVal,
  item3DiscPriceVal,
} from "./model.js";
import { item1DiscCurVal, item2DiscCurVal, item3DiscCurVal } from "./model.js";
import {
  item1FullPriceVal,
  item2FullPriceVal,
  item3FullPriceVal,
} from "./model.js";
import { item1FullCurVal, item2FullCurVal, item3FullCurVal } from "./model.js";

import {
  renderDeliveryCost,
  deliverySection,
  renderMissItemsNum,
  renderDelivery,
} from "./view.js";
import { deliveryCostVal, setDeliveryCost } from "./model.js";
import { itemsTopQuantVal, itemsTopSumVal, calcTopSum } from "./model.js";
import { renderTopSum } from "./view.js";

import {
  selectedResultQuantVal,
  selectedResultDiscountVal,
  selectedResultFullPriceVal,
  selectedResultCostVal,
} from "./model.js";
import {
  selectedResultDiscPriceValArr,
  selectedResultFullPriceValArr,
  selectedResultQuantValArr,
} from "./model.js";
import { calcSelected, priceRecalc, quantRecalc } from "./model.js";
import { renderSelectedResults } from "./view.js";
import { setLimitedBtnStyle } from "./view.js";

import { handleItemDeletion } from "./view.js";
import { calcItemDeletion } from "./model.js";
import {
  selectCheckboxEl,
  selectAllCheckboxEl,
  selectAllCheckboxHandler,
} from "./view.js";

import {
  priceRerender,
  priceFormatting,
  renderRemainsComment,
} from "./view.js";
import { manageQuantBtnStyle, quantBtns } from "./view.js";

import {
  collapseBlockHandler,
  collapseBtnEl,
  calcCollapsHeight,
} from "./view.js";
import { cartItemsWrap, cartWrap, missItemsWrap, cartItems } from "./view.js";

import { toggleModal, recalcCollapsHeight } from "./view.js";
import {
  changeDeliveryBtnEl,
  changeDeliveryCloseBtnEl,
  changeDeliveryModalEl,
  resultDeliveryInterval,
} from "./view.js";
import {
  changePaymentBtnEl,
  changePaymentCloseBtnEl,
  changePaymentModalEl,
} from "./view.js";

import { changeDeliveryTabHandler, changeDeliveryTabsEl } from "./view.js";
import {
  renderSelectedPaymentHandler,
  renderSelectedDeliveryHandler,
  paymentOptionSelectBtnEl,
} from "./view.js";
import { deleteDeliveryOptionHandler, checkInstantPayHandler } from "./view.js";
import {
  renderFavouritesBadge,
  scrollToDeliverySection,
  refreshOrderBtnPrice,
} from "./view.js";
import { addingItemToFavourites } from "./model.js";

import {
  refuseDescrTooltipHandler,
  sellerTooltipHandler,
  discountTooltipHandler,
} from "./view.js";
import { calcDiscountTooltip, itemDiscVal, userDiscVal } from "./model.js";

import {
  provideInputValidationView,
  receiverFormEl,
  scroollToInvalidInput,
} from "./view.js";
import { formatPhoneNumber, formatTaxNumber } from "./view.js";

////Стартовые функции
//Применение скидки покупателя и скидок на товары
cartItemObjArr.forEach((item) => item.updateDiscPrice());

//Установить стоимость доставки
const getDeliveryCost = function () {
  if (deliverySection.classList.contains("courier-selected")) {
    setDeliveryCost("courier");
  }

  //по умолчанию доставка в пункт выдачи
  if (deliverySection.classList.contains("pickpoint-selected")) {
    setDeliveryCost("pickpoint");
  }
};

getDeliveryCost();
renderDeliveryCost(deliveryCostVal, storeTerms);

//Подсчет отсутствующих товаров
renderMissItemsNum();

//Расчет количества товаров для доставки по датам
renderDelivery(cartItemObjArr, itemQuantValArr);

//сделать серым кнопку минус и/или плюс
setLimitedBtnStyle(itemQuantValArr, itemRemainsValArr);

////Заполнение начальных значений
//Price
currentCurrencyEl.forEach((el) => {
  el.textContent = "\u00A0" + currentCurrencyVal;
});

item1DiscPriceEl.textContent = priceFormatting(item1DiscPriceVal);
item2DiscPriceEl.textContent = priceFormatting(item2DiscPriceVal);
item3DiscPriceEl.textContent = priceFormatting(item3DiscPriceVal);

item1DiscCurEl.textContent = "\u00A0" + item1DiscCurVal;
item2DiscCurEl.textContent = "\u00A0" + item2DiscCurVal;
item3DiscCurEl.textContent = "\u00A0" + item3DiscCurVal;

item1FullPriceEl.textContent = priceFormatting(
  item1FullPriceVal,
  "smallSpace",
  6
);
item2FullPriceEl.textContent = priceFormatting(
  item2FullPriceVal,
  "smallSpace",
  6
);
item3FullPriceEl.textContent = priceFormatting(
  item3FullPriceVal,
  "smallSpace",
  6
);

item1FullCurEl.textContent = "\u00A0" + item1FullCurVal;
item2FullCurEl.textContent = "\u00A0" + item2FullCurVal;
item3FullCurEl.textContent = "\u00A0" + item3FullCurVal;

//Quantity
item1QuantEl.value = item1QuantVal;
item2QuantEl.value = item2QuantVal;
item3QuantEl.value = item3QuantVal;

item1RemainsEl.textContent = remainsComment(item1RemainsVal, 3);
item2RemainsEl.textContent = remainsComment(item2RemainsVal, 3);
item3RemainsEl.textContent = remainsComment(item3RemainsVal, 3);

////Расчет суммарных значений
//Сумма по товарам в корзине наверху при сворачивании блока
calcTopSum();
renderTopSum(itemsTopQuantVal, itemsTopSumVal);

////Итоговый результат расчетов по выбранным товарам с учетом стоимости доставки
//Cбор значений по выбранным товарам
const collectSelected = function () {
  selectCheckboxEl.forEach((el) => {
    if (el.checked && el.dataset.item !== "all") {
      selectedResultQuantValArr.push(itemQuantValArr[el.dataset.item - 1]);
      selectedResultDiscPriceValArr.push(
        itemDiscPriceValArr[el.dataset.item - 1]
      );
      selectedResultFullPriceValArr.push(
        itemFullPriceValArr[el.dataset.item - 1]
      );
    }
  });
};

collectSelected();
calcSelected();
renderSelectedResults(
  selectedResultQuantVal,
  selectedResultFullPriceVal,
  selectedResultDiscountVal,
  selectedResultCostVal,
  currentCurrencyVal
);

////Изменение количества товаров
//Удаление товара из корзины
cartItems.addEventListener("click", function (e) {
  const clickedItem = e.target.dataset.id;

  if (handleItemDeletion(e) == "itemInStock") {
    //Обнуление цен и количества удаленного товара, пересчет суммарных значений (для товаров в наличии)
    calcItemDeletion(clickedItem);
    calcTopSum();
    renderTopSum(itemsTopQuantVal, itemsTopSumVal);
    collectSelected();
    calcSelected();
    renderSelectedResults(
      selectedResultQuantVal,
      selectedResultFullPriceVal,
      selectedResultDiscountVal,
      selectedResultCostVal,
      currentCurrencyVal
    );
    renderDelivery(cartItemObjArr, itemQuantValArr);
    refreshOrderBtnPrice(selectedResultDiscountVal, currentCurrencyVal);
  }
});

//Функционал изменения единиц одного товара кнопками +/-
cartItemsWrap.addEventListener("click", function (e) {
  const clickedItem = e.target.dataset.item;
  if (!clickedItem) {
    return;
  }

  if (
    e.target.classList.contains("cart-item__minus-btn") ||
    e.target.classList.contains("cart-item__plus-btn")
  ) {
    if (e.target.classList.contains("cart-item__minus-btn")) {
      quantBtns(clickedItem, "minus", itemQuantValArr, itemRemainsValArr);
    }

    if (e.target.classList.contains("cart-item__plus-btn")) {
      quantBtns(clickedItem, "plus", itemQuantValArr, itemRemainsValArr);
    }

    //пересчет цен с учетом количества товаров
    priceRecalc(clickedItem);
    priceRerender(clickedItem, itemDiscPriceValArr, itemFullPriceValArr);

    //пересчет суммарных значений наверху корзины
    calcTopSum();
    renderTopSum(itemsTopQuantVal, itemsTopSumVal);

    //пересчет результатов для выбранных товаров (clickedItem совпадает по индексу в selectCheckboxEl)
    if (selectCheckboxEl[clickedItem].checked) {
      collectSelected();
      calcSelected();
      renderSelectedResults(
        selectedResultQuantVal,
        selectedResultFullPriceVal,
        selectedResultDiscountVal,
        selectedResultCostVal,
        currentCurrencyVal
      );
      renderDelivery(cartItemObjArr, itemQuantValArr);
    }
  }
});

//Изменение количества товара через ввод значения пользователем
itemQuantElArr.forEach((item) => {
  item.addEventListener("input", function () {
    const inputValue = Number(item.value);
    const clickedItem = Number(item.dataset.item);

    quantRecalc(item, inputValue, clickedItem);
    //если введенное количество не превышает остатки товара
    if (
      inputValue < cartItemObjArr[clickedItem - 1].remains &&
      inputValue > 1
    ) {
      //убрать полупрозрачный стиль с кнопки плюс
      manageQuantBtnStyle(clickedItem, "plus", "remove");
    }
    //если введеное количество превышает остатки
    if (
      inputValue >= cartItemObjArr[clickedItem - 1].remains &&
      inputValue > 1
    ) {
      //добавить полупрозрачный стиль на кнопку плюс
      manageQuantBtnStyle(clickedItem, "plus", "add");
    }

    //убрать полупрозрачный стиль с кнопки минус
    manageQuantBtnStyle(clickedItem, "minus", "remove");

    //если ввели 1 менее - ставится 1 ед.
    if (inputValue <= 1) {
      //добавить полупрозрачный стиль на кнопку минус
      manageQuantBtnStyle(clickedItem, "minus", "add");
      //убрать полупрозрачный стиль с кнопки плюс
      if (inputValue !== cartItemObjArr[clickedItem - 1].remains) {
        manageQuantBtnStyle(clickedItem, "plus", "remove");
      }
    }

    //вывод комментария по новым остаткам
    renderRemainsComment(clickedItem, itemRemainsValArr);

    //пересчет цен с учетом количества товаров
    priceRecalc(clickedItem);

    //пересчет суммарных значений наверху корзины
    calcTopSum();
    renderTopSum(itemsTopQuantVal, itemsTopSumVal);

    //пересчет результатов для выбранных товаров (clickedItem совпадает по индексу в selectCheckboxEl)
    if (selectCheckboxEl[clickedItem].checked) {
      collectSelected();
      calcSelected();
      renderSelectedResults(
        selectedResultQuantVal,
        selectedResultFullPriceVal,
        selectedResultDiscountVal,
        selectedResultCostVal,
        currentCurrencyVal
      );
      renderDelivery(cartItemObjArr, itemQuantValArr);
    }
  });
});

// Чекбокс "Выбрать все"
selectAllCheckboxEl.addEventListener("click", selectAllCheckboxHandler);

//пересчет данных после клика на чекбоксе
selectCheckboxEl.forEach((el) => {
  el.addEventListener("click", function () {
    collectSelected();
    calcSelected();
    renderSelectedResults(
      selectedResultQuantVal,
      selectedResultFullPriceVal,
      selectedResultDiscountVal,
      selectedResultCostVal,
      currentCurrencyVal
    );
    renderDelivery(cartItemObjArr, itemQuantValArr);

    //снятие галочки с "выбрать все"
    if (el.dataset.item !== "all") {
      if (!this.checked) {
        selectAllCheckboxEl.checked = false;
      }
    }
  });
});

////Сокрытие блока по collapse-btn
//Расчет высоты скрываемых блоков
calcCollapsHeight(cartItemsWrap);
calcCollapsHeight(missItemsWrap);

collapseBtnEl.forEach((btn) => {
  btn.addEventListener("click", collapseBlockHandler);
});

window.addEventListener("resize", recalcCollapsHeight);

////Функция управления открытием и закрытием модального окна
//Окно смены способа доставки
toggleModal(
  changeDeliveryModalEl,
  changeDeliveryBtnEl,
  changeDeliveryCloseBtnEl
);
//Окно смены способа оплаты
toggleModal(changePaymentModalEl, changePaymentBtnEl, changePaymentCloseBtnEl);

//Выбор вида доставки
changeDeliveryTabsEl.addEventListener("click", function (e) {
  const clickedTab = e.target.closest(".change-delivery__tab");
  if (!clickedTab) {
    return;
  }

  changeDeliveryTabHandler(clickedTab);
});

//рендер способа оплаты после нажатия на кнопку Выбрать
paymentOptionSelectBtnEl.addEventListener("click", function (e) {
  e.preventDefault();
  const selectedRadioBtnEl = document.querySelector(
    ".change-payment__option-input:checked"
  );

  if (!selectedRadioBtnEl) {
    return;
  }

  renderSelectedPaymentHandler(selectedRadioBtnEl, userDataObj);
});

//рендер способа доставки после нажатия на кнопку Выбрать
changeDeliveryModalEl.addEventListener("click", function (e) {
  const clickedBtn = e.target.closest(".change-delivery__select-btn");

  if (!clickedBtn) {
    return;
  }
  e.preventDefault();

  renderSelectedDeliveryHandler(clickedBtn, userDataObj, pickpointsInfo);

  getDeliveryCost();
  renderDeliveryCost(deliveryCostVal, storeTerms);
  collectSelected();
  calcSelected();
  renderSelectedResults(
    selectedResultQuantVal,
    selectedResultFullPriceVal,
    selectedResultDiscountVal,
    selectedResultCostVal,
    currentCurrencyVal
  );
});

//Удаление опции из модального окна доставки по нажатию кнопки
changeDeliveryModalEl.addEventListener("click", function (e) {
  const clickedBtn = e.target.closest(".change-delivery__option-delete-btn");

  if (!clickedBtn) {
    return;
  }
  e.preventDefault();

  deleteDeliveryOptionHandler(e, clickedBtn);
});

//Добавление товара в избранное
cartWrap.addEventListener("click", function (e) {
  const clickedBtn = e.target.closest(".cart-item__buttons-favourite");

  if (!clickedBtn) {
    return;
  }

  clickedBtn.classList.toggle("selected");
  const clickedItemId = Number(clickedBtn.dataset.id);

  //добавление id товара в массив избранных товаров пользователя
  addingItemToFavourites(clickedItemId);

  renderFavouritesBadge(userDataObj);
});

////тултип о бесплатном возврате
cartWrap.addEventListener("click", function (e) {
  const tooltipTriggerEl = e.target.closest(".refuse-descr__tooltip-trigger");

  //блок клика по открытому тултипу
  if (e.target.closest(".active-tooltip")) {
    e.stopPropagation();
    return;
  }

  if (!tooltipTriggerEl) {
    return;
  }
  //блок срабатывания обработчика закрытия тултипа при открывающем клике
  e.stopPropagation();

  refuseDescrTooltipHandler(tooltipTriggerEl);
});

//переход от интервалов доставки в итогах (десктоп) к секции про доставку
resultDeliveryInterval.addEventListener("click", scrollToDeliverySection);

//Чекбокс Списать оплату сразу
cartWrap.addEventListener("click", function (e) {
  const clicked = e.target.closest(".pay-option__instant-pay-input");

  if (!clicked) {
    return;
  }

  checkInstantPayHandler(clicked);
  refreshOrderBtnPrice(selectedResultDiscountVal, currentCurrencyVal);
});

////тултип о продавце
cartWrap.addEventListener("click", function (e) {
  const clicked = e.target.closest(".cart-item__seller-tooltip-btn");

  //блок клика по открытому тултипу
  if (e.target.closest(".tooltip")) {
    e.stopPropagation();
    return;
  }

  if (!clicked) {
    return;
  }

  //блок срабатывания обработчика закрытия тултипа при открывающем клике
  e.stopPropagation();
  sellerTooltipHandler(clicked, sellersData);
});

////тултип о примененных скидках
cartWrap.addEventListener("click", function (e) {
  const clicked = e.target.closest(".cart-item__price-full-wrap");

  //блок клика по открытому тултипу
  if (e.target.closest(".tooltip")) {
    e.stopPropagation();
    return;
  }

  if (!clicked) {
    return;
  }
  //блок срабатывания обработчика закрытия тултипа при открывающем клике
  e.stopPropagation();
  const itemId = clicked.dataset.id;
  const itemObj = cartItemObjArr[itemId - 1];
  const tooltip = clicked.querySelector(".cart-item__price-tooltip");

  calcDiscountTooltip(itemId, itemObj);
  discountTooltipHandler(
    itemObj,
    userDataObj,
    userDiscVal,
    itemDiscVal,
    tooltip
  );
});

////валидация формы получателя товара
const initValidation = function () {
  document.body.dataset.jsEnabled = "true";
  receiverFormEl.setAttribute("novalidate", "");
  document.querySelectorAll(".js-validate").forEach((inputEl) => {
    inputEl.addEventListener("blur", (e) => {
      inputValidation(e.target);
    });

    if (inputEl.classList.contains("receiver__phone-input")) {
      inputEl.addEventListener("input", formatPhoneNumber);
    }

    if (inputEl.classList.contains("receiver__tax-number-input")) {
      inputEl.addEventListener("input", formatTaxNumber);
    }

    inputEl.setAttribute("aria-invalid", "false");
  });
};

const inputValidation = function (inputEl) {
  let inputIsInvalid;

  if (!submitStatus) {
    inputIsInvalid = !inputEl.checkValidity() && !inputEl.validity.valueMissing;
  }

  if (submitStatus) {
    inputIsInvalid = !inputEl.checkValidity();
  }

  provideInputValidationView(inputEl, inputIsInvalid);

  if (inputIsInvalid && !inputEl.classList.contains("live-validation")) {
    inputEl.addEventListener("input", () => {
      inputEl.classList.add("live-validation");
      inputValidation(inputEl);
    });
  }
};

const submitFormHandler = function (e) {
  if (selectedResultDiscountVal === 0) {
    e.preventDefault();
    return;
  }

  submitStatus = true;
  document.querySelectorAll(".js-validate").forEach((inputEl) => {
    inputValidation(inputEl);
  });

  const formEl = e.target;
  const formIsValid = formEl.checkValidity();

  if (!formIsValid) {
    e.preventDefault();
  }
  scroollToInvalidInput(formEl);
};

let submitStatus = false;
initValidation();
receiverFormEl.addEventListener("submit", submitFormHandler);
