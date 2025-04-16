////Объекты с данными
const cartItem1Obj = {
    name: "Футболка UZcotton мужская",
    properties: { Цвет: "белый", Размер: 56 },
    storage: "Коледино WB",
    seller: "OOO Вайлдберриз",
    remains: 3,
    discPrice: { value: 522, currency: "сом" },
    fullPrice: { value: 1051, currency: "сом" },
    discount: 0.45,
    updateDiscPrice() {
        let calcDiscPrice = this.fullPrice.value;
        if (this.discount) {
            calcDiscPrice *= (1 - this.discount);
        }

        if (userDataObj.discount) {
            calcDiscPrice *= (1 - userDataObj.discount);
        }

        this.discPrice.value = calcDiscPrice;
        this.discPrice.currency = this.fullPrice.currency;
    },
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
    discount: 0,
    updateDiscPrice() {
        let calcDiscPrice = this.fullPrice.value;
        if (this.discount) {
            calcDiscPrice *= (1 - this.discount);
        }

        if (userDataObj.discount) {
            calcDiscPrice *= (1 - userDataObj.discount);
        }

        this.discPrice.value = calcDiscPrice;
        this.discPrice.currency = this.fullPrice.currency;
    },
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
    discount: 0.43,
    updateDiscPrice() {
        let calcDiscPrice = this.fullPrice.value;
        if (this.discount) {
            calcDiscPrice *= (1 - this.discount);
        }

        if (userDataObj.discount) {
            calcDiscPrice *= (1 - userDataObj.discount);
        }

        this.discPrice.value = calcDiscPrice;
        this.discPrice.currency = this.fullPrice.currency;
    },
    delivery: [{ date: "5—6 февраля", quantity: 4 }, { date: "7—8 февраля", quantity: 0 }],
    imgAlt: "Набор цветных карандашей",
    idNum: 3
}

export const cartItemObjArr = [cartItem1Obj, cartItem2Obj, cartItem3Obj];

export const userDataObj = {
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
    ],
    favourites: [],
    discount: 0.09
};

