// ЗАДАЧА 1
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

localStorage.setItem("thema", "light");
document.addEventListener("DOMContentLoaded", changeThema);
const checkBox = document.querySelector(".checkbox");

function changeThema() {
    const themaKey = localStorage.getItem("thema");
    if (themaKey) {
        document.body.classList.add(themaKey)
    }
    checkBox.addEventListener("change", function () {
        const markCheckBox = this.checked;
        localStorage.setItem("thema", markCheckBox ? "light" : "dark");
        document.body.classList.toggle("light", !markCheckBox);
        document.body.classList.toggle("dark", markCheckBox);
    })
}

