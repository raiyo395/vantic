# Vantik

A dark-themed, minimal e-commerce storefront for tech accessories — built with vanilla JavaScript and Tailwind CSS, from cart logic to checkout, no frameworks.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)

**[Live Site →](https://raiyo395.github.io/vantic/)**

---

## Features

- Product listing with live search filtering
- Shopping cart with quantity controls (increment, decrement, remove-at-zero)
- Cart persistence via `localStorage` — survives refresh and browser close
- Live-updating order summary (subtotal, shipping, total)
- Checkout flow with empty-cart guard and confirmation toast
- Fully responsive — mobile hamburger nav, mobile search, breakpoint-tuned layouts
- Consistent dark indigo theme across every page

## Built With

- HTML5
- Tailwind CSS v4
- Vanilla JavaScript (ES6 modules)
- `localStorage` for state persistence

## Project Structure

```
├── index.html
├── shop.html
├── checkout.html
├── data/
│   └── products.js
├── scripts/
│   ├── app.js
│   ├── cart.js
│   ├── renderProducts.js
│   ├── checkout/
│   │   ├── cartItems.js
│   │   └── orderSummary.js
│   └── utils/
│       └── money.js
├── src/
│   └── input.css
└── dist/
    └── output.css
```

## Running Locally

1. Clone the repo
2. Open `index.html` with a local server (e.g. VS Code Live Server)
3. To rebuild Tailwind after making style changes:
   ```
   npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
   ```

## What I Learned

This was my first project handling real cart state across multiple pages — the trickiest part wasn't the UI, it was keeping `localStorage`, in-memory state, and the DOM all in sync after every quantity change, remove, and checkout action. Built a consistent pattern of *mutate → save → re-render* used across every interaction, and used it to catch and fix a handful of real bugs (silent import failures, stale renders, duplicate event listeners) along the way.

## About

Built as a portfolio project to practice core e-commerce logic — cart state management, DOM rendering, and responsive design — before moving on to React.

## Author

**Raiyo** — [GitHub](https://github.com/raiyo395)
