////Элементы
const cartItem1El = document.getElementById("cart-item1");
const cartItem2El = document.getElementById("cart-item2");
const cartItem3El = document.getElementById("cart-item3");
const cartItem4El = document.getElementById("cart-item4");
const cartItem5El = document.getElementById("cart-item5");
const cartItem6El = document.getElementById("cart-item6");
const cartItemElArr = [cartItem1El, cartItem2El, cartItem3El, cartItem4El, cartItem5El, cartItem6El];

export const selectAllCheckboxEl = document.querySelector(".cart__selectAll-input");
//selectCheckboxEl включает в себя selectAllCheckboxEl
export const selectCheckboxEl = document.querySelectorAll(".cart-item__select-input");

export const changePaymentModalEl = document.querySelector(".change-payment");
export const changePaymentBtnEl = document.querySelectorAll(".payment__change-btn");
export const changePaymentCloseBtnEl = document.querySelector(".change-payment__close-btn")
const overlayEl = document.querySelector(".overlay");
const paymentCardEl = document.querySelectorAll(".payment__card");
export const paymentOptionSelectBtnEl = document.querySelector(".change-payment__select-btn");
export const changeDeliveryModalEl = document.querySelector(".change-delivery");
export const changeDeliveryBtnEl = document.querySelectorAll(".delivery-change-btn");
export const changeDeliveryCloseBtnEl = document.querySelector(".change-delivery__close-btn");
export const changeDeliveryTabsEl = document.querySelector(".change-delivery__tabs");
const deliveryOptionSelectBtnEl = document.querySelectorAll(".change-delivery__select-btn");
export const deliverySection = document.querySelector(".delivery");

const cartBadgeEl = document.querySelectorAll(".cart-badge");
const favBadgeEl = document.querySelector(".navbar__favourites-badge")
export const collapseBtnEl = document.querySelectorAll(".collapse-btn");
export const cartWrap = document.querySelector(".cart__wrap");
export const cartItems = document.querySelector(".cart__items");
export const cartItemsWrap = document.querySelector(".cart__items-wrap");
export const missItemsWrap = document.querySelector(".cart__missing-wrap");
const cartItemsTopEl = document.querySelector(".cart__items-top");

export const receiverFormEl = document.getElementById("receiver-form");
const taxNumberDescr = document.querySelector(".receiver__tax-number-descr");

//Quantity
export const item1QuantEl = document.getElementById("cart-item1-quantity");
export const item2QuantEl = document.getElementById("cart-item2-quantity");
export const item3QuantEl = document.getElementById("cart-item3-quantity");
export const itemQuantElArr = [item1QuantEl, item2QuantEl, item3QuantEl];

const quantPlusBtns = document.querySelectorAll(".cart-item__plus-btn");
const quantMinusBtns = document.querySelectorAll(".cart-item__minus-btn");
export const item1RemainsEl = document.getElementById("cart-item1-remains");
export const item2RemainsEl = document.getElementById("cart-item2-remains");
export const item3RemainsEl = document.getElementById("cart-item3-remains");
const itemRemainsElArr = [item1RemainsEl, item2RemainsEl, item3RemainsEl];

//Price
export const currentCurrencyEl = document.querySelectorAll(".current-currency");

export const item1DiscPriceEl = document.getElementById("cart-item1-disc-price");
export const item2DiscPriceEl = document.getElementById("cart-item2-disc-price");
export const item3DiscPriceEl = document.getElementById("cart-item3-disc-price");
const itemDiscPriceElArr = [item1DiscPriceEl, item2DiscPriceEl, item3DiscPriceEl];

export const item1DiscCurEl = document.getElementById("cart-item1-disc-cur");
export const item2DiscCurEl = document.getElementById("cart-item2-disc-cur");
export const item3DiscCurEl = document.getElementById("cart-item3-disc-cur");

export const item1FullPriceEl = document.getElementById("cart-item1-full-price");
export const item2FullPriceEl = document.getElementById("cart-item2-full-price");
export const item3FullPriceEl = document.getElementById("cart-item3-full-price");
const itemFullPriceElArr = [item1FullPriceEl, item2FullPriceEl, item3FullPriceEl];

