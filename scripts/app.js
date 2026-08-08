import { renderCartItems } from './checkout/cartItems.js';
import { renderProducts } from './renderProducts.js';
import { cart, calculateCartQuantity, saveToStorage } from './cart.js';
import { renderOrderSummary } from './checkout/orderSummary.js';

if (document.getElementById('product-grid')) {
    renderProducts();
}

if (document.getElementById('cart-items')) {
    renderCartItems();
}

const cartQuantityEls = document.querySelectorAll('.js-cart-quantity');
function updateCartQuantity() {
    const qty = calculateCartQuantity();
    cartQuantityEls.forEach(el => {
        el.innerHTML = qty;
    });
}
updateCartQuantity();
document.addEventListener('cart:updated', updateCartQuantity);

if (document.getElementById('cart-subtotal')) {
    renderOrderSummary();
}

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
        updateCartQuantity();

        const successMessage = document.getElementById('success-message');
        successMessage.classList.remove('hidden');

        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 3000);
    });
}

function filterProducts(searchTerm) {
    const productCards = document.querySelectorAll('.product-container');
    const term = searchTerm.toLowerCase();
    productCards.forEach(card => {
        const cardText = card.innerText.toLowerCase();
        card.classList.toggle('hidden', !cardText.includes(term));
    });
}

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
if (searchInput && searchButton) {
    searchInput.addEventListener('input', () => filterProducts(searchInput.value));
    searchButton.addEventListener('click', () => filterProducts(searchInput.value));
}

const searchInputMobile = document.getElementById('searchInputMobile');
const searchButtonMobile = document.getElementById('searchButtonMobile');
if (searchInputMobile && searchButtonMobile) {
    searchInputMobile.addEventListener('input', () => filterProducts(searchInputMobile.value));
    searchButtonMobile.addEventListener('click', () => filterProducts(searchInputMobile.value));
}

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}
