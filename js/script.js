"use strict";

const collapseBtnEl = document.querySelectorAll(".collapse-btn");
const cartItemsWrap = document.querySelector(".cart__items-wrap");
const missItemsWrap = document.querySelector(".cart__missing-wrap");
const cartItemsTopEl = document.querySelector(".cart__items-top");

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