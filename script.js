// This is the boilerplate code given for you
// You can modify this code
// Product data
// Sample products data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to render products
function renderProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.onclick = () => addToCart(product);
    
    li.appendChild(addButton);
    productList.appendChild(li);
  });
}

// Function to render cart
function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = ''; // Clear current list

  const cart = getCart();
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Function to get cart from session storage
function getCart() {
  const cart = sessionStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Function to save cart to session storage
function saveCart(cart) {
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add product to cart
function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  saveCart(cart);
  renderCart();
}

// Function to clear cart
function clearCart() {
  sessionStorage.removeItem('cart');
  renderCart();
}

// Initialize page
document.getElementById('clear-cart-btn').addEventListener('click', clearCart);
window.onload = () => {
  renderProducts();
  renderCart();
};
