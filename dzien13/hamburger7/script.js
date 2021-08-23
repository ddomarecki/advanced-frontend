/* 
6. Obsługa zdarzenia click JS
7. Użyj klasy "on" dla elementów, które są aktywne (dodawaj/odejmuj klasę on po kliknięciu)

Strukturę początkową zróbmy razem :)
*/

const arrow = document.querySelector(".arrow");
const nav = document.querySelector("nav");

arrow.addEventListener("click", function () {
    arrow.classList.toggle("on");
    nav.classList.toggle("on");

})