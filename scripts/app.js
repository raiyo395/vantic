import { renderCartItems } from './checkout/cartItems.js';
import { renderProducts } from './renderProducts.js';
import { cart, calculateCartQuantity, saveToStorage } from './cart.js';
import { renderOrderSummary } from './checkout/orderSummary.js';

// 1. Only run product rendering if the product grid exists (e.g., on shop.html)
if (document.getElementById('product-grid')) {
    renderProducts();
}

// 2. Only run cart rendering if the cart items container exists (e.g., on cart.html)
if (document.getElementById('cart-items')) {
    renderCartItems();
}

// 3. Update the cart badge on every page, since it likely lives in the header
const cartQuantityEl = document.querySelector('.js-cart-quantity');
if (cartQuantityEl) {
    cartQuantityEl.innerHTML = calculateCartQuantity();
}
// 4. Only run order summary rendering if the checkout summary exists (e.g., on checkout.html)
if (document.getElementById('cart-subtotal')) {
    renderOrderSummary();
}
// 5. Checkout button - only exists on checkout.html
      
                const checkoutButton = document.getElementById('checkout-button');
        if (checkoutButton) {
           checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                return;
            }
            cart.length = 0;
            saveToStorage();
            renderCartItems();
            renderOrderSummary();

            const successMessage = document.getElementById('success-message');
            successMessage.classList.remove('hidden');

            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 3000);
        });
        }

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

if (searchInput && searchButton) {
    const productCards = document.querySelectorAll('.product-container');
    
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        productCards.forEach(card => {
            const cardText = card.innerText.toLowerCase();
            if (cardText.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    searchInput.addEventListener('input', filterProducts);
    searchButton.addEventListener('click', filterProducts);
}

