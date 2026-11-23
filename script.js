const DISH_LIST_REF = document.getElementById("dishList");
const BASKET_CONTENT_REF = document.getElementById("basketContent");
const BASKET_SUMMARY_REF = document.getElementById("basketSummary");
let deliveryFee = 2.99;

function init() {
    renderDishes();
    renderBasket();
    window.addEventListener("resize", checkWindowWidth);
}

function renderDishes() {
    DISH_LIST_REF.innerHTML = "";
    for (let index = 0; index < dishes.length; index++) {
        DISH_LIST_REF.innerHTML += getHTMLForDish(index);
    }
}

function renderBasket() {
    BASKET_CONTENT_REF.innerHTML = "";
    let isEmpty = true;
    for (let index = 0; index < dishes.length; index++) {
        if (dishes[index].amount > 0) {
            BASKET_CONTENT_REF.innerHTML += getHTMLForDishOrder(index);
            isEmpty = false;
        }
        renderSummary();
    }
    if (isEmpty) {
        showEmptyBasket();
    }
    calculateCartAmount();
}

function renderSummary() {
    BASKET_SUMMARY_REF.innerHTML = "";
    BASKET_SUMMARY_REF.innerHTML = getHTMLForSummary();
}

function showEmptyBasket() {
    BASKET_CONTENT_REF.innerHTML = getHTMLForEmptyBasket();
    BASKET_SUMMARY_REF.innerHTML = "";
}

function clearBasket() {
    for (let index = 0; index < dishes.length; index++) {
        dishes[index].amount = 0;
    }
    renderBasket();
}

function addDishToBasket(index) {
    dishes[index].amount++;
    document.getElementById(`addDishButton-${index}`).innerText = `Added ${dishes[index].amount}`
    renderBasket();
}

function deleteDishFromBasket(index) {
    dishes[index].amount = 0;
    document.getElementById(`addDishButton-${index}`).innerText = `Add to basket`
    renderBasket();
}

function decreaseAmount(index) {
    dishes[index].amount--;
    document.getElementById(`addDishButton-${index}`).innerText = `Added ${dishes[index].amount}`
    renderBasket();
}

function calculateDishPrices(index) {
    let sum = 0;
    sum = dishes[index].price * dishes[index].amount;
    return sum;
}

function calculateSubtotal() {
    let sum = 0;
    for (let index = 0; index < dishes.length; index++) {
        if (dishes[index].amount > 0) {
            sum += dishes[index].amount * dishes[index].price;
        }
    }
    return sum;
}

function calculateTotal() {
    let sum = 0;
    sum = deliveryFee + calculateSubtotal();
    return sum;
}

function calculateCartAmount() {
    let amount = 0;
    for (let index = 0; index < dishes.length; index++) {
        amount += dishes[index].amount;
    }
    document.getElementById("cartAmountBubble").innerText = amount;
}

// #region Dialog
function openBasketDialog() {
    document.getElementById("basketDialog").showModal();
    lockScroll();
    document
        .getElementById("basketDialog")
        .addEventListener("close", unlockScroll, { once: true });
}

function closeBasketDialog() {
    document.getElementById("basketDialog").close();
}

function openConfirmationDialog() {
    document.getElementById("confirmationDialog").showModal();
    setTimeout(closeConfirmationDialog, 5000);
    lockScroll();
    document
        .getElementById("confirmationDialog")
        .addEventListener("close", unlockScroll, { once: true });
}

function closeConfirmationDialog() {
    document.getElementById("confirmationDialog").close();
}

function lockScroll() {
    scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
}

function unlockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollPosition);
}

function checkWindowWidth() {
    if (window.innerWidth >= 1000) {
        closeDialog();
    }
}
// #endregion
