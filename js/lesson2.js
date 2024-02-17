// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// // Джаз, Блюз
// // Джаз, Блюз, Рок-н-ролл
// // Джаз, Классика, Рок-н-ролл
// // Классика, Рок-н-ролл
// // Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");
// styles.splice(1, 1, "Классика")
// styles.shift()
// styles.unshift("Рэп", "Регги")

// console.log(styles);
// ЗАДАЧА 2
// використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено
// 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const arr = ['Mango', 'Poly', 'Ajax'];

// for (let i = 0; i < arr.length; i += 1) {

// console.log(i, arr[i]);

// }
// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// function findSmallestNumber(numbers) {
//   let smallNumber = numbers[0];
//   for (const number of numbers) {
//     if (smallNumber > number) {
//       smallNumber = number;
//     }
//   }
//   return smallNumber;
// }

// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом

// const str = "ротатор";//true
// const newString = "Hello";//false

// const strReversed = str.split('').reverse().join('');
// console.log(strReversed === str);

// const newStringReverse = newString.split('').reverse().join('');
// console.log(newStringReverse === newString);

// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення
// .Всі аргументи будуть тільки числовими

// function calculateAverage(...args) {
//   let middleNumber = 0;
//   for (let arg of args) {
//     middleNumber += arg;
//   }

//   return (middleNumber / args.length).toFixed(1);
// }

// // console.log(1, 2, 3.76);

// console.log(calculateAverage(1, 2, 3, 4, 9.4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"),
// і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"
// console.log(greet("Василь"));//Привіт Василь
// console.log(greet());//Привіт гість

// function greet(name) {
//     if (!name) {
//         return `Привіт, гість`;
//     }
//     return `Привіт, ${name}`;
// }

// function greet(name) {
//     const nameId = !name ? `Привіт, гість` : `Привіт, ${name}`;
//     return nameId;
// }

// function greet(name = "гість") {
//     return `Привіт, ${name}`;
// }
// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// console.log(capitalize("the quick brown fox")); // 'The Quick Brown Fox '
// function capitalize(string) {
//   const newString = string.split(" ");
//   let twoLater = [];
//   for (const str of newString) {
//     const firstLater = str[0].toUpperCase();
//     const newString = str.slice(1);
//     const final = `${firstLater}${newString}`;
//     twoLater.push(final);
//   }
//   return twoLater.join(" ");
// }

// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове




// updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']


// function addCourse(name) {
//     if (courses.includes(name)) {
//         console.log('У вас уже є такий курс');
//         return
//     }
//         courses.push(name)
    
// }
// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже є такий курс'

// function removeCourse(name) {
//     if (courses.indexOf(name) === -1) {
//         console.log('Курс з таким іменем не найдено');
//         return
//     }
//     console.log(courses.splice(courses.indexOf(name), 1));
//     console.log(courses);
// }


// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс з таким іменем не найдено'

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL","Express"];

// function updateCourse(oldName, newName) {
//     if (courses.indexOf(oldName)) {
//         console.log(courses.splice(courses.indexOf(oldName), 1, newName));
        
//     }
//     console.log(courses);
// }

// updateCourse("PostgreSQL", "JavaScript"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']