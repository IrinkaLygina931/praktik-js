// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи
//createElement

// import cars from "./date/cars.js";

// const carElement = document.querySelector(".js-goods");
// function carCreate ({name, img, price, description}) {
//     const liEl = document.createElement("li");
//     const markUp = document.createElement("h2");
//     markUp.textContent = name;

//     const imgEl = document.createElement("img");
//     imgEl.src = img;
//     imgEl.alt = name;
//     imgEl.width = 300;

//     const priceEl = document.createElement("p");
//     priceEl.textContent = price;

//     const descEl = document.createElement("h3");
//     descEl.textContent = description;

//     liEl.append(markUp, imgEl, priceEl, descEl);
//     return liEl;
// }

// const sort = cars.map(carCreate);
// console.log(sort);

// carElement.append(...sort);

// // 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА,
//  В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА,
//     І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// // html/
const container = document.querySelector(".container");
const form = document.querySelector(".form");
const price = document.querySelector("#price");
const amount = document.querySelector(".amount");
const quantity = document.querySelector("#quantity");
const total = document.querySelector(".total");

function calculate(event) {
  event.preventDefault();
  const priceEl = price.value;
  const quantityEl = quantity.value;
  const totalPrice = priceEl * quantityEl;
  amount.textContent = quantityEl;
  total.textContent = `${totalPrice.toFixed(2)} грн.`;
}

function textChange() {
  const quantityEl = quantity.value;
  amount.textContent = quantityEl;
}
quantity.addEventListener("input", textChange);

form.addEventListener("submit", calculate);

// .2 ПЕРЕПИШІТЬ КОД, ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО
// КЛІЦІ НА КНОПКУ, ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ
//  ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ
// ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ
const randomRgbColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};

container.style.backgroundColor = randomRgbColor();
