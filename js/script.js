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

const userDataObj = {
  paymentOption: [
    {
      system: "Мир",
      systemPic: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 30 10" fill="none"><path d="M16.6813 2.17708L14.8645 6.09161H14.6806V1.33362H12.0852V9.3357H14.2372C14.8212 9.3357 15.3403 9.00048 15.589 8.48142L17.4166 4.57771H17.6005V9.3357H20.1959V1.33362H18.0114C17.4491 1.33362 16.9192 1.66884 16.6813 2.17708Z" fill="#319B42"/><path d="M6.97243 2.38254L5.90182 6.09161H5.71798L4.63656 2.38254C4.45271 1.75535 3.87956 1.33362 3.2307 1.33362H0.667725V9.3357H3.26315V4.57771H3.44699L4.93935 9.3357H6.66963L8.162 4.57771H8.34584V9.3357H10.9413V1.33362H8.37829C7.72943 1.33362 7.14546 1.75535 6.97243 2.38254Z" fill="#319B42"/><path d="M21.3244 4.9007V9.3357H23.9207V6.7396H26.7116C27.9232 6.7396 28.9509 5.97159 29.3295 4.9007H21.3244Z" fill="#319B42"/><path d="M26.6358 1.33362H20.8591C21.2161 3.23742 22.882 4.57874 24.8833 4.57874H29.3727C29.4051 4.40567 29.4267 4.21096 29.4267 4.01625C29.4267 2.46941 28.1827 1.33362 26.6358 1.33362Z" fill="url(#paint0_linear_13_254)"/><defs><lineargradient id="paint0_linear_13_254" x1="20.8591" y1="2.95618" x2="29.4267" y2="2.95618" gradientUnits="userSpaceOnUse"><stop stop-color="#00A3E1"/><stop offset="0.3042" stop-color="#009ADD"/><stop offset="0.7987" stop-color="#0082D4"/><stop offset="1" stop-color="#0076CF"/></lineargradient></defs></svg>',
      systemPicHigh: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="11" viewBox="0 0 30 11" fill="none"><path d="M16.682 2.34377L14.8652 6.2583H14.6814V1.50031H12.0859V9.50239H14.238C14.8219 9.50239 15.341 9.16717 15.5898 8.64811L17.4174 4.74439H17.6012V9.50239H20.1966V1.50031H18.0121C17.4498 1.50031 16.9199 1.83553 16.682 2.34377Z" fill="#319B42"/><path d="M6.97268 2.54923L5.90207 6.2583H5.71823L4.6368 2.54923C4.45296 1.92204 3.8798 1.50031 3.23095 1.50031H0.667969V9.50239H3.26339V4.74439H3.44723L4.9396 9.50239H6.66988L8.16225 4.74439H8.34609V9.50239H10.9415V1.50031H8.37853C7.72968 1.50031 7.14571 1.92204 6.97268 2.54923Z" fill="#319B42"/><path d="M21.3247 5.06739V9.50239H23.9209V6.90629H26.7119C27.9235 6.90629 28.9512 6.13828 29.3298 5.06739H21.3247Z" fill="#319B42"/><path d="M26.636 1.50031H20.8594C21.2164 3.40411 22.8823 4.74543 24.8836 4.74543H29.3729C29.4054 4.57235 29.427 4.37765 29.427 4.18294C29.427 2.6361 28.183 1.50031 26.636 1.50031Z" fill="url(#paint0_linear_17_1071)"/><defs><linearGradient id="paint0_linear_17_1071" x1="20.8594" y1="3.12287" x2="29.427" y2="3.12287" gradientUnits="userSpaceOnUse"><stop stop-color="#00A3E1"/><stop offset="0.3042" stop-color="#009ADD"/><stop offset="0.7987" stop-color="#0082D4"/><stop offset="1" stop-color="#0076CF"/></linearGradient></defs></svg>',
      cardNumber: "1234 56•• •••• 1234",
      cardDate: "01/30"
    },
    {
      system: "Visa",
      systemPic: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="12" viewBox="0 0 32 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4709 4.17815C16.453 5.58578 17.7254 6.37131 18.6838 6.83836C19.6686 7.31761 19.9994 7.62491 19.9956 8.05338C19.9881 8.70928 19.21 8.99867 18.4818 9.00993C17.2113 9.02965 16.4727 8.66696 15.8855 8.3926L15.4279 10.5341C16.017 10.8057 17.108 11.0425 18.2394 11.0528C20.8949 11.0528 22.6323 9.74195 22.6418 7.70948C22.6521 5.13008 19.0738 4.98723 19.0982 3.83424C19.1067 3.4847 19.4403 3.11161 20.1713 3.01671C20.5331 2.96884 21.532 2.93215 22.6643 3.45364L23.1087 1.38174C22.4998 1.15995 21.7171 0.947548 20.7427 0.947548C18.2431 0.947548 16.485 2.27625 16.4709 4.17815ZM27.3796 1.12607C26.8947 1.12607 26.4859 1.40896 26.3037 1.84307L22.5102 10.9006H25.1638L25.6919 9.44123H28.9347L29.241 10.9006H31.5799L29.5389 1.12607H27.3796ZM27.7507 3.76657L28.5165 7.43692H26.4192L27.7507 3.76657ZM13.2535 1.12607L11.1618 10.9006H13.6904L15.7812 1.12607H13.2535ZM9.51266 1.12607L6.88061 7.77895L5.81595 2.12213C5.69101 1.49072 5.19768 1.12607 4.64982 1.12607H0.347122L0.286962 1.4099C1.17028 1.60157 2.17385 1.91074 2.78179 2.24151C3.15386 2.44351 3.2601 2.62015 3.38222 3.10034L5.39874 10.9006H8.07123L12.1682 1.12607H9.51266Z" fill="#1434CB"/></svg>',
      systemPicHigh: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="13" viewBox="0 0 32 13" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4709 4.67817C16.453 6.08581 17.7254 6.87134 18.6838 7.33838C19.6686 7.81763 19.9994 8.12493 19.9956 8.55341C19.9881 9.20931 19.21 9.49869 18.4818 9.50995C17.2113 9.52967 16.4727 9.16698 15.8855 8.89262L15.4279 11.0341C16.017 11.3057 17.108 11.5425 18.2394 11.5528C20.8949 11.5528 22.6323 10.242 22.6418 8.2095C22.6521 5.6301 19.0738 5.48725 19.0982 4.33426C19.1067 3.98472 19.4403 3.61163 20.1713 3.51674C20.5331 3.46886 21.532 3.43217 22.6643 3.95366L23.1087 1.88176C22.4998 1.65997 21.7171 1.44757 20.7427 1.44757C18.2431 1.44757 16.485 2.77627 16.4709 4.67817ZM27.3796 1.6261C26.8947 1.6261 26.4859 1.90899 26.3037 2.34310L22.5102 11.4006H25.1638L25.6919 9.94125H28.9347L29.2410 11.4006H31.5799L29.5389 1.6261H27.3796ZM27.7507 4.26659L28.5165 7.93694H26.4192L27.7507 4.26659ZM13.2535 1.6261L11.1618 11.4006H13.6904L15.7812 1.6261H13.2535ZM9.51266 1.6261L6.88061 8.27897L5.81595 2.62215C5.69101 1.99074 5.19768 1.62610 4.64982 1.62610H0.347122L0.286962 1.90992C1.17028 2.10159 2.17385 2.41077 2.78179 2.74153C3.15386 2.94353 3.26010 3.12018 3.38222 3.60037L5.39874 11.4006H8.07123L12.1682 1.6261H9.51266Z" fill="#1434CB"/></svg>',
      cardNumber: "5678 90•• •••• 9708",
      cardDate: "03/32"
    },
    {
      system: "Mastercard",
      systemPic: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.9337 11.3367V11.0649H22.8629L22.781 11.2514L22.6996 11.0649H22.6286V11.3367H22.6788V11.132L22.7554 11.3086H22.8075L22.884 11.1315V11.3367H22.9339H22.9337ZM22.4846 11.3367V11.1115H22.5752V11.0656H22.3438V11.1115H22.4343V11.3367H22.4846Z" fill="#F79410"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8883 12.5014H8.76367V1.49463H14.8884L14.8883 12.5014Z" fill="#FF5F00"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.15147 6.99987C9.15147 4.76713 10.1969 2.77821 11.8248 1.49643C10.5928 0.524985 9.06814 -0.00258565 7.49923 -0.000236328C3.63356 -0.000236328 0.5 3.13376 0.5 6.99987C0.5 10.8659 3.63356 13.9999 7.49923 13.9999C9.06814 14.0023 10.5929 13.4747 11.8249 12.5032C10.1971 11.2217 9.15147 9.23269 9.15147 6.99987Z" fill="#EB001B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1497 6.99987C23.1497 10.8659 20.0161 13.9999 16.1505 13.9999C14.5814 14.0022 13.0565 13.4747 11.8242 12.5032C13.4526 11.2215 14.498 9.23269 14.498 6.99987C14.498 4.76699 13.4526 2.77821 11.8242 1.49643C13.0564 0.524984 14.5813 -0.00251272 16.1504 -0.000236807C20.016 -0.000236807 23.1496 3.13376 23.1496 6.99987" fill="#F79410"/></svg>',
      systemPicHigh: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.9337 11.8367V11.5649H22.8629L22.781 11.7514L22.6996 11.5649H22.6286V11.8367H22.6788V11.632L22.7554 11.8086H22.8075L22.884 11.6315V11.8367H22.9339H22.9337ZM22.4846 11.8367V11.6115H22.5752V11.5656H22.3438V11.6115H22.4343V11.8367H22.4846Z" fill="#F79410"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8883 13.0014H8.76367V1.99463H14.8884L14.8883 13.0014Z" fill="#FF5F00"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.15147 7.49987C9.15147 5.26713 10.1969 3.27821 11.8248 1.99643C10.5928 1.02498 9.06814 0.497414 7.49923 0.499764C3.63356 0.499764 0.5 3.63376 0.5 7.49987C0.5 11.3659 3.63356 14.4999 7.49923 14.4999C9.06814 14.5023 10.5929 13.9747 11.8249 13.0032C10.1971 11.7217 9.15147 9.73269 9.15147 7.49987Z" fill="#EB001B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1497 7.49987C23.1497 11.3659 20.0161 14.4999 16.1505 14.4999C14.5814 14.5022 13.0565 13.9747 11.8242 13.0032C13.4526 11.7215 14.498 9.73269 14.498 7.49987C14.498 5.26699 13.4526 3.27821 11.8242 1.99643C13.0564 1.02498 14.5813 0.497487 16.1504 0.499763C20.016 0.499763 23.1496 3.63376 23.1496 7.49987" fill="#F79410"/></svg>',
      cardNumber: "9876 54•• •••• 6136",
      cardDate: "05/35"
    },
    {
      system: "Maestro",
      systemPic: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8883 12.5017H8.76367V1.49487H14.8884L14.8883 12.5017Z" fill="#6C6BBD"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.15147 7.00012C9.15147 4.76738 10.1969 2.77845 11.8248 1.49668C10.5928 0.525229 9.06814 -0.00234151 7.49923 7.81249e-06C3.63356 7.81249e-06 0.5 3.13401 0.5 7.00012C0.5 10.8662 3.63356 14.0002 7.49923 14.0002C9.06814 14.0025 10.5929 13.4749 11.8249 12.5035C10.1971 11.2219 9.15147 9.23293 9.15147 7.00012Z" fill="#EB001B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1497 7.00012C23.1497 10.8662 20.0161 14.0002 16.1505 14.0002C14.5814 14.0024 13.0565 13.4749 11.8242 12.5035C13.4526 11.2217 14.498 9.23293 14.498 7.00012C14.498 4.76723 13.4526 2.77845 11.8242 1.49668C13.0564 0.525229 14.5813 -0.00226858 16.1504 7.33385e-06C20.016 7.33385e-06 23.1496 3.13401 23.1496 7.00012" fill="#0099DF"/></svg>',
      systemPicHigh: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8883 13.0017H8.76367V1.99487H14.8884L14.8883 13.0017Z" fill="#6C6BBD"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.15147 7.50012C9.15147 5.26738 10.1969 3.27845 11.8248 1.99668C10.5928 1.02523 9.06814 0.497658 7.49923 0.500008C3.63356 0.500008 0.5 3.63401 0.5 7.50012C0.5 11.3662 3.63356 14.5002 7.49923 14.5002C9.06814 14.5025 10.5929 13.9749 11.8249 13.0035C10.1971 11.7219 9.15147 9.73293 9.15147 7.50012Z" fill="#EB001B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1497 7.50012C23.1497 11.3662 20.0161 14.5002 16.1505 14.5002C14.5814 14.5024 13.0565 13.9749 11.8242 13.0035C13.4526 11.7217 14.498 9.73293 14.498 7.50012C14.498 5.26723 13.4526 3.27845 11.8242 1.99668C13.0564 1.02523 14.5813 0.497731 16.1504 0.500007C20.016 0.500007 23.1496 3.63401 23.1496 7.50012" fill="#0099DF"/></svg>',
      cardNumber: "5734 56•• •••• 1044",
      cardDate: "01/30"
    }
  ],
  deliveryPickpoints: [11, 2, 154],
  deliveryAddresses: [
    {
      address: "Бишкек, улица Табышалиева, 57"
    },
    {
      address: "Бишкек, улица Жукеева-Пудовкина, 77/1"
    },
    {
      address: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1"
    }
  ]
};

