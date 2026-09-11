let products = [
    {
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
];

function initProducts() {
  renderProducts();
}

let cart = {}; // product name -> quantity

const elements = {
  productGrid: document.getElementById('product-grid'),
  cartCount: document.getElementById('cart-count'),
  cartEmpty: document.getElementById('cart-empty'),
  cartPopulated: document.getElementById('cart-populated'),
  cartItems: document.getElementById('cart-items'),
  cartTotalPrice: document.getElementById('cart-total-price'),
  confirmOrderBtn: document.getElementById('confirm-order-btn'),
  orderModal: document.getElementById('order-modal'),
  orderItems: document.getElementById('order-items'),
  modalTotalPrice: document.getElementById('modal-total-price'),
  startNewOrderBtn: document.getElementById('start-new-order-btn')
};

// SVG icons
const iconAddToCart = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>`;
const iconIncrement = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>`;
const iconDecrement = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path d="M0 .375h10v1.25H0V.375Z"/></svg>`;
const iconRemove = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>`;

function renderProducts() {
  elements.productGrid.innerHTML = '';
  products.forEach((product, index) => {
    const qty = cart[product.name] || 0;
    const isSelected = qty > 0;
    
    // Desktop layout generally takes priority over mobile
    const imageUrl = product.image.desktop; // Use desktop for simplicity

    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
      <div class="product-image-container">
        <img src="${imageUrl}" alt="${product.name}" class="product-image ${isSelected ? 'selected' : ''}">
        <div class="add-to-cart-wrapper">
          ${!isSelected ? `
            <button class="btn-add-to-cart" onclick="addToCart('${product.name}')">
              ${iconAddToCart} Add to Cart
            </button>
          ` : `
            <div class="btn-quantity-control">
              <button class="qty-btn" onclick="updateQuantity('${product.name}', -1)">${iconDecrement}</button>
              <span>${qty}</span>
              <button class="qty-btn" onclick="updateQuantity('${product.name}', 1)">${iconIncrement}</button>
            </div>
          `}
        </div>
      </div>
      <div class="product-category">${product.category}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-price">$${product.price.toFixed(2)}</div>
    `;
    elements.productGrid.appendChild(card);
  });
}

window.addToCart = function(productName) {
  if (!cart[productName]) {
    cart[productName] = 1;
  }
  updateUI();
};

window.updateQuantity = function(productName, delta) {
  if (cart[productName]) {
    cart[productName] += delta;
    if (cart[productName] <= 0) {
      delete cart[productName];
    }
  }
  updateUI();
};

window.removeFromCart = function(productName) {
  delete cart[productName];
  updateUI();
};

function updateUI() {
  renderProducts();
  renderCart();
}

function renderCart() {
  const cartEntries = Object.entries(cart);
  const totalItems = cartEntries.reduce((sum, [_, qty]) => sum + qty, 0);
  elements.cartCount.innerText = totalItems;

  if (totalItems === 0) {
    elements.cartEmpty.classList.remove('hidden');
    elements.cartPopulated.classList.add('hidden');
  } else {
    elements.cartEmpty.classList.add('hidden');
    elements.cartPopulated.classList.remove('hidden');

    let totalAmount = 0;
    elements.cartItems.innerHTML = '';
    
    cartEntries.forEach(([productName, qty]) => {
      const product = products.find(p => p.name === productName);
      const itemTotal = product.price * qty;
      totalAmount += itemTotal;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <div class="cart-item-details">
          <div class="cart-item-name">${productName}</div>
          <div class="cart-item-price-info">
            <span class="cart-item-qty">${qty}x</span>
            <span class="cart-item-unit-price">@ $${product.price.toFixed(2)}</span>
            <span class="cart-item-total">$${itemTotal.toFixed(2)}</span>
          </div>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart('${productName}')">
          ${iconRemove}
        </button>
      `;
      elements.cartItems.appendChild(itemEl);
    });

    elements.cartTotalPrice.innerText = `$${totalAmount.toFixed(2)}`;
  }
}

function showOrderConfirmation() {
  elements.orderItems.innerHTML = '';
  let totalAmount = 0;
  
  Object.entries(cart).forEach(([productName, qty]) => {
    const product = products.find(p => p.name === productName);
    const itemTotal = product.price * qty;
    totalAmount += itemTotal;

    const itemEl = document.createElement('div');
    itemEl.className = 'order-item';
    itemEl.innerHTML = `
      <div class="order-item-left">
        <img src="${product.image.thumbnail}" class="order-item-img" alt="${product.name}">
        <div class="order-item-details">
          <div class="order-item-name">${product.name}</div>
          <div class="cart-item-price-info">
            <span class="cart-item-qty">${qty}x</span>
            <span class="cart-item-unit-price">@ $${product.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div class="order-item-total">$${itemTotal.toFixed(2)}</div>
    `;
    elements.orderItems.appendChild(itemEl);
  });

  elements.modalTotalPrice.innerText = `$${totalAmount.toFixed(2)}`;
  elements.orderModal.classList.remove('hidden');
}

function startNewOrder() {
  cart = {};
  elements.orderModal.classList.add('hidden');
  updateUI();
}

// Event Listeners
elements.confirmOrderBtn.addEventListener('click', showOrderConfirmation);
elements.startNewOrderBtn.addEventListener('click', startNewOrder);

// Init
initProducts();
