export const products = [
  {
    id: 1,
    name: "Nordic 65 Mechanical Keyboard",
    description: "A compact 65% mechanical keyboard with tactile switches and a minimalist aluminum frame. Built for focus, not distraction.",
    priceCents: 12900,
    rating: 4.7,
    reviews: 312,
    image: "./images/1.jpg"
  },
  {
    id: 2,
    name: "Halo Charge Pad",
    description: "15W fast wireless charging with a soft ambient glow ring. Slips seamlessly into any dark desk setup.",
    priceCents: 3900,
    rating: 4.5,
    reviews: 198,
    image: "./images/2.jpg"
  },
  {
    id: 3,
    name: "Vantik Desk Setup Bundle",
    description: "A complete dark-mode desk kit — monitor, lighting, and accessories curated to work together. Everything you need, nothing you don't.",
    priceCents: 34900,
    rating: 4.9,
    reviews: 58,
    image: "./images/3.jpg"
  },
  {
    id: 4,
    name: "Lumen HD Webcam",
    description: "1080p webcam with auto low-light correction and a signature blue-ring indicator. Clarity, even after dark.",
    priceCents: 6900,
    rating: 4.6,
    reviews: 145,
    image: "./images/4.jpg"
  },
  {
    id: 5,
    name: "Levitate Monitor Stand",
    description: "A floating-style monitor riser with built-in ambient lighting. Raises your screen, elevates your setup.",
    priceCents: 5500,
    rating: 4.5,
    reviews: 203,
    image: "./images/5.jpg"
  },
  {
    id: 6,
    name: "Grid Cable Board",
    description: "An elastic grid organizer that keeps every cable, adapter, and dongle exactly where you left it.",
    priceCents: 1900,
    rating: 4.3,
    reviews: 87,
    image: "./images/6.jpg"
  },
  {
    id: 7,
    name: "Arc Desk Lamp",
    description: "A sleek architectural desk lamp with adjustable brightness. Minimal by day, moody by night.",
    priceCents: 4900,
    rating: 4.4,
    reviews: 162,
    image: "./images/7.jpg"
  },
  {
    id: 8,
    name: "Glide Pro Mouse",
    description: "Ergonomic wireless mouse with silent clicks and precision tracking. Built for long sessions.",
    priceCents: 5900,
    rating: 4.6,
    reviews: 276,
    image: "./images/8.jpg"
  }
];

// Renders star icons (filled, half, empty) based on a rating number
export function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const starIcon = (fillClass) => `
    <svg class="w-4 h-4 ${fillClass}" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.363-1.118l-3.37-2.448c-.782-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z"/>
    </svg>
  `;

  let html = "";
  for (let i = 0; i < fullStars; i++) html += starIcon("text-yellow-400");
  if (hasHalfStar) html += starIcon("text-yellow-400 opacity-50");
  for (let i = 0; i < emptyStars; i++) html += starIcon("text-gray-600");

  return html;
}

export function getProduct(productId){
  return products.find((product) => {
    return Number(productId) === product.id;
  });
}