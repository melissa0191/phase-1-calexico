// Challenge 1
fetch('http://localhost:3000/menu')
.then(response => response.json())
.then(data => {
    for (let menu of data) {
        renderName(menu);
        renderItem(menu)
    }
})

// Challenge 2
function renderName(menu) {
    let menuDiv = document.querySelector('#menu-items')
    let name = document.createElement('span')
    name.innerText = menu.name

    menuDiv.appendChild(name)

    name.addEventListener('click', () => renderItem(menu))
}

// Challenge 3
function renderItem(menu) {
    let dishImage = document.querySelector('#dish-image')
    dishImage.src = menu.image

    let dishName = document.querySelector('#dish-name')
    dishName.innerText = menu.name

    let dishDescription = document.querySelector('#dish-description')
    dishDescription.innerText = menu.description

    let dishPrice = document.querySelector('#dish-price')
    dishPrice.innerText = menu.price
}

// Challenge 4
let count = 0
let form = document.querySelector('#cart-form')
form.addEventListener('submit', e => {
    e.preventDefault()

    let cart = document.querySelector('#number-in-cart')
    cart.innerText = e.target[0].value
    cartCounter = parseInt(cart.innerText)
    console.log(cartCounter);
})