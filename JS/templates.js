function getHTMLForDish(index) {
    return `
    <li class="dish">
        <img
            src="./assets/img/${dishes[index].img[0].src}"
            alt="${dishes[index].img[0].alt}"
        />
        <div class="dish-content">
            <div class="dish-description">
                <h3>${dishes[index].name}</h3>
                <p>
                    ${dishes[index].description}
                </p>
            </div>
            <div class="price-div column">
                <p>${dishes[index].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
                <button id="addDishButton-${index}" onclick="addDishToBasket(${index})" aria-label="Add ${dishes[index].name} to basket">Add to basket</button>
            </div>
        </div>
    </li>`;
}

function getHTMLForEmptyBasket() {
    return `
    <li class="empty-basket column">
        <p>
            Nothing here yet.<br />Go ahead and choose
            something delicious.
        </p>
        <img
            src="./assets/icon/cart-large.png"
            alt=""
        />
    </li>`;
}

function getHTMLForDishOrder(index) {
    return `
    <li class="dish-order column">
        <div class="dish-order-top">
            <p>${dishes[index].amount} x ${dishes[index].name}</p>
            <button class="delete-button" onclick="deleteDishFromBasket(${index})" aria-label="Remove ${dishes[index].name} from basket"></button>
        </div>
        <div class="dish-order-bottom">
            <div class="dish-amount">
                <button onclick="decreaseAmount(${index})" aria-label="Decrease quantity of ${dishes[index].name}">
                    <img
                        src="./assets/icon/remove.png"
                        alt="Remove-Icon"
                    />
                </button>
                <p>${dishes[index].amount}</p>
                <button onclick="addDishToBasket(${index})" aria-label="Increase quantity of ${dishes[index].name}">
                    <img
                        src="./assets/icon/add.png"
                        alt="Add-Icon"
                    />
                </button>
            </div>
            <p>${calculateDishPrices(index).toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
        </div>
    </li>`;
}

function getHTMLForSummary() {
    return `
    <ul class="bill column">
        <li class="subtotal">
            <p>Subtotal</p>
            <p>${calculateSubtotal().toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
        </li>
        <li class="delivery">
            <p>Delivery fee</p>
            <p>${deliveryFee.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
        </li>
        <hr />
        <li class="total">
            <p>Total</p>
            <p>${calculateTotal().toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
        </li>
    </ul>
    <button class="buy-button" onclick="buyNow()">
        Buy now (${calculateTotal().toLocaleString("de-DE", { style: "currency", currency: "EUR" })})
    </button>`;
}

function getHTMLForAddButton(index) {
    return `<b>Added ${dishes[index].amount}<b>`;
}

function getTextForAddButton() {
    return `Add to basket`;
}

function getHTMLForCategories(category) {
    return `
    <section id="category${category}" class="category-${category} category-section column">
        <div class="category-header">
            <img src="./assets/icon/${category}.png" alt="">
            <h2>${category}</h2>
        </div>
        <ul id="dishList-${category}" class="dish-list column"></ul>
    </section>`;
}