export const item1FullCurEl = document.getElementById("cart-item1-full-cur");
export const item2FullCurEl = document.getElementById("cart-item2-full-cur");
export const item3FullCurEl = document.getElementById("cart-item3-full-cur");

//Total
const itemsTopQuantEl = document.querySelectorAll(".items-top-quantity");
const selectedResultQuantEl = document.querySelectorAll(".items-result-quantity");
const itemsTopSumEl = document.getElementById("items-top-sum");
const missItemsTopEl = document.querySelector(".cart__missing-title");
const selectedResultCostEl = document.querySelectorAll(".items-result-cost");
const selectedResultFullPriceEl = document.querySelectorAll(".items-result-full");
const selectedResultDiscountEl = document.querySelectorAll(".items-result-discount");
const deliveryCostEl = document.querySelectorAll(".delivery-cost");
const resultCostWrapEl = document.querySelectorAll(".result__total-price");

export const resultDeliveryInterval = document.querySelector(".result__date");
const instantPayCheckbox = document.querySelectorAll(".pay-option__instant-pay-input")

//Форматирование цены товара
export const priceFormatting = function (priceValue, spaceSize = "smallSpace", stepSize = 3) {
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
export function remainsComment(remainsValue, maxLimit) {
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

////Начальное форматирование
//Отразить стоимость доставки
export const renderDeliveryCost = function (deliveryCostVal, storeTerms) {
    deliveryCostEl.forEach((el) => {
        deliveryCostVal === 0 ? el.textContent = "Бесплатно" : el.textContent = `${deliveryCostVal} ${storeTerms.currency}`;
    })
}

//Подсчет отсутствующих товаров
export const renderMissItemsNum = function () {
    const missItemsTopVal = document.querySelectorAll(".cart-item--missing").length;
    missItemsTopEl.textContent = missingFormatting(missItemsTopVal);
}

// Чекбокс "Выбрать все"
export const selectAllCheckboxHandler = function () {
    selectCheckboxEl.forEach((el) => {
        el.checked = selectAllCheckboxEl.checked;
    })
}

//вывод интервала доставок в результаты
const renderDeliveryInterval = function () {
    const deliveryDateEl = document.querySelectorAll(".delivery__date")
    let deliveryDate;
    let deliveryMonth;

    const extractDeliveryInterval = function (dateEl) {
        const deliveryInterval = dateEl.querySelector("p").textContent;
        const formattedInterval = deliveryInterval.replace("—", "–");
        const grouppedInterval = formattedInterval.match(/(\d{1,2}|\d{1,2}–\d{1,2})\s([а-я]+)$/i);
        deliveryDate = grouppedInterval[1];
        deliveryMonth = grouppedInterval[2].slice(0, 3);
    }

    if (deliveryDateEl.length === 1) {
        extractDeliveryInterval(deliveryDateEl[0])
        resultDeliveryInterval.textContent = `${deliveryDate} ${deliveryMonth}`;
    }

    if (deliveryDateEl.length > 1) {
        extractDeliveryInterval(deliveryDateEl[0])
        const intervalStart = deliveryDate.match(/^\d{1,2}/);
        extractDeliveryInterval(deliveryDateEl[deliveryDateEl.length - 1])
        const intervalEnd = deliveryDate.match(/\d{1,2}$/);
        resultDeliveryInterval.textContent = `${intervalStart}–${intervalEnd} ${deliveryMonth}`;
    }
}

////Расчет количества товаров для доставки по датам
export const renderDelivery = function (cartItemObjArr, itemQuantValArr) {
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
                renderBadgeNum(deliveryItemBadge, 2);
            })
        }
    }
    renderDeliveryInterval();
}

//Функция простановки стилей значкам с количеством товара
const renderBadgeNum = function (badgeEl, minNumtoShow) {
    const badgeNumberVal = Number(badgeEl.textContent);
    badgeEl.classList.remove("badge-count--1digit");
    badgeEl.classList.remove("badge-count--2digit");
    badgeEl.classList.remove("badge-count--3digit");

    //minNumtoShow - меньше этого числа значек не отображается
    if (badgeNumberVal >= minNumtoShow && badgeNumberVal < 10) {
        badgeEl.classList.add("badge-count--1digit");
    }

    if (badgeNumberVal >= 10 && badgeNumberVal < 100) {
        badgeEl.classList.add("badge-count--2digit");
    }

    if (badgeNumberVal >= 100) {
        badgeEl.classList.add("badge-count--3digit");
    }
}

////Расчет суммарных значений 
//Сумма по товарам в корзине наверху при сворачивании блока
export const renderTopSum = function (itemsTopQuantVal, itemsTopSumVal) {
    itemsTopQuantEl.forEach((el) => { el.textContent = quantityFormatting(itemsTopQuantVal) });

    //показываем общее количество товаров над значком корзины
    cartBadgeEl.forEach((el) => {
        el.textContent = itemsTopQuantVal;
        renderBadgeNum(el, 1);
    });

    itemsTopSumEl.textContent = priceFormatting(itemsTopSumVal, "largeSpace");
}

export const renderSelectedResults = function (selectedResultQuantVal, selectedResultFullPriceVal, selectedResultDiscountVal, selectedResultCostVal, currentCurrencyVal) {
    selectedResultQuantEl.forEach((el) => { el.textContent = quantityFormatting(selectedResultQuantVal) });
    selectedResultFullPriceEl.forEach((el) => { el.textContent = priceFormatting(selectedResultFullPriceVal, "largeSpace") });

    selectedResultDiscountEl.forEach((el) => { el.textContent = "−" + priceFormatting(selectedResultDiscountVal) });

    selectedResultCostEl.forEach((el) => {
        el.textContent = priceFormatting(selectedResultCostVal, "largeSpace")
    });

    //скрыть итоговую стоимость и интервал доставки, когда выбрано 0 товаров 
    const emptyOrderHiddenFields = function (action) {
        resultCostWrapEl.forEach((el) => {
            el.classList[action]("hidden");
        })

        resultDeliveryInterval.classList[action]("hidden");
    }

    if (selectedResultDiscountVal === 0) {
        emptyOrderHiddenFields("add");
    }
    else {
        emptyOrderHiddenFields("remove");
    }

    refreshOrderBtnPrice(selectedResultDiscountVal, currentCurrencyVal);
}

//Обновление надписи на кнопке Заказать
export const refreshOrderBtnPrice = function (selectedResultDiscountVal, currentCurrencyVal) {
    const changeOrderBtnText = function (text) {
        document.querySelectorAll(".result__order-btn").forEach((item) => { item.textContent = text })
    }

    if (selectedResultDiscountVal === 0) {
        changeOrderBtnText("Товары не выбраны")
        return;
    }

    if (instantPayCheckbox[0].checked === true) {
        changeOrderBtnText(`Оплатить ${selectedResultCostEl[0].textContent} ${currentCurrencyVal}`)
        return;
    }

    if (instantPayCheckbox[0].checked === false) {
        changeOrderBtnText("Заказать")
        return;
    }
}

////Изменение количества товаров
export const setLimitedBtnStyle = function (itemQuantValArr, itemRemainsValArr) {
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
}

//Удаление товара из корзины
export const handleItemDeletion = function (e) {
    if (!e.target) { return }

    if (e.target.classList.contains("cart-item__buttons-delete")) {
        const wasMissItem = e.target.closest(".cart__missing");
        const clickedItem = e.target.dataset.id;
        cartItemElArr[clickedItem - 1].style.opacity = "0";

        cartItemElArr[clickedItem - 1].addEventListener("transitionend", function () {
            cartItemElArr[clickedItem - 1].remove();

            if (wasMissItem) { renderMissItemsNum(); }
        })

        //Пересчет количества отсутствующих товаров

        if (!wasMissItem) {
            selectCheckboxEl[clickedItem].checked = false;
            return "itemInStock"
        }
    }
}

export const quantBtns = function (clickedItem, buttonType, itemQuantValArr, itemRemainsValArr) {
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
    }
}

//функция обновления цены с учетом количества товаров
export const priceRerender = function (clickedItem, itemDiscPriceValArr, itemFullPriceValArr) {
    itemDiscPriceElArr[clickedItem - 1].textContent = priceFormatting(itemDiscPriceValArr[clickedItem - 1]);
    itemFullPriceElArr[clickedItem - 1].textContent = priceFormatting(itemFullPriceValArr[clickedItem - 1], "smallSpace", 6);
}

