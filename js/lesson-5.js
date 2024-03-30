// // ЗАДАЧА 1
// // Зробити перемикач теми. Зберігати тему у локальному сховище.
// // При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// // Додати класи для змін тем

// localStorage.setItem("thema", "light");
// document.addEventListener("DOMContentLoaded", changeThema);
// const checkBox = document.querySelector(".checkbox");

// function changeThema() {
//     const themaKey = localStorage.getItem("thema");
//     if (themaKey) {
//         document.body.classList.add(themaKey)
//     }
//     checkBox.addEventListener("change", function () {
//         const markCheckBox = this.checked;
//         localStorage.setItem("thema", markCheckBox ? "light" : "dark");
//         document.body.classList.toggle("light", !markCheckBox);
//         document.body.classList.toggle("dark", markCheckBox);
//     })
// }

// ЗАДАЧА 1
// Створити сторінку з двома кнопками: "Старт" та "Стоп".При кліці на кнопку
// "Старт" розпочинається безперервний цикл, який кожну секунду змінює фоновий колір сторінки
// на випадковий шестнадцятковий колір та вимикає кнопку "Старт" до завершення циклу.Коли натискається кнопка
// "Стоп", цикл зупиняється, і кнопка "Старт" стає доступною для подальших кліків.Для реалізації використовується HTML для
//  створення сторінки з кнопками та JavaScript код для взаємодії з цими елементами та виконання зазначених функцій.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");

let timerId = null;

startBtn.addEventListener("click", handleClick);

function handleClick() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
  }, 1000);
}

stopBtn.addEventListener("click", stopInterval);

function stopInterval() {
  clearInterval(timerId);
  startBtn.disabled = false;
}
