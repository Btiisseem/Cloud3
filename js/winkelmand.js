
let shoppingCart = [];

function addToCart(productName, productPrice) {

  let existingItem = shoppingCart.find((item) => item.name === productName);

  if (existingItem) {

    existingItem.quantity++;
  } else {

    let newItem = {
      name: productName,
      price: productPrice,
      quantity: 1,
    };
    shoppingCart.push(newItem);
  }

  updateCart();
}

function updateCart() {
  let cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "<h2>Winkelmand</h2><ul>";

  let totalPrice = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    cartContainer.innerHTML +=
      "<li>" +
      shoppingCart[i].name +
      " X " +
      shoppingCart[i].quantity +
      " - " +
      shoppingCart[i].price * shoppingCart[i].quantity +
      "€</li>";
    totalPrice += shoppingCart[i].price * shoppingCart[i].quantity;
  }

  cartContainer.innerHTML +=
    "</ul><p><strong>Totaalprijs: " + totalPrice + "€</strong></p>";
}
