<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vantik | Cart</title>
  <link rel="stylesheet" href="./dist/output.css">
</head>
<body class="bg-[#0B0D17] text-white antialiased">

  <!-- HEADER -->
<header class="sticky top-0 z-50 w-full flex items-center justify-between px-6 sm:px-12 md:px-24 py-5 bg-[#0B0D17]/80 backdrop-blur-md border-b border-white/5">
  <a href="index.html" class="block group">
    <h1 class="text-white text-2xl font-black tracking-wider transition-all duration-300 group-hover:text-indigo-400 drop-shadow-[0_0_12px_rgba(129,140,248,0.3)]">
      Vantik<span class="text-indigo-500">.</span>
    </h1>
  </a>

  <nav class="hidden sm:block">
    <ul class="flex items-center gap-8 text-sm font-medium tracking-wide text-gray-400">
      <li><a href="index.html" class="hover:text-white transition-colors duration-200">Home</a></li>
      <li><a href="shop.html" class="hover:text-white transition-colors duration-200">Shop</a></li>
      <li><a href="#" class="hover:text-white transition-colors duration-200">About</a></li>
      <li><a href="#" class="hover:text-white transition-colors duration-200">Contact</a></li>
    </ul>
  </nav>

  <div class="flex items-center gap-4">
    <a href="shop.html" class="hidden sm:inline-block text-xs uppercase tracking-widest text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
      Continue Shopping &rarr;
    </a>
    <button id="menu-toggle" class="sm:hidden text-white text-2xl" aria-label="Menu">☰</button>
  </div>
</header>

<div id="mobile-menu" class="hidden sm:hidden bg-[#0B0D17] border-b border-white/5 px-6 py-4">
  <ul class="flex flex-col gap-4 text-sm font-medium text-gray-300">
    <li><a href="index.html" class="hover:text-white transition-colors">Home</a></li>
    <li><a href="shop.html" class="hover:text-white transition-colors">Shop</a></li>
    <li><a href="#" class="hover:text-white transition-colors">About</a></li>
    <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
  </ul>
</div>

  <!-- PAGE INTRO -->
  <section class="max-w-5xl mx-auto px-6 sm:px-12 md:px-24 pt-10 pb-4">
    <h2 class="text-3xl font-bold text-white">Your Cart</h2>
    <p class="text-gray-400 mt-2">Review your items before checkout.</p>
  </section>

  <!-- CART CONTENT -->
  <main class="max-w-5xl mx-auto px-6 sm:px-12 md:px-24 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">

    <!-- CART ITEMS LIST -->
    <div class="lg:col-span-2 space-y-4">
      <div id="cart-items"></div>

      <!-- EMPTY CART STATE -->
      <div id="empty-cart" class="text-center py-16 border border-dashed border-white/10 rounded-lg">
        <p class="text-gray-400">Your cart is empty.</p>
        <a href="shop.html" class="inline-block mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded transition-colors shadow-lg shadow-indigo-600/15">
          Continue Shopping
        </a>
      </div>
    </div>

    <!-- ORDER SUMMARY -->
    <div class="bg-white/[0.02] border border-white/5 rounded-xl p-6 h-fit">
      <h3 class="text-lg font-bold text-white mb-4">Order Summary</h3>

      <div class="flex justify-between text-sm text-gray-400 mb-2">
        <span>Subtotal</span>
        <span id="cart-subtotal">$0.00</span>
      </div>
      <div class="flex justify-between text-sm text-gray-400 mb-2">
        <span>Shipping</span>
        <span id="cart-shipping">$0.00</span>
      </div>
      <div class="border-t border-white/5 my-3"></div>
      <div class="flex justify-between text-white font-bold mb-6">
        <span>Total</span>
        <span id="cart-total">$0.00</span>
      </div>

      
      <button id="checkout-button" class="w-full py-3 bg-[#E25C3D] hover:bg-[#c95135] text-white text-sm font-medium rounded transition-colors shadow-lg shadow-[#E25C3D]/20">
        Proceed to Checkout
      </button>
    </div>

  </main>
        <div id="success-message" class="hidden fixed top-24 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-3 rounded shadow-lg z-50">
        Order placed successfully!
      </div>

  <!-- FOOTER -->
  <footer class="w-full bg-[#07080E] border-t border-white/5 px-6 sm:px-12 md:px-24 py-16 text-sm text-gray-400">
    <div class="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center md:text-left text-xs text-gray-600 flex flex-col md:flex-row justify-between gap-4">
      <p>&copy; 2026 Vantik. All rights reserved.</p>
      <div class="flex justify-center gap-6">
        <a href="#" class="hover:text-gray-400">Privacy Policy</a>
        <a href="#" class="hover:text-gray-400">Terms of Service</a>
      </div>
    </div>
  </footer>

  <script type="module" src="./scripts/app.js"></script>
</body>
</html>
