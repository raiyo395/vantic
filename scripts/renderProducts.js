import { products, renderStars } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { addToCart } from "./cart.js";

export function renderProducts() {
  products.forEach(product => {
    const card = `
      <div class="product-container bg-white/[0.02] border border-white/5 hover:border-indigo-500/50 rounded-lg p-4 transition shadow-lg hover:shadow-[0_0_20px_rgba(129,140,248,0.15)]">
        <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded-md" />
        <h3 class="font-bold mt-3 text-white">${product.name}</h3>
        <div class="flex items-center gap-1 mt-1">
          ${renderStars(product.rating)}
          <span class="text-sm text-gray-500">(${product.reviews})</span>
        </div>
        <p class="text-gray-400 text-sm mt-2">${product.description}</p>
        <div class="flex items-center justify-between mt-3">
          <p class="font-bold text-indigo-400">${formatCurrency(product.priceCents)}</p>
          <button class="js-add-to-cart px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-500 transition" data-add-to-cart="${product.id}">
            Add to Cart
          </button>
        </div>
      </div>
    `;
    document.getElementById("product-grid").insertAdjacentHTML("beforeend", card);
  });

  document.querySelectorAll(".js-add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const productId = button.dataset.addToCart;
      addToCart(productId);
      document.dispatchEvent(new CustomEvent("cart:updated"));
    });
  });
}
