# 🍬 SugarDrop Co. - Artisan Candy Storefront (SellAuth Powered)

A modern, high-converting e-commerce storefront for an artisan candy and confection brand, integrated with **SellAuth Embed v3** for instant modal checkout, card/crypto payments, and automated order fulfillment.

---

## ✨ Key Features

- **SellAuth Embed v3 Protocol**:
  - Direct **"Buy Now"** button on every product with native modal checkout.
  - Multi-Item **Cart Drawer**: Customers can bundle multiple sweets and checkout in a single SellAuth transaction.
  - **In-Store SellAuth Settings**: Connect your own SellAuth Shop ID, Shop Subdomain URL, and theme via the header button without modifying code!
  - Fail-safe fallback links if scripts or popups are restricted.
- **Mouth-Watering Aesthetic**:
  - Custom pastel candy palette, smooth bouncy animations, floating candy badges, and glassmorphic cards.
  - Categorized catalog: *Gummies & Sours*, *Artisan Chocolates*, *Freeze-Dried Treats*, *Hard Candies & Retro*, *Mystery & Gift Boxes*.
  - Dietary filter chips (*Vegan*, *Gluten-Free*, *Halal*).
  - Real-time search by name, flavor profile, or ingredient.
  - Sorting by popularity, price, and customer rating.
- **Product Experience**:
  - "Quick View" popup displaying nutrition facts, ingredients, flavor notes, and allergen information.
  - Interactive slide-out cart drawer with quantity stepper, promo code discounts (try code `SUGAR15`), and free shipping threshold tracker.
  - Weekly Flash Drop bundle with live ticking countdown timer.
  - Trust section, customer reviews, and FAQ accordion.

---

## 🚀 Quick Start (Running Locally)

### Option 1: 1-Click Launch (Windows)
Double-click `start.bat` inside this folder. It will start the server and automatically launch `http://localhost:3000` in your web browser.

### Option 2: Command Line
Open a terminal in `C:\Users\naary\.gemini\antigravity\scratch\candy-store`:
```bash
node server.js
```
Then visit `http://localhost:3000`.

### Option 3: Direct Browser File
You can also directly double-click `index.html` to open the website in any browser. The storefront includes an offline fallback catalog so it works out of the box even without running a server.

---

## ⚡ How to Connect Your Own SellAuth Store

1. Click the **"SellAuth Settings"** button in the top right corner of the website.
2. Enter your:
   - **SellAuth Shop ID**: (e.g., `12345`) Found in your SellAuth Dashboard under *Account > Developers* or *Shop Settings*.
   - **SellAuth Shop URL**: (e.g., `https://yourstore.sellauth.com`).
   - **Checkout Modal Theme**: `Light` or `Dark`.
3. Click **"Save & Connect Store"**.
4. The storefront will instantly update all purchase buttons and cart payloads to route orders through your SellAuth store!

---

## 🍭 How to Add or Edit Products

All products are defined in [`data/products.json`](file:///C:/Users/naary/.gemini/antigravity/scratch/candy-store/data/products.json).

Each product follows this schema:
```json
{
  "id": 101,
  "sellauthProductId": 101,
  "name": "Electric Neon Sour Worms",
  "tagline": "Tongue-twisting sour punch with explosive fruit juice.",
  "description": "Full sensory description...",
  "category": "gummies",
  "categoryName": "Gummies & Sours",
  "price": 7.99,
  "originalPrice": 9.99,
  "badge": "Bestseller 🔥",
  "badgeType": "hot",
  "rating": 4.9,
  "reviewCount": 384,
  "weight": "8 oz (227g)",
  "dietary": ["Vegan", "Gluten-Free"],
  "flavorNotes": ["Wild Blue Raspberry", "Sour Green Apple"],
  "ingredients": "Organic Tapioca Syrup, Cane Sugar, Apple Pectin...",
  "nutrition": {
    "calories": "110 kcal",
    "servingSize": "4 pieces (30g)",
    "totalSugar": "19g",
    "dietaryFiber": "2g",
    "sodium": "15mg"
  },
  "image": "https://images.unsplash.com/..."
}
```

Simply update `sellauthProductId` to match the Product ID in your SellAuth dashboard!

---

## 📦 Deployment

Because this project is built with clean HTML5, CSS3, and modern JavaScript, it can be deployed anywhere with zero build steps:
- **GitHub Pages**: Push this directory to a GitHub repo and enable Pages under Settings.
- **Vercel / Netlify / Cloudflare Pages**: Drag and drop this folder or connect your Git repository.
- **Custom VPS or Shared Hosting**: Upload all files to your `public_html` directory.