export const pickpointsInfo = [
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

export const sellersData = [
    {
        id: 1,
        name: "OOO «Вайлдберриз»",
        ogrn: "ОГРН: 1067746062449",
        address: "142181, Московская область, г. Подольск, деревня Коледино, Территория Индустриальный парк Коледино, д. 6, стр. 1"
    },
    {
        id: 345,
        name: "OOO «МЕГАПРОФСТИЛЬ»",
        ogrn: "ОГРН: 5167746237148",
        address: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"
    }
]

////Условия расчетов
export const storeTerms = {
    pickpointDeliveryCost: 0,
    courierDeliveryCost: 180,
    currency: "сом"
}

////Задание начальных значений
//Quantity
export let item1QuantVal = 1;
export let item2QuantVal = 1;
export let item3QuantVal = 1;
export const itemQuantValArr = [item1QuantVal, item2QuantVal, item3QuantVal];

export let item1RemainsVal = cartItem1Obj.remains - item1QuantVal;
export let item2RemainsVal = cartItem2Obj.remains - item2QuantVal;
export let item3RemainsVal = cartItem3Obj.remains - item3QuantVal;
export const itemRemainsValArr = [item1RemainsVal, item2RemainsVal, item3RemainsVal]

//Price
export const currentCurrencyVal = storeTerms.currency;

export let item1DiscPriceVal = cartItem1Obj.discPrice.value * item1QuantVal;
export let item2DiscPriceVal = cartItem2Obj.discPrice.value * item2QuantVal;
export let item3DiscPriceVal = cartItem3Obj.discPrice.value * item3QuantVal;
export const itemDiscPriceValArr = [item1DiscPriceVal, item2DiscPriceVal, item3DiscPriceVal];

export let item1DiscCurVal = cartItem1Obj.discPrice.currency;
export let item2DiscCurVal = cartItem2Obj.discPrice.currency;
export let item3DiscCurVal = cartItem3Obj.discPrice.currency;

export let item1FullPriceVal = cartItem1Obj.fullPrice.value * item1QuantVal;
export let item2FullPriceVal = cartItem2Obj.fullPrice.value * item2QuantVal;
export let item3FullPriceVal = cartItem3Obj.fullPrice.value * item3QuantVal;
export const itemFullPriceValArr = [item1FullPriceVal, item2FullPriceVal, item3FullPriceVal];

export let item1FullCurVal = cartItem1Obj.fullPrice.currency;
export let item2FullCurVal = cartItem2Obj.fullPrice.currency;
export let item3FullCurVal = cartItem3Obj.fullPrice.currency;

export let itemDiscVal;
export let userDiscVal;

//Total
export let itemsTopQuantVal;
export let itemsTopSumVal;
export let selectedResultFullPriceVal;
export let selectedResultDiscPriceVal;
export let selectedResultDiscountVal;
export let selectedResultCostVal;
export let selectedResultQuantVal;
export let selectedResultQuantValArr = [];
export let selectedResultDiscPriceValArr = [];
export let selectedResultFullPriceValArr = [];
export let deliveryCostVal;


////Функции
export const calcTopSum = function () {
    itemsTopQuantVal = itemQuantValArr.reduce((sum, item) => sum += item);
    itemsTopSumVal = itemDiscPriceValArr.reduce((sum, item) => sum += item);
}

export const setDeliveryCost = function (deliveryType) {
    if (deliveryType === "courier") {
        deliveryCostVal = storeTerms.courierDeliveryCost;
    }

    if (deliveryType === "pickpoint") {
        deliveryCostVal = storeTerms.pickpointDeliveryCost;
    }
}

export const calcSelected = function () {
    //подсчет сумм значений по выбранным товарам
    selectedResultQuantValArr.length === 0 ? selectedResultQuantVal = 0 : selectedResultQuantVal = selectedResultQuantValArr.reduce((sum, item) => sum += item);
    selectedResultDiscPriceValArr.length === 0 ? selectedResultDiscPriceVal = 0 : selectedResultDiscPriceVal = selectedResultDiscPriceValArr.reduce((sum, item) => sum += item);
    selectedResultFullPriceValArr.length === 0 ? selectedResultFullPriceVal = 0 : selectedResultFullPriceVal = selectedResultFullPriceValArr.reduce((sum, item) => sum += item);

    //подсчет результатов по корзине
    selectedResultDiscountVal = selectedResultFullPriceVal - selectedResultDiscPriceVal;
    selectedResultCostVal = selectedResultFullPriceVal - selectedResultDiscountVal + deliveryCostVal;

    //очистка массивов с данными по выбранным товарам
    selectedResultQuantValArr.length = 0;
    selectedResultDiscPriceValArr.length = 0;
    selectedResultFullPriceValArr.length = 0;
}

//Обнуление цен и количества удаленного товара, пересчет суммарных значений (для товаров в наличии)
export const calcItemDeletion = function (clickedItem) {
    itemDiscPriceValArr[clickedItem - 1] = 0;
    itemFullPriceValArr[clickedItem - 1] = 0;
    itemQuantValArr[clickedItem - 1] = 0;
}

//функция пересчета цены с учетом количества товаров
export const priceRecalc = function (clickedItem) {
    itemDiscPriceValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].discPrice.value * itemQuantValArr[clickedItem - 1];
    itemFullPriceValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].fullPrice.value * itemQuantValArr[clickedItem - 1];
}

export const quantRecalc = function (item, inputValue, clickedItem) {
    //если введенное количество не превышает остатки товара
    if (inputValue < cartItemObjArr[clickedItem - 1].remains && inputValue > 1) {
        itemQuantValArr[clickedItem - 1] = inputValue;
        item.value = itemQuantValArr[clickedItem - 1];
        itemRemainsValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].remains - inputValue;
    }

    //если введеное количество превышает остатки
    if (inputValue >= cartItemObjArr[clickedItem - 1].remains && inputValue > 1) {
        itemQuantValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].remains;
        item.value = itemQuantValArr[clickedItem - 1];
        itemRemainsValArr[clickedItem - 1] = 0;
    }

    //если ввели 1 менее - ставится 1 ед.
    if (inputValue <= 1) {
        itemQuantValArr[clickedItem - 1] = 1;
        item.value = itemQuantValArr[clickedItem - 1];
        itemRemainsValArr[clickedItem - 1] = cartItemObjArr[clickedItem - 1].remains - 1;
    }
}

//Добавление товара в избранное
export const addingItemToFavourites = function (clickedItemId) {
    if (!userDataObj.favourites.includes(clickedItemId)) {
        userDataObj.favourites.push(clickedItemId);
    }

    else if (userDataObj.favourites.includes(clickedItemId)) {
        const indexToDelete = userDataObj.favourites.indexOf(clickedItemId);
        userDataObj.favourites.splice(indexToDelete, 1);
    }
}

export const calcDiscountTooltip = function (itemId, itemObj) {
    itemDiscVal = itemObj.discount * itemObj.fullPrice.value * itemQuantValArr[itemId - 1];
    userDiscVal = userDataObj.discount * ((itemObj.fullPrice.value * itemQuantValArr[itemId - 1]) - itemDiscVal);
}

