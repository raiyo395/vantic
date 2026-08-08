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

   // Flat shipping fee - $4.99. Change this number if you want a
   // different rate, or add free-shipping-over-$X logic later.
   const shippingCents = 499;

   // Total = everything added together
   const totalCents = subtotalCents + shippingCents;

   // Grab the three fixed elements already sitting in checkout.html
   const subtotalEl = document.getElementById("cart-subtotal");
   const shippingEl = document.getElementById("cart-shipping");
   const totalEl = document.getElementById("cart-total");

   // Update their text - NOT innerHTML, since these aren't building new
   // elements, just changing the text inside ones that already exist
   if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotalCents);
   if (shippingEl) shippingEl.textContent = formatCurrency(shippingCents);
   if (totalEl) totalEl.textContent = formatCurrency(totalCents);
}