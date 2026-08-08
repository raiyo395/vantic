export let cart = JSON.parse(localStorage.getItem("cart")) || []; 

export function addToCart(productId, quantity = 1) { 
  let matchingItem; 
  
  cart.find((item) => { 
    if (String(item.productId) === String(productId)) { 
      matchingItem = item; 
    } 
  }); 

  if (matchingItem) { 
    matchingItem.quantity += quantity; 
  } else { 
    cart.push({ productId, quantity }); 
  } 

  saveToStorage(); 

  const headerCartQuantityEl = document.querySelector(".js-cart-quantity"); 
  if (headerCartQuantityEl) { 
    headerCartQuantityEl.innerHTML = calculateCartQuantity(); 
  } // <-- Fixed closing condition block
} // <-- THIS WAS MISSING! This closes the addToCart function correctly.

export function removeFromCart(productId) { 
  const index = cart.findIndex((item) => String(item.productId) === String(productId)); 
  
  if (index !== -1) { 
    cart.splice(index, 1); 
  } 
  saveToStorage(); 
}

export function updateQuantity(productId, newQuantity) { 
  let matchingItem; 
  
  cart.find((item) => { 
    if (String(item.productId) === String(productId)) { 
      matchingItem = item; 
    } 
  }); 

  if (matchingItem) { 
    matchingItem.quantity = newQuantity; 
  } 
  saveToStorage(); 
}

export function calculateCartQuantity() { 
  let totalQuantity = 0; 
  cart.forEach((item) => { 
    totalQuantity += item.quantity; 
  }); 
  return totalQuantity; 
}

export function saveToStorage() { 
  localStorage.setItem("cart", JSON.stringify(cart)); 
}