//Управление стилем кнопок изменения количества (неактивный серый цвет) 
export const manageQuantBtnStyle = function (clickedItem, buttonType, action) {
    if (buttonType === "plus") {
        if (action === "add") {
            cartItemElArr[clickedItem - 1].classList.add("maximum-number");
        }
        if (action === "remove") {
            cartItemElArr[clickedItem - 1].classList.remove("maximum-number");
        }
    }

    if (buttonType === "minus") {
        if (action === "add") {
            cartItemElArr[clickedItem - 1].classList.add("minimal-number");
        }
        if (action === "remove") {
            cartItemElArr[clickedItem - 1].classList.remove("minimal-number");
        }
    }
}

export const renderRemainsComment = function (clickedItem, itemRemainsValArr) {
    itemRemainsElArr[clickedItem - 1].textContent = remainsComment(itemRemainsValArr[clickedItem - 1], 3);
}

////Сокрытие блока по collapse-btn
//Расчет высоты скрываемых блоков
export const calcCollapsHeight = function (collapsEl, heightVal = collapsEl.scrollHeight + "px") {
    collapsEl.style.maxHeight = heightVal;
}

//Функция сокрытия блока по collapse-btn
export const collapseBlock = function (blockToCollapse) {
    blockToCollapse.style.overflow = "hidden";

    const makeOverflowVisible = function () {
        blockToCollapse.style.overflow = "visible";
        blockToCollapse.removeEventListener("transitionend", makeOverflowVisible)
    }

    if (blockToCollapse.classList.contains("hide")) {
        calcCollapsHeight(blockToCollapse)
        blockToCollapse.addEventListener("transitionend", makeOverflowVisible)
    }

    else {
        calcCollapsHeight(blockToCollapse, 0)
    }

    blockToCollapse.classList.toggle("hide");
    this.classList.toggle("collapse-btn--closed");
}

export const collapseBlockHandler = function (e) {
    if (e.target.closest(".collapse-btn--cart-items")) {
        collapseBlock.call(this, cartItemsWrap)
        cartItemsTopEl.classList.toggle("show-summary");
    }

    if (e.target.closest(".collapse-btn--missing-items")) {
        collapseBlock.call(this, missItemsWrap)
    }
}

//Пересчет max-height в случае изменения ширины окна
export const recalcCollapsHeight = function () {
    if (!cartItemsWrap.classList.contains("hide")) {
        calcCollapsHeight(cartItemsWrap);

    }
    if (!missItemsWrap.classList.contains("hide")) {
        calcCollapsHeight(missItemsWrap);
    }
}

////Функция управления открытием и закрытием модального окна
export const toggleModal = function (modalWindow, openBtn, closeBtn) {
    const openModal = () => {
        modalWindow.classList.remove("hidden");
        document.body.classList.add("modal-open");
        overlayEl.classList.remove("hidden");
    }

    const closeModal = () => {
        modalWindow.classList.add("hidden");
        document.body.classList.remove("modal-open");
        overlayEl.classList.add("hidden");
    }

    const closeModalAndReset = () => {
        closeModal();
        resetRadio();
    }

    //открыть 
    cartWrap.addEventListener("click", function (e) {
        const clickedBtn = e.target.closest(".change-btn");
        const openBtnArr = Array.from(openBtn);

        if (openBtnArr.includes(clickedBtn)) { openModal(); }
    })

    //закрыть 
    closeBtn.addEventListener("click", closeModalAndReset);
    overlayEl.addEventListener("click", closeModalAndReset);
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
            closeModalAndReset();
        }
    })

    modalWindow.addEventListener('click', function (e) {
        const clickedBtn = e.target.closest(".modal-window__select-btn")
        if (!clickedBtn) { return };
        closeModal()
    })
}

const resetRadio = () => {
    const selectedDeliveryOptionEl = document.querySelector(".change-delivery__option-input:checked");
    const selectedPaymentOptionEl = document.querySelector(".change-payment__option-input:checked");
    selectedDeliveryOptionEl && (selectedDeliveryOptionEl.checked = false);
    selectedPaymentOptionEl && (selectedPaymentOptionEl.checked = false);
    document.querySelector(".change-payment__option-input").checked = true;

    if (changeDeliveryModalEl.classList.contains("pickpoint-tab") && selectedDeliveryOptionEl) {
        document.querySelector(".change-delivery__option-input[name='delivery-pickpoint-option']").checked = true;
    }

    if (changeDeliveryModalEl.classList.contains("courier-tab") && selectedDeliveryOptionEl) {
        document.querySelector(".change-delivery__option-input[name='delivery-address-option']").checked = true;
    }
}

