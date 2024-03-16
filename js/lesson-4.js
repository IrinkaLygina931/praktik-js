// ЗАДАЧА 1 
// Створіть карточки товару з масиву використовуючи 
//createElement

import cars from "./date/cars.js";

const carElement = document.querySelector(".js-goods");
function carCreate ({name, img, price, description}) {
    const liEl = document.createElement("li");
    const markUp = document.createElement("h2");
    markUp.textContent = name;
    
    const imgEl = document.createElement("img");
    imgEl.src = img;
    imgEl.alt = name;
    imgEl.width = 300;

    const priceEl = document.createElement("p");
    priceEl.textContent = price;

    const descEl = document.createElement("h3");
    descEl.textContent = description;

    liEl.append(markUp, imgEl, priceEl, descEl);  
    return liEl; 
}

const sort = cars.map(carCreate);
console.log(sort);

carElement.append(...sort);


