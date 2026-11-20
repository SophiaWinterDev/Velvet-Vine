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
                <button>Add to basket</button>
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