//Выбор вида доставки
export const changeDeliveryTabHandler = function (clickedTab) {
    if (clickedTab.dataset.tab === "pickpoint") {
        changeDeliveryModalEl.classList.add("pickpoint-tab")
        changeDeliveryModalEl.classList.remove("courier-tab")
    }

    if (clickedTab.dataset.tab === "courier") {
        changeDeliveryModalEl.classList.remove("pickpoint-tab")
        changeDeliveryModalEl.classList.add("courier-tab")
    }

    //Сброс выбранного варианта после смены вкладки (для корректной работы рендера)
    resetRadio();
}

//рендер способа оплаты после нажатия на кнопку Выбрать
export const renderSelectedPaymentHandler = function (selectedRadioBtnEl, userDataObj) {
    const optionNumber = selectedRadioBtnEl.value;

    //функция рендера выбранного способа оплаты
    const renderPaymentCard = function (el, property) {
        document.querySelectorAll(`.${el}`).forEach((item) => {
            item.innerHTML = userDataObj.paymentOption[optionNumber - 1][property]
        })
    }

    //рендерим картинку платежной системы, номер карты, дату экспирации
    renderPaymentCard("payment__card-syst", "systemPic");
    renderPaymentCard("payment__card-number", "cardNumber");
    renderPaymentCard("payment__card-date", "cardDate");
}

//рендер способа доставки после нажатия на кнопку Выбрать
export const renderSelectedDeliveryHandler = function (clickedBtn, userDataObj, pickpointsInfo) {
    const selectedRadioBtnEl = document.querySelector(".change-delivery__option-input:checked");
    let optionNumber;
    let pickpointIdNum;

    if (selectedRadioBtnEl) {
        optionNumber = Number(selectedRadioBtnEl.value);
        pickpointIdNum = Number(selectedRadioBtnEl.dataset.id);
    }

    //вкладка курьером
    if (clickedBtn.dataset.tab === "courier" && optionNumber) {
        //Для расчета стоимости доставки
        deliverySection.classList.add("courier-selected")
        deliverySection.classList.remove("pickpoint-selected")

        //Адрес
        document.querySelectorAll(".delivery-address").forEach((item) => {
            item.textContent = userDataObj.deliveryAddresses[optionNumber - 1]["address"];
        })

        //Заголовки
        document.querySelector(".delivery__delivery-type").textContent = "Курьером";
        document.querySelector(".result__delivery-type").textContent = "Доставка курьером"
    }

    //вкладка в пункт выдачи
    if (clickedBtn.dataset.tab === "pickpoint" && pickpointIdNum) {
        //Для расчета стоимости доставки
        deliverySection.classList.remove("courier-selected")
        deliverySection.classList.add("pickpoint-selected")

        //Адрес
        document.querySelectorAll(".delivery-address").forEach((item) => {
            pickpointsInfo.forEach((obj) => {
                if (obj.idNum === pickpointIdNum) {
                    item.textContent = obj["address"];
                }
            })
        })

        //Заголовки
        document.querySelector(".delivery__delivery-type").textContent = "Пункт выдачи";
        document.querySelector(".result__delivery-type").textContent = "Доставка в пункт выдачи"

        //График работы и рейтинг пункта выдачи
        pickpointsInfo.forEach((obj) => {
            if (obj.idNum === pickpointIdNum) {
                document.querySelector(".delivery__schedule").textContent = obj["schedule"];
                document.querySelector(".delivery__pickpoint-rating").textContent = obj["rating"];
            }
        })
    }
}

//Удаление опции из модального окна доставки по нажатию кнопки
export const deleteDeliveryOptionHandler = function (e, clickedBtn) {
    const clickedOption = clickedBtn.dataset.option;
    const clickedOptionEl = clickedBtn.closest(`li[data-option="${clickedOption}"]`)
    const clickedForm = clickedBtn.closest("form");
    clickedOptionEl.style.opacity = "0";

    clickedOptionEl.addEventListener("transitionend", function () {
        clickedOptionEl.style.height = "0";
        clickedOptionEl.remove();
        manageEmptyDeliveryOptions(clickedForm);
    })
}

