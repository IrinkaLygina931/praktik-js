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
// const container = document.querySelector(".container");
// const form = document.querySelector(".form");
// const price = document.querySelector("#price");
// const amount = document.querySelector(".amount");
// const quantity = document.querySelector("#quantity");
// const total = document.querySelector(".total");

// function calculate(event) {
//   event.preventDefault();
//   const priceEl = price.value;
//   const quantityEl = quantity.value;
//   const totalPrice = priceEl * quantityEl;
//   amount.textContent = quantityEl;
//   total.textContent = `${totalPrice.toFixed(2)} грн.`;
// }

// function textChange() {
//   const quantityEl = quantity.value;
//   amount.textContent = quantityEl;
// }
// quantity.addEventListener("input", textChange);

// form.addEventListener("submit", calculate);

// // .2 ПЕРЕПИШІТЬ КОД, ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО
// // КЛІЦІ НА КНОПКУ, ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ
// //  ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

// // 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ
// // ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ
// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// container.style.backgroundColor = randomRgbColor();

// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
//  <ul class="js-list"></ul>

const instruments = [
  {
    id: 1,
    img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
    name: "Молоток",
    price: 150,
  },
  {
    id: 2,
    img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
    name: "Перфоратор",
    price: 3000,
  },
  {
    id: 3,
    img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
    name: "Рівень",
    price: 2000,
  },
];

const listEl = document.querySelector(".js-list");

function createMarkup() {
  const result = instruments
    .map((instrument) => {
      return `
           <li data-id="${instrument.id}" class="li-id">
                <img src="${instrument.img}" alt="${instrument.name}" width = "300">
                <h2>${instrument.name}</h2>
                <p>${instrument.price}</p>
           </li>
           <button class="btn-id">Pay</button>
           
        `;
    })
    .join(" ");
  listEl.insertAdjacentHTML("beforeend", result);
}
createMarkup();

// 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР
// containes - методом перевірити на яку кнопку клік
// closest - знайде найближчий елемент 
// listEl.addEventListener("click", handler)

// function handle(event) {
//     if (event.target === currentTarget)