const pickpointsInfo = [
  {
    idNum: 11,
    address: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
    schedule: "Ежедневно с 10 до 21",
    rating: undefined
  },
  {
    idNum: 2,
    address: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
    schedule: "Ежедневно с 9 до 22",
    rating: 4.99
  },
  {
    idNum: 154,
    address: "г. Бишкек, улица Табышалиева, д. 57",
    schedule: "Ежедневно с 11 до 23",
    rating: 4.99
  }
]

////Условия расчетов
const storeTerms = {
  pickpointDeliveryCost: 0,
  courierDeliveryCost: 180,
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

const changePaymentModalEl = document.querySelector(".change-payment");
const changePaymentBtnEl = document.querySelectorAll(".payment__change-btn");
const changePaymentCloseBtnEl = document.querySelector(".change-payment__close-btn")
const overlayEl = document.querySelector(".overlay");
const paymentCardEl = document.querySelectorAll(".payment__card");
const paymentOptionSelectBtnEl = document.querySelector(".change-payment__select-btn");
const changeDeliveryModalEl = document.querySelector(".change-delivery");
const changeDeliveryBtnEl = document.querySelectorAll(".delivery-change-btn");
const changeDeliveryCloseBtnEl = document.querySelector(".change-delivery__close-btn");
const changeDeliveryTabsEl = document.querySelector(".change-delivery__tabs");
const deliveryOptionSelectBtnEl = document.querySelectorAll(".change-delivery__select-btn");
const deliverySection = document.querySelector(".delivery");

const cartBadgeEl = document.querySelectorAll(".cart-badge");
const collapseBtnEl = document.querySelectorAll(".collapse-btn");
const cartWrap = document.querySelector(".cart__wrap");
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
let selectedResultQuantVal;
const selectedResultQuantValArr = [];
const selectedResultDiscPriceValArr = [];
const selectedResultFullPriceValArr = [];
let deliveryCostVal;

//Отразить стоимость доставки
const displayDeliveryCost = function () {
  if (deliverySection.classList.contains("courier-selected")) {
    deliveryCostVal = storeTerms.courierDeliveryCost;
  }

  //по умолчанию доставка в пункт выдачи
  if (deliverySection.classList.contains("pickpoint-selected")) {
    deliveryCostVal = storeTerms.pickpointDeliveryCost;
  }

  deliveryCostEl.forEach((el) => {
    deliveryCostVal === 0 ? el.textContent = "Бесплатно" : el.textContent = `${deliveryCostVal} ${storeTerms.currency}`;
  })
}

displayDeliveryCost();

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
        const badgeNumber = Number(deliveryItemBadge.textContent);
        deliveryItemBadge.classList.remove("badge-count--1digit");
        deliveryItemBadge.classList.remove("badge-count--2digit");
        deliveryItemBadge.classList.remove("badge-count--3digit");

        if (badgeNumber > 1 && badgeNumber < 10) {
          deliveryItemBadge.classList.add("badge-count--1digit");
        }

        if (badgeNumber >= 10 && badgeNumber < 100) {

          deliveryItemBadge.classList.add("badge-count--2digit");
        }

        if (badgeNumber >= 100) {
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

  //обнулить стоимость доставки для пустого заказа
  if (selectedResultDiscountVal === 0) {
    deliveryCostVal = 0;
    deliveryCostEl.forEach((el) => {
      el.textContent = "Бесплатно"
    })
  }

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

////Сокрытие блока по collapse-btn
//Расчет высоты скрываемых блоков
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

////Функция управления открытием и закрытием модального окна
const toggleModal = function (modalWindow, openBtn, closeBtn) {
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

  //открыть 
  cartWrap.addEventListener("click", function (e) {
    const clickedBtn = e.target.closest(".change-btn");
    const openBtnArr = Array.from(openBtn);

    if (openBtnArr.includes(clickedBtn)) { openModal(); }
  })

  //закрыть 
  closeBtn.addEventListener("click", closeModal);
  overlayEl.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
      closeModal();
    }
  })

  modalWindow.addEventListener('click', function (e) {
    const clickedBtn = e.target.closest(".modal-select-btn")
    if (!clickedBtn) { return };
    closeModal()
  })
}

