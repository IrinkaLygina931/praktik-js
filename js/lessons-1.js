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

const age = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК"));
if  (age === 12){
    console.log("Верно")
}
else {
    console.log ("НЕ ЗНАЄТЕ? 12")
}
