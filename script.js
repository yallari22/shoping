let total = 0;

function addToCart(productName, price) {
  const cartItems = document.getElementById('cart-items');
  const listItem = document.createElement('li');
  listItem.textContent = `${productName} - $${price.toFixed(2)}`;
  cartItems.appendChild(listItem);

  total += price;
  document.getElementById('total').textContent = total.toFixed(2);
}
