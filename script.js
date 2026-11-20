const DISH_LIST_REF = document.getElementById("dishList");
const BASKET_CONTENT_REF = document.getElementById("basketContent");
const BASKET_SUMMARY_REF = document.getElementById("basketSummary");

function init() {
    renderDishes();
    showEmptyBasket();
}

function renderDishes() {
    DISH_LIST_REF.innerHTML = "";
    for (let index = 0; index < dishes.length; index++) {
        DISH_LIST_REF.innerHTML += getHTMLForDish(index);
    }
}

function showEmptyBasket() {
    BASKET_CONTENT_REF.innerHTML = "";
    BASKET_CONTENT_REF.innerHTML = getHTMLForEmptyBasket();
    BASKET_SUMMARY_REF.innerHTML = "";
}
