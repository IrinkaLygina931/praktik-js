// ЗАДАЧА 1
// // НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА
// "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ
// 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "Галина";
// const age = 35;
// const hobby = "js";
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ
// ${age} РОКІВ, Я ВИВЧАЮ ${hobby}`;

// console.log(message);
// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"
// const name = prompt("Введіть своє імя");
// // console.log(name);
// const mail = prompt("Введіть свою почту");
// const phone = prompt("Введіть свій телефон");
// let message = `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ  ${mail} ПОЧТУ І ${phone} ТЕЛЕФОН`;
// console.log(message);

// ЗАДАЧА 3
// ПОТРІБНО ЗАПИТАТИ У МАГАЗИНІ ЦІНУ ЗА КОЖЕН ОКРЕМИЙ ТОВАР,ТА ВИВЕСТИ ПОВІДОМЛЕННЯМ   ЗАГАЛЬНУ ЦІНУ ТОВАРУ

// const priceApple = Number(prompt("Введіть ціну яблук"));
// const pricePeach = +prompt("Введіть ціну персиків");
// const priceOrange = +prompt("Введіть ціну апельсинів");

// let totalPrice = priceApple + pricePeach + priceOrange;
// let message = `Загальна ціна: ${totalPrice}`
// alert(message);

// ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const age = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК"));
// if  (age === 12){
//     console.log("Верно")
// }
// else {
//     console.log ("НЕ ЗНАЄТЕ? 12")
// }

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ВИЗНАЧАТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// const number = Number(prompt("Введи число"))
// // if (number % 2 === 0) {
// //     console.log("Парне число");
// // }
// // else {
// //     console.log("Не парне число");
// // }
// const result = number % 2 === 0 ? "Парне число" : "Не парне число";
// console.log(result);

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ, ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ
// НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const number = Number(prompt("Введіть місяць народження"))
// if (number === 12 || number === 1 || number === 2) {
//     console.log("Зима")
// }
// else if (number >= 3 && number <= 5) {
//     console.log("Весна")
// }

// else if (number >= 6 && number <= 8) {
//     console.log("Лыто")
// }

// else if (number >= 9 && number <= 11) {
//     console.log("Осінь")
// }
// else {
//     console.log("Дані не валідні")
// }
// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ,
//  АБО ВИДАЄ ПОМИЛКУ, ЩО НЕ ВІРНИЙ ЛОГІН
// const login = "User";
// const password = "User12345";
// const newLogin = prompt("Введіть логін");
// const newPassword = prompt("Введіть пароль");
// // if (login === newLogin && password === newPassword) {
// //   console.log("Hello!");
// // } else {
// //   console.log("Error");
// // }
// let result =
//   login === newLogin && password === newPassword ? "Hello!" : "Error";
// console.log(result);


// ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99


// const period = prompt("Введіть період підписки").toLowerCase();

// switch (period) {
//     case "день":
//         console.log("1.99");
//         break;
//     case "неділя":
//         console.log("5.99");
//         break;
//     case "місяць":
//         console.log("10.99");
//         break;
//     case "рік":
//         console.log("100.99");
//         break;
//     default:
//         console.log("Error");
//         break;
    
// }

// console.log(period)
// ЗАДАЧА 9 
// НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10

// const min = 1;
// const max = 50;
// // for (let i = 1; i <= max; i++){
// //     console.log(i)
// // } 
// for (let i = 1; i <= max; i++){
//     if (i %10===0){
//         console.log(i)
//     }
// }
// ЗАДАЧА 10 
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7 
// "Your name isn't very long"

// const name = "Yana";
// if (name.length > 7){
//     console.log("Wow, you  have a REALLY long name!")
// }
// else {console.log("Your name isn't very long")}