const manageEmptyDeliveryOptions = function (clickedForm) {
    const optionsNum = clickedForm.querySelectorAll(".change-delivery__option").length;
    const selectBtn = clickedForm.querySelector(".change-delivery__select-btn");

    if (optionsNum === 0) {
        selectBtn.textContent = "Закрыть";
    }
}

//Добавление товара в избранное
export const renderFavouritesBadge = function (userDataObj) {
    favBadgeEl.textContent = userDataObj.favourites.length;
    //простановка стилей значку избранного (моб версия корзины) 
    renderBadgeNum(favBadgeEl, 1);
}

//тултип о бесплатном возврате
export const refuseDescrTooltipHandler = function (tooltipTriggerEl) {
    const tooltipWrapEl = tooltipTriggerEl.closest(".refuse-descr");
    tooltipWrapEl.classList.add("active");

    const closeTooltip = function () {
        tooltipWrapEl.classList.remove("active");
        document.body.removeEventListener("click", closeTooltip);
        cartWrap.classList.remove("active-tooltip");
    }

    cartWrap.classList.add("active-tooltip");
    document.body.addEventListener("click", closeTooltip);
}

//переход от интервалов доставки в итогах (десктоп) к секции про доставку
export const scrollToDeliverySection = function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
}

//Чекбокс Списать оплату сразу
export const checkInstantPayHandler = function (clicked) {
    document.querySelectorAll(".pay-option__descr").forEach((item) => { item.classList.toggle("hidden") })
    document.querySelectorAll(".payment__descr").forEach((item) => { item.classList.toggle("hidden") })

    if (clicked.checked === true) {
        instantPayCheckbox.forEach((item) => item.checked = true);
    }

    if (clicked.checked === false) {
        instantPayCheckbox.forEach((item) => item.checked = false);
    }
}

//тултип о продавце
export const sellerTooltipHandler = function (clicked, sellersData) {
    const tooltip = clicked.nextElementSibling;
    const sellerId = clicked.dataset.seller;
    tooltip.classList.add("active");

    const sellerName = tooltip.querySelector(".cart-item__seller-name");
    const sellerOgrn = tooltip.querySelector(".cart-item__seller-ogrn");
    const sellerAddress = tooltip.querySelector(".cart-item__seller-address");

    const seller = sellersData.find((seller) => seller.id == sellerId);
    if (seller) {
        sellerName.textContent = seller.name;
        sellerOgrn.textContent = seller.ogrn;
        sellerAddress.textContent = seller.address;
    }

    if (sellerAddress.textContent.length > 80) {
        tooltip.classList.add("long-address");
    }

    cartWrap.classList.add("active-tooltip");
    document.body.addEventListener("click", createCloseTooltipFunction(tooltip));
}

//тултип о примененных скидках
export const discountTooltipHandler = function (itemObj, userDataObj, userDiscVal, itemDiscVal, tooltip) {
    tooltip.classList.add("active");

    const itemDiscPercEl = tooltip.querySelector(".cart-item__price-itemDisc-perc");
    const itemDiscValEl = tooltip.querySelector(".cart-item__price-itemDisc-val");
    const itemDiscCurEl = tooltip.querySelector(".cart-item__price-itemDisc-cur");
    const itemDiscEl = tooltip.querySelector(".cart-item__price-itemDisc");

    itemDiscPercEl.textContent = `\u00A0${itemObj.discount * 100}%`;

    itemDiscValEl.textContent = "−" + priceFormatting(itemDiscVal, "smallSpace", 6);
    itemDiscCurEl.textContent = "\u00A0" + itemObj.fullPrice.currency;

    const userDiscPercEl = tooltip.querySelector(".cart-item__price-userDisc-perc");
    const userDiscValEl = tooltip.querySelector(".cart-item__price-userDisc-val");
    const userDiscCurEl = tooltip.querySelector(".cart-item__price-userDisc-cur");
    const userDiscEl = tooltip.querySelector(".cart-item__price-userDisc");

    userDiscPercEl.textContent = `\u00A0${userDataObj.discount * 100}%`;

    userDiscValEl.textContent = "−" + priceFormatting(userDiscVal, "smallSpace", 6);
    userDiscCurEl.textContent = "\u00A0" + itemObj.fullPrice.currency;

    itemDiscVal == 0 ? itemDiscEl.classList.add("hidden") : itemDiscEl.classList.remove("hidden");
    userDiscVal == 0 ? userDiscEl.classList.add("hidden") : userDiscEl.classList.remove("hidden");

    cartWrap.classList.add("active-tooltip");
    document.body.addEventListener("click", createCloseTooltipFunction(tooltip));
}

