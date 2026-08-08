import { products, getProduct } from "../../data/products.js"; 
import { formatCurrency } from "../utils/money.js"; 
import { cart, saveToStorage, removeFromCart, calculateCartQuantity } from "../cart.js"; 
import { renderOrderSummary } from './orderSummary.js';

export function renderCartItems() { 
    // Always update the header cart counter first, since it exists on all pages
    const headerCartQuantityEl = document.querySelector(".js-cart-quantity");
    if (headerCartQuantityEl) {
        headerCartQuantityEl.innerHTML = calculateCartQuantity(); 
    }

    // Fetch the checkout-specific elements
    const cartItemsEl = document.getElementById("cart-items");
    const emptyCartEl = document.getElementById("empty-cart");

    // FIX: If we aren't on the checkout page, stop executing the rest of this function safely
    if (!cartItemsEl) {
        return;
    }

    let cartSummaryhtml = ''; 
    cart.forEach(element => { 
        const productId = element.productId; 
        const matchingProduct = getProduct(productId); 
        if (!matchingProduct) return; 
        
        cartSummaryhtml += ` 
        <div class="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-lg p-4"> 
            <!-- Image --> 
            <img src="${matchingProduct.image}" alt="${matchingProduct.name}" class="w-20 h-20 object-cover rounded-md" /> 
            <!-- Details --> 
            <div class="flex-1"> 
                <h3 class="font-bold text-white">${matchingProduct.name}</h3> 
                <p class="text-gray-400 text-sm mt-1">${formatCurrency(matchingProduct.priceCents)} each</p> 
                <!-- Quantity controls --> 
                <div class="flex items-center gap-2 mt-2"> 
                    <button data-product-id="${matchingProduct.id}" class="js-quantity-down w-7 h-7 bg-gray-800 rounded-md hover:bg-gray-700">-</button> 
                    <span class="js-quantity-${matchingProduct.id} text-sm">${element.quantity}</span> 
                    <button data-product-id="${matchingProduct.id}" class="js-quantity-up w-7 h-7 bg-gray-800 rounded-md hover:bg-gray-700">+</button> 
                </div> 
            </div> 
            <!-- Line total + Remove --> 
            <div class="flex flex-col items-end gap-2"> 
                <span class="text-white font-semibold text-sm">${formatCurrency(matchingProduct.priceCents * element.quantity)}</span> 
                <button data-product-id="${matchingProduct.id}" class="js-remove-item text-gray-500 hover:text-red-400 transition text-xs">Remove</button> 
            </div> 
        </div> `; 
    }); 

    cartItemsEl.innerHTML = cartSummaryhtml; 
    
    if (emptyCartEl) {
        emptyCartEl.style.display = cart.length === 0 ? "block" : "none"; 
    }

    document.querySelectorAll(".js-quantity-up").forEach(button => { 
        button.addEventListener("click", () => { 
            const productId = button.dataset.productId; 
            cart.find((matchingItem) => { 
                if (String(matchingItem.productId) === String(productId)) {  
                    matchingItem.quantity += 1; 
                    saveToStorage(); 
                    renderCartItems(); 
                    renderOrderSummary();
                } 
            }); 
        }); 
    }); 

  document.querySelectorAll(".js-quantity-down").forEach(button => { 
    button.addEventListener("click", () => { 
        const productId = button.dataset.productId; 
        cart.find((matchingItem) => { 
            if (String(matchingItem.productId) === String(productId)) { 
               if (matchingItem.quantity > 1) { 
                    matchingItem.quantity -= 1; 
                    saveToStorage(); 
                } else {
                    removeFromCart(productId);
                }
                renderCartItems(); 
                renderOrderSummary();
            } 
        }); 
    }); 
});

    document.querySelectorAll(".js-remove-item").forEach(button => { 
        button.addEventListener("click", () => { 
            removeFromCart(Number(button.dataset.productId)); 
            renderCartItems(); 
            renderOrderSummary(); 
        }); 
    }); 
}
