import { formatCurrency } from '../utils/money.js'; 
import { getProduct } from '../../data/products.js';
import { cart } from '../cart.js';



export function renderOrderSummary() {
   let subtotalCents = 0; 

   cart.forEach((item) => { 
      const matchingProduct = getProduct(item.productId);
      if (matchingProduct) {
         subtotalCents += matchingProduct.priceCents * item.quantity;
      }
   }); 

   const shippingCents = 499;

   const totalCents = subtotalCents + shippingCents;

   const subtotalEl = document.getElementById("cart-subtotal");
   const shippingEl = document.getElementById("cart-shipping");
   const totalEl = document.getElementById("cart-total");


   if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotalCents);
   if (shippingEl) shippingEl.textContent = formatCurrency(shippingCents);
   if (totalEl) totalEl.textContent = formatCurrency(totalCents);
}
