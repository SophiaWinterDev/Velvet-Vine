const BASKET_CONTENT_REF = document.getElementById("basketContent");
const BASKET_SUMMARY_REF = document.getElementById("basketSummary");
let deliveryFee = 2.99;

function init() {
    renderCategories();
    renderDishes();
    renderBasket();
    window.addEventListener("resize", checkWindowWidth);
}

function renderCategories() {
    let categories = [];
    document.getElementById("dishSection").innerHTML = "";
    for (let index = 0; index < dishes.length; index++) {
        let category = dishes[index].category;
        if (!categories.includes(category)) {
            categories.push(category);
            document.getElementById("dishSection").innerHTML +=
                getHTMLForCategories(category);
        }
    }
}

function renderDishes() {
    for (let index = 0; index < dishes.length; index++) {
        let category = dishes[index].category;
        document.getElementById(`dishList-${category}`).innerHTML +=
            getHTMLForDish(index);
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
        document.getElementById(`addDishButton-${index}`).innerText =
            getTextForAddButton();
    }
    renderBasket();
}

function addDishToBasket(index) {
    dishes[index].amount++;
    document.getElementById(`addDishButton-${index}`).innerHTML =
        getHTMLForAddButton(index);
    renderBasket();
}

function deleteDishFromBasket(index) {
    dishes[index].amount = 0;
    document.getElementById(`addDishButton-${index}`).innerText =
        getTextForAddButton();
    renderBasket();
}

function decreaseAmount(index) {
    dishes[index].amount--;
    document.getElementById(`addDishButton-${index}`).innerHTML =
        getHTMLForAddButton(index);
    if (dishes[index].amount === 0) {
        document.getElementById(`addDishButton-${index}`).innerText =
            getTextForAddButton();
    }
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

function buyNow() {
    closeBasketDialog();
    clearBasket();
    openConfirmationDialog();
}

// #region Dialog
function openBasketDialog() {
    document.getElementById("basketDialog").showModal();
}

function closeBasketDialog() {
    document.getElementById("basketDialog").close();
}

function openConfirmationDialog() {
    document.getElementById("confirmationDialog").showModal();
    setTimeout(closeConfirmationDialog, 3000);
}

function closeConfirmationDialog() {
    document.getElementById("confirmationDialog").close();
}

function checkWindowWidth() {
    if (window.innerWidth >= 1000) {
        closeBasketDialog();
    }
}

function bubblingPrevention(event) {
    event.stopPropagation();
}
// #endregion
