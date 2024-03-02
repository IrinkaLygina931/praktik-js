// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і 
// викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

// function letMeSeeYourName(callback) {
//     const user = prompt("введіть своє ім'я");
//     callback(user);
// }
// function greet(name) {
//     console.log(`Привіт ${name}`);
// }
// letMeSeeYourName(greet);


// АДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, 
// а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, 
// в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

// function makeProduct(name, price, getProduct) {
//     const products = {
//         name, price, id: Date.now()
//     }
//     getProduct(products) 
// }

// function showProduct(tovar) {
//     console.log(tovar);
// }

// makeProduct("Холодильник", 10000, showProduct);