//Окно смены способа доставки
toggleModal(changeDeliveryModalEl, changeDeliveryBtnEl, changeDeliveryCloseBtnEl);
//Окно смены способа оплаты
toggleModal(changePaymentModalEl, changePaymentBtnEl, changePaymentCloseBtnEl);

//Выбор вида доставки
changeDeliveryTabsEl.addEventListener("click", function (e) {
  const clickedTab = e.target.closest(".change-delivery__tab");

  if (!clickedTab) { return }

  if (clickedTab.dataset.tab === "pickpoint") {
    changeDeliveryModalEl.classList.add("pickpoint-tab")
    changeDeliveryModalEl.classList.remove("courier-tab")
  }

  if (clickedTab.dataset.tab === "courier") {
    changeDeliveryModalEl.classList.remove("pickpoint-tab")
    changeDeliveryModalEl.classList.add("courier-tab")
  }

  //Сброс выбранного варианта после смены вкладки (для корректной работы рендера)
  const selectedRadioBtnEl = document.querySelector(".change-delivery__option-input:checked");
  selectedRadioBtnEl && (selectedRadioBtnEl.checked = false);
})

//рендер способа оплаты после нажатия на кнопку Выбрать
paymentOptionSelectBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  const selectedRadioBtnEl = document.querySelector(".change-payment__option-input:checked");

  if (!selectedRadioBtnEl) { return }

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
})

//рендер способа доставки после нажатия на кнопку Выбрать
changeDeliveryModalEl.addEventListener("click", function (e) {
  const clickedBtn = e.target.closest(".change-delivery__select-btn");

  if (!clickedBtn) { return }

  e.preventDefault();
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
  displayDeliveryCost();
  calcResult();
})