const createCloseTooltipFunction = function (tooltipEl) {
    function closeTooltipHandler() {
        tooltipEl.classList.remove("active");
        document.body.removeEventListener("click", closeTooltipHandler)
        cartWrap.classList.remove("active-tooltip");
    }

    return closeTooltipHandler;
}

////валидация формы получателя товара
export const formatPhoneNumber = function (e) {
    const inputEl = e.target;

    const renderPhoneNum = function () {
        const phoneNumFormatted = phoneNumArr.join("");
        phoneNumFormatted ? (inputEl.value = "+" + phoneNumFormatted) : (inputEl.value = "");
    }

    const phoneNumInput = inputEl.value.replace(/\D/g, "");
    const phoneNumArr = phoneNumInput.split("");

    if (phoneNumArr.length > 1) {
        phoneNumArr.splice(1, 0, " ");
    }

    if (phoneNumArr.length > 5) {
        phoneNumArr.splice(5, 0, " ");
    }

    if (phoneNumArr.length > 9) {
        phoneNumArr.splice(9, 0, " ");
    }

    if (phoneNumArr.length > 12) {
        phoneNumArr.splice(12, 0, " ");
    }

    if (phoneNumArr.length > 15) {
        let k = phoneNumArr.length - 15;
        let lastSpace = 12;
        const spaceStep = 3;

        while (k > 0) {
            lastSpace += spaceStep;
            phoneNumArr.splice(lastSpace, 0, " ");
            k -= 2;
        }
    }

    renderPhoneNum();
}

export const formatTaxNumber = function (e) {
    const inputEl = e.target;
    const taxNumber = inputEl.value.replace(/\D/g, "");
    taxNumber ? (inputEl.value = taxNumber) : (inputEl.value = "");
}


export const createCustomErrorMessage = function (inputEl) {
    if (inputEl.validity.valid) { return "" }

    if (inputEl.name === "receiver-name") {
        return "Укажите имя"
    }

    if (inputEl.name === "receiver-surname") {
        return "Введите фамилию"
    }

    if (inputEl.name === "receiver-email") {

        if (inputEl.validity.valueMissing) {
            return "Укажите электронную почту"
        }

        else {
            return "Проверьте адрес электронной почты"
        }
    }

    if (inputEl.name === "receiver-phone") {
        if (inputEl.validity.valueMissing) { return "Укажите номер телефона" }
        else { return "Формат: +9 999 999 99 99" }
    }

    if (inputEl.name === "receiver-tax-number") {
        taxNumberDescr.classList.add("hidden");
        if (inputEl.validity.valueMissing) { return "Укажите ИНН" }
        else { return "Проверьте ИНН" }
    }
}

export const provideInputValidationView = function (inputEl, inputIsInvalid) {
    inputEl.classList.toggle("is-invalid", inputIsInvalid);
    inputEl.setAttribute("aria-invalid", inputIsInvalid.toString())

    const errorMessageEl = inputEl.nextElementSibling.nextElementSibling;
    errorMessageEl.textContent = createCustomErrorMessage(inputEl);
    errorMessageEl.hidden = !inputIsInvalid;

    if (inputEl.name === "receiver-tax-number" && !inputIsInvalid) {
        taxNumberDescr.classList.remove("hidden");
    }
}

export const scroollToInvalidInput = function (formEl) {
    const firstInvalidInput = formEl.querySelector("input:invalid");
    firstInvalidInput?.scrollIntoView({ behavior: "smooth", block: "center" });
    firstInvalidInput?.focus({ preventScroll: "true" })
}