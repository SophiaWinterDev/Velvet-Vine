function getHTMLForDish(index) {
    return `
    <li class="dish">
        <img
            src="./assets/img/${dishes[index].img[0].src}"
            alt="${dishes[index].img[0].alt}"
        />
        <div class="dish-content">
            <div class="dish-description">
                <h2>${dishes[index].name}</h2>
                <p>
                    ${dishes[index].description}
                </p>
            </div>
            <div class="price-div column">
                <p>${dishes[index].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
                <button onclick="addDishToBasket(${index})">Add to basket</button>
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
            <p>1 x ${dishes[index].name}</p>
            <button class="delete-button"></button>
        </div>
        <div class="dish-order-bottom">
            <div class="dish-amount">
                <button>
                    <img
                        src="./assets/icon/remove.png"
                        alt="Remove-Icon"
                    />
                </button>
                <p>1</p>
                <button>
                    <img
                        src="./assets/icon/add.png"
                        alt="Add-Icon"
                    />
                </button>
            </div>
            <p>${dishes[index].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
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
    <button class="buy-button">
        Buy now (${calculateTotal().toLocaleString("de-DE", { style: "currency", currency: "EUR" })})
    </button>`;
}
