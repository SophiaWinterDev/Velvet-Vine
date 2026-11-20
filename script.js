const DISH_SECTION_REF = document.getElementById("dishSection");

function init() {
    renderDishes();
}

function renderDishes() {
    DISH_SECTION_REF.innerHTML = "";
    for (let index = 0; index < dishes.length; index++) {
        DISH_SECTION_REF.innerHTML += getHTMLForDish(index);
    }
}
