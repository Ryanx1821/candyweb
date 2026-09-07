/**
 * SugarDrop Co. - Storefront & SellAuth Embed v3 E-Commerce Engine
 * Genuine Verified Reviews System & Post-Purchase Review Flow
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Default Catalog Fallback (Guarantees instant preview even offline / file://)
  // ---------------------------------------------------------------------------
  const DEFAULT_PRODUCTS = [
  {
    "id": 851052,
    "sellauthProductId": 851052,
    "sellauthVariantId": 1504509,
    "name": "Rainbow Lab Crunch",
    "tagline": "Explosive multi-fruit crunchy clusters loaded with vibrant rainbow crystals.",
    "description": "Cryo-puffed rainbow fruit crunchers with an intense burst of tangy and sweet berry notes in every crisp bite. Made fresh by Cowhouse Candy.",
    "category": "clusters-crunch",
    "categoryName": "Crunch & Clusters",
    "sellauthCategoryId": 24440,
    "sellauthCategoryPath": "clusters-crunch",
    "price": 5,
    "originalPrice": 7,
    "savingsText": "Save .00 (28% OFF)",
    "badge": "Bestseller 🔥",
    "badgeType": "hot",
    "rating": 4.9,
    "reviewCount": 84,
    "inStock": true,
    "stockCount": 999,
    "viewsToday": 42,
    "sourMeter": 3,
    "sweetnessMeter": 4,
    "texture": "Explosive Airy Crunch",
    "weight": "5 oz",
    "dietary": [
      "Gluten-Free",
      "Vegetarian"
    ],
    "flavorNotes": [
      "Rainbow Citrus",
      "Blue Raspberry",
      "Wild Berry"
    ],
    "ingredients": "Sugar, Glucose, Natural Fruit Extracts, Citric Acid, Corn Starch, Food Glaze.",
    "nutrition": {
      "calories": "120 kcal",
      "servingSize": "28g",
      "totalSugar": "21g",
      "dietaryFiber": "0g",
      "sodium": "10mg"
    },
    "image": "https://api.sellauth.com/storage/images/1101392.webp"
  },
  {
    "id": 851053,
    "sellauthProductId": 851053,
    "sellauthVariantId": 1504514,
    "name": "Blue Formula Sours",
    "tagline": "Electric blue raspberry sours double-dusted in mouth-puckering sour crystals.",
    "description": "Infused with tart blue raspberry essences and coated in fine malic acid crystals that deliver an exhilarating sour rush.",
    "category": "sours-gummies",
    "categoryName": "Sours & Gummies",
    "sellauthCategoryId": 24441,
    "sellauthCategoryPath": "sours-gummies",
    "price": 5,
    "originalPrice": 6.5,
    "savingsText": "Save .50 (23% OFF)",
    "badge": "Staff Pick 💖",
    "badgeType": "pick",
    "rating": 4.8,
    "reviewCount": 62,
    "inStock": true,
    "stockCount": 999,
    "viewsToday": 38,
    "sourMeter": 5,
    "sweetnessMeter": 3,
    "texture": "Chewy & Tart Zing",
    "weight": "2 oz",
    "dietary": [
      "Gelatin-Free",
      "Vegan",
      "Halal"
    ],
    "flavorNotes": [
      "Electric Blue Raspberry",
      "Sour Lime",
      "Tart Punch"
    ],
    "ingredients": "Tapioca Syrup, Cane Sugar, Apple Pectin, Citric Acid, Malic Acid, Blue Spirulina Extract.",
    "nutrition": {
      "calories": "110 kcal",
      "servingSize": "30g",
      "totalSugar": "19g",
      "dietaryFiber": "1g",
      "sodium": "15mg"
    },
    "image": "https://api.sellauth.com/storage/images/1101393.webp"
  },
  {
    "id": 851054,
    "sellauthProductId": 851054,
    "sellauthVariantId": 1504516,
    "name": "Wild Reaction Berries",
    "tagline": "Juicy blackberry and wild raspberry gummies packed with fizzy, tangy center drops.",
    "description": "Bursting with succulent forest berry purees and a zesty zing that reacts on your palate for maximum candy enjoyment.",
    "category": "sours-gummies",
    "categoryName": "Sours & Gummies",
    "sellauthCategoryId": 24441,
    "sellauthCategoryPath": "sours-gummies",
    "price": 5,
    "originalPrice": 7,
    "savingsText": "Save .00 (28% OFF)",
    "badge": "Fan Favorite ⭐",
    "badgeType": "hot",
    "rating": 5,
    "reviewCount": 91,
    "inStock": true,
    "stockCount": 999,
    "viewsToday": 55,
    "sourMeter": 3,
    "sweetnessMeter": 4,
    "texture": "Juicy Center-Filled Chew",
    "weight": "5 oz",
    "dietary": [
      "Gluten-Free",
      "Vegan"
    ],
    "flavorNotes": [
      "Wild Marionberry",
      "Forest Raspberry",
      "Effervescent Spritz"
    ],
    "ingredients": "Cane Sugar, Glucose, Blackberry Juice Concentrate, Pectin, Tartaric Acid, Purple Carrot Juice.",
    "nutrition": {
      "calories": "115 kcal",
      "servingSize": "30g",
      "totalSugar": "18g",
      "dietaryFiber": "2g",
      "sodium": "20mg"
    },
    "image": "https://api.sellauth.com/storage/images/1101394.webp"
  },
  {
    "id": 851055,
    "sellauthProductId": 851055,
    "sellauthVariantId": 1504517,
    "name": "Berry Lab Clusters",
    "tagline": "Crunchy candied berries clustered around chewy fruit gel centers.",
    "description": "Delightful bite-sized artisan clusters combining crisp fruity outer crunch with chewy fruit gel centers.",
    "category": "clusters-crunch",
    "categoryName": "Crunch & Clusters",
    "sellauthCategoryId": 24440,
    "sellauthCategoryPath": "clusters-crunch",
    "price": 3,
    "originalPrice": 4.5,
    "savingsText": "Save .50 (33% OFF)",
    "badge": "Bite Sized 🍓",
    "badgeType": "viral",
    "rating": 4.7,
    "reviewCount": 45,
    "inStock": true,
    "stockCount": 999,
    "viewsToday": 29,
    "sourMeter": 2,
    "sweetnessMeter": 4,
    "texture": "Snappy Berry Crunch",
    "weight": "1.5 oz",
    "dietary": [
      "Gluten-Free"
    ],
    "flavorNotes": [
      "Wild Strawberry",
      "Sweet Cranberry",
      "Red Currant"
    ],
    "ingredients": "Dextrose, Sugar, Corn Syrup, Gelatin, Malic Acid, Carnauba Wax, Natural Fruit Juices.",
    "nutrition": {
      "calories": "90 kcal",
      "servingSize": "20g",
      "totalSugar": "15g",
      "dietaryFiber": "0g",
      "sodium": "5mg"
    },
    "image": "https://api.sellauth.com/storage/images/1101399.webp"
  },
  {
    "id": 851056,
    "sellauthProductId": 851056,
    "sellauthVariantId": 1504518,
    "name": "Rainbow Reaction Clusters",
    "tagline": "Irresistible multi-colored clusters with a snappy crunch and fruity chew.",
    "description": "A snack pack of rainbow clusters that pop with citrus, cherry, and tropical fruit punch.",
    "category": "clusters-crunch",
    "categoryName": "Crunch & Clusters",
    "sellauthCategoryId": 24440,
    "sellauthCategoryPath": "clusters-crunch",
    "price": 3,
    "originalPrice": 4.5,
    "savingsText": "Save .50 (33% OFF)",
    "badge": "Popular 🌈",
    "badgeType": "viral",
    "rating": 4.9,
    "reviewCount": 58,
    "inStock": true,
    "stockCount": 999,
    "viewsToday": 33,
    "sourMeter": 3,
    "sweetnessMeter": 4,
    "texture": "Rainbow Pebble Pop",
    "weight": "1.5 oz",
    "dietary": [
      "Gluten-Free"
    ],
    "flavorNotes": [
      "Lemon Zest",
      "Cherry Glaze",
      "Blue Raspberry"
    ],
    "ingredients": "Sugar, Tapioca Syrup, Fruit Pectin, Citric Acid, Natural Colors, Carnauba Wax.",
    "nutrition": {
      "calories": "95 kcal",
      "servingSize": "20g",
      "totalSugar": "16g",
      "dietaryFiber": "0g",
      "sodium": "5mg"
    },
    "image": "https://api.sellauth.com/storage/images/1101418.webp"
  },
  {
    "id": 851057,
    "sellauthProductId": 851057,
    "sellauthVariantId": 1504520,
    "name": "Freeze Dried Strawberries",
    "tagline": "Whole ripe strawberries cryo-sublimated for an ultra-light, flavor-packed crunch.",
    "description": "100% real hand-picked strawberries freeze-dried to lock in maximum sweetness, vitamins, and crunchy airy texture.",
    "category": "freeze-dried",
    "categoryName": "Freeze-Dried Treats",
    "sellauthCategoryId": 24439,
    "sellauthCategoryPath": "freeze-dried",
    "price": 8,
    "originalPrice": 10,
    "savingsText": "Save .00 (20% OFF)",
    "badge": "100% Real Fruit 🍓",
    "badgeType": "luxury",
    "rating": 5,
    "reviewCount": 114,
    "inStock": true,
    "stockCount": 999,
    "viewsToday": 76,
    "sourMeter": 2,
    "sweetnessMeter": 5,
    "texture": "Airy Melt-in-Mouth Puffs",
    "weight": "1 oz",
    "dietary": [
      "100% Fruit",
      "Gluten-Free",
      "Vegan",
      "No Sugar Added"
    ],
    "flavorNotes": [
      "Sweet Summer Berry",
      "Crisp Sun-Ripened Strawberry"
    ],
    "ingredients": "100% Whole Freeze-Dried Strawberries. No added sugars, preservatives, or oils.",
    "nutrition": {
      "calories": "70 kcal",
      "servingSize": "Whole Bag (28g)",
      "totalSugar": "12g (Natural)",
      "dietaryFiber": "4g",
      "sodium": "0mg"
    },
    "image": "https://api.sellauth.com/storage/images/1101425.webp"
  },
  {
    "id": 851058,
    "sellauthProductId": 851058,
    "sellauthVariantId": 1504521,
    "name": "Freeze Dried Ice Cream Sandwiches",
    "tagline": "Classic chocolate wafer and vanilla ice cream sandwiches turned into crunchy snack bites.",
    "description": "No freezer required! Enjoy the full creamy richness of real ice cream sandwiches with a crisp astronaut-style crunch.",
    "category": "freeze-dried",
    "categoryName": "Freeze-Dried Treats",
    "sellauthCategoryId": 24439,
    "sellauthCategoryPath": "freeze-dried",
    "price": 10,
    "originalPrice": 12.5,
    "savingsText": "Save .50 (20% OFF)",
    "badge": "Viral TikTok 🚀",
    "badgeType": "viral",
    "rating": 5,
    "reviewCount": 148,
    "inStock": true,
    "stockCount": 999,
    "viewsToday": 112,
    "sourMeter": 0,
    "sweetnessMeter": 5,
    "texture": "Crunchy Chocolate & Cream Snap",
    "weight": "2.5 oz",
    "dietary": [
      "Vegetarian"
    ],
    "flavorNotes": [
      "Chocolate Wafer",
      "Rich Vanilla Bean Cream"
    ],
    "ingredients": "Milkfat, Nonfat Milk, Sugar, Whey, Cocoa Processed with Alkali, Enriched Wheat Flour, Corn Syrup.",
    "nutrition": {
      "calories": "160 kcal",
      "servingSize": "1 sandwich (35g)",
      "totalSugar": "18g",
      "dietaryFiber": "1g",
      "sodium": "90mg"
    },
    "image": "https://api.sellauth.com/storage/images/1101428.webp"
  },
  {
    "id": 851059,
    "sellauthProductId": 851059,
    "sellauthVariantId": 1504523,
    "name": "Freeze Dried Mint Chocolate Chip Ice Cream",
    "tagline": "Cool refreshing mint ice cream with dark chocolate chunks freeze-dried to airy perfection.",
    "description": "Velvety mint ice cream and rich chocolate flakes frozen at -40°F, delivering an out-of-this-world crunch that melts on your tongue.",
    "category": "freeze-dried",
    "categoryName": "Freeze-Dried Treats",
    "sellauthCategoryId": 24439,
    "sellauthCategoryPath": "freeze-dried",
    "price": 10,
    "originalPrice": 12.5,
    "savingsText": "Save .50 (20% OFF)",
    "badge": "Chef Special 🍨",
    "badgeType": "luxury",
    "rating": 4.9,
    "reviewCount": 89,
    "inStock": true,
    "stockCount": 999,
    "viewsToday": 64,
    "sourMeter": 0,
    "sweetnessMeter": 4,
    "texture": "Crispy Melted Mint Delight",
    "weight": "2 oz",
    "dietary": [
      "Vegetarian",
      "Gluten-Free"
    ],
    "flavorNotes": [
      "Crisp Peppermint",
      "Semi-Sweet Chocolate Chips",
      "Sweet Cream"
    ],
    "ingredients": "Fresh Cream, Milk, Cane Sugar, Dark Chocolate Morsels, Pure Peppermint Oil, Spirulina for Natural Green.",
    "nutrition": {
      "calories": "150 kcal",
      "servingSize": "30g",
      "totalSugar": "16g",
      "dietaryFiber": "1g",
      "sodium": "45mg"
    },
    "image": "https://api.sellauth.com/storage/images/1101432.webp"
  }
];

  // ---------------------------------------------------------------------------
  // Default SellAuth Categories (Dynamically populated from SellAuth)
  // ---------------------------------------------------------------------------
  const DEFAULT_SELLAUTH_CATEGORIES = [
    { id: 24439, name: "Freeze-Dried Treats", path: "freeze-dried", icon: "❄️" },
    { id: 24440, name: "Crunch & Clusters", path: "clusters-crunch", icon: "✨" },
    { id: 24441, name: "Sours & Gummies", path: "sours-gummies", icon: "🍬" }
  ];

  function getCategoryIcon(name) {
    const n = (name || '').toLowerCase();
    if (n.includes('gum') || n.includes('sour') || n.includes('worm')) return '🍬';
    if (n.includes('freeze') || n.includes('ice') || n.includes('cold') || n.includes('puff') || n.includes('strawberr')) return '❄️';
    if (n.includes('choc') || n.includes('fudge') || n.includes('bark') || n.includes('cocoa')) return '🍫';
    if (n.includes('hard') || n.includes('pop') || n.includes('retro') || n.includes('drop') || n.includes('lollipop')) return '🍭';
    if (n.includes('box') || n.includes('gift') || n.includes('mystery') || n.includes('bundle') || n.includes('pack')) return '🎁';
    if (n.includes('cluster') || n.includes('crunch') || n.includes('crisp')) return '✨';
    if (n.includes('cookie') || n.includes('pastry') || n.includes('cake')) return '🍪';
    return '✨';
  }

  // ---------------------------------------------------------------------------
  // Storefront State
  // ---------------------------------------------------------------------------
  const state = {
    products: [],
    activeCategory: 'all',
    activeDietary: 'all',
    searchQuery: '',
    sortBy: 'popular',
    cart: [],
    reviews: [],
    discountPercent: 0,
    promoCodeApplied: null,
    // SellAuth Configuration & Dynamic Categories
    sellauth: {
      shopId: (localStorage.getItem('sellauth_shop_id') && localStorage.getItem('sellauth_shop_id') !== '12345')
        ? localStorage.getItem('sellauth_shop_id')
        : '263182',
      shopUrl: (localStorage.getItem('sellauth_shop_url') && !localStorage.getItem('sellauth_shop_url').includes('myshop') && !localStorage.getItem('sellauth_shop_url').includes('candystore'))
        ? localStorage.getItem('sellauth_shop_url')
        : 'https://cowhousecandy.mysellauth.com',
      apiKey: localStorage.getItem('sellauth_api_key') || '6126011|0GXSx7gZACcDkXO0yzevZCOMyx1tg0HLg6ICU24L55410f12',
      theme: 'dark',
      categories: []
    }
  };

  // ---------------------------------------------------------------------------
  // DOM Elements
  // ---------------------------------------------------------------------------
  const elements = {
    productsGrid: document.getElementById('products-grid'),
    categoryPills: document.getElementById('category-pills'),
    searchInput: document.getElementById('search-input'),
    dietaryFilters: document.getElementById('dietary-filters'),
    sortSelect: document.getElementById('sort-select'),
    
    // Header & Cart Counter
    cartCountBadge: document.getElementById('cart-count-badge'),
    btnOpenCart: document.getElementById('btn-open-cart'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartBackdrop: document.getElementById('cart-backdrop'),
    btnCloseCart: document.getElementById('btn-close-cart'),
    cartItemsContainer: document.getElementById('cart-items-container'),
    cartEmptyState: document.getElementById('cart-empty-state'),
    cartDrawerFooter: document.getElementById('cart-drawer-footer'),
    cartSubtotalElem: document.getElementById('cart-subtotal'),
    cartDiscountRow: document.getElementById('cart-discount-row'),
    cartDiscountElem: document.getElementById('cart-discount-amount'),
    cartShippingElem: document.getElementById('cart-shipping'),
    cartTotalElem: document.getElementById('cart-total'),
    btnCartCheckout: document.getElementById('btn-cart-checkout'),
    promoInput: document.getElementById('promo-input'),
    btnApplyPromo: document.getElementById('btn-apply-promo'),

    // Free Shipping Progress
    shippingProgressFill: document.getElementById('shipping-progress-fill'),
    shippingProgressText: document.getElementById('shipping-progress-text'),
    btnAddUpsell: document.getElementById('btn-add-upsell'),

    // Quick View Modal
    quickViewModal: document.getElementById('quickview-modal'),
    btnCloseQuickView: document.getElementById('btn-close-quickview'),
    quickViewContent: document.getElementById('quickview-details'),

    // Verified Reviews Section & Modal
    reviewsGrid: document.getElementById('reviews-grid'),
    btnOpenWriteReview: document.getElementById('btn-open-write-review'),
    reviewModal: document.getElementById('review-modal'),
    btnCloseReviewModal: document.getElementById('btn-close-review-modal'),
    formSubmitReview: document.getElementById('form-submit-review'),
    reviewAuthorName: document.getElementById('review-author-name'),
    reviewStarsVal: document.getElementById('review-stars-val'),
    reviewProductSelect: document.getElementById('review-product-select'),
    reviewBodyText: document.getElementById('review-body-text'),

    // SellAuth Settings Modal & Categories
    btnOpenConfig: document.getElementById('btn-open-config'),
    configModal: document.getElementById('config-modal'),
    btnCloseConfig: document.getElementById('btn-close-config'),
    inputConfigShopId: document.getElementById('config-shop-id'),
    inputConfigShopUrl: document.getElementById('config-shop-url'),
    inputConfigApiKey: document.getElementById('config-api-key'),
    btnSyncCategories: document.getElementById('btn-sync-categories'),
    btnResetCategories: document.getElementById('btn-reset-categories'),
    btnAddCategory: document.getElementById('btn-add-category'),
    sellauthCategoriesList: document.getElementById('sellauth-categories-list'),
    catCountBadge: document.getElementById('cat-count-badge'),
    selectConfigTheme: document.getElementById('config-theme'),
    formConfig: document.getElementById('form-sellauth-config'),

    // Flash Drop Hero Checkout (optional fallback)
    btnFlashBuy: document.getElementById('btn-flash-buy'),
    countdownHours: document.getElementById('timer-hours'),
    countdownMins: document.getElementById('timer-mins'),
    countdownSecs: document.getElementById('timer-secs'),

    // Toast & Confetti
    toastContainer: document.getElementById('toast-container'),
    confettiCanvas: document.getElementById('confetti-canvas')
  };

  // ---------------------------------------------------------------------------
  // Initialize Application
  // ---------------------------------------------------------------------------
  async function init() {
    loadSavedCart();
    loadSavedReviews();
    loadSellAuthCategories();
    initSellAuthConfig();
    initFlashTimer();
    initFaqAccordion();
    initAmbientVisuals();
    initCardTiltInteractivity();
    setupEventListeners();

    // Fetch products catalog
    try {
      const response = await fetch('data/products.json');
      if (response.ok) {
        state.products = await response.json();
      } else {
        state.products = DEFAULT_PRODUCTS;
      }
    } catch (err) {
      console.info('[SugarDrop] Running standalone or offline, using fallback catalog:', err);
      state.products = DEFAULT_PRODUCTS;
    }

    renderCategoryPills();
    renderProducts();
    updateCartDrawer();
    renderReviews();
    populateReviewProductDropdown();
  }

  // ---------------------------------------------------------------------------
  // Genuine Customer Reviews System (Zero Fake Reviews)
  // ---------------------------------------------------------------------------
  function loadSavedReviews() {
    try {
      const saved = localStorage.getItem('sugardrop_verified_reviews');
      if (saved) {
        state.reviews = JSON.parse(saved);
      } else {
        state.reviews = []; // Starts clean with zero fake reviews!
      }
    } catch (e) {
      state.reviews = [];
    }
  }

  function saveReviews() {
    try {
      localStorage.setItem('sugardrop_verified_reviews', JSON.stringify(state.reviews));
    } catch (e) {
      console.warn('Could not save reviews:', e);
    }
    renderReviews();
  }

  function renderReviews() {
    if (!elements.reviewsGrid) return;

    if (!state.reviews || state.reviews.length === 0) {
      elements.reviewsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1.5rem; background: #140c1b; border: 1px dashed rgba(255,255,255,0.12); border-radius: 16px;">
          <div style="font-size: 2.8rem; margin-bottom: 0.8rem;">✨</div>
          <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 0.5rem; color: #ffffff;">No Reviews Yet</h3>
          <p style="color: #b8a5bf; font-size: 0.95rem; max-width: 520px; margin: 0 auto 1.5rem; line-height: 1.6;">
            We believe in 100% genuine customer feedback. All verified purchasers are invited to leave a review right after checkout!
          </p>
          <button class="btn-primary" id="btn-write-first-review" style="padding: 0.75rem 1.6rem; font-size: 0.95rem;">
            ✍️ Leave the First Review
          </button>
        </div>
      `;

      const firstBtn = document.getElementById('btn-write-first-review');
      if (firstBtn) {
        firstBtn.addEventListener('click', () => openReviewModal());
      }
      return;
    }

    elements.reviewsGrid.innerHTML = state.reviews.map(rev => {
      const starStr = '★'.repeat(rev.stars) + '☆'.repeat(Math.max(0, 5 - rev.stars));
      return `
        <div class="review-card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.8rem;">
            <div class="review-stars">${starStr}</div>
            <span style="font-size: 0.75rem; color: var(--text-light);">${rev.date}</span>
          </div>
          <p class="review-text">"${rev.text}"</p>
          <div style="margin-bottom: 0.8rem; font-size: 0.78rem; color: var(--primary); font-weight: 700;">
            Purchased: ${rev.productName}
          </div>
          <div class="review-author">
            <div class="review-avatar">🍬</div>
            <div class="review-author-info">
              <strong>${rev.name}</strong>
              <span>✓ Verified Purchaser</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function populateReviewProductDropdown() {
    if (!elements.reviewProductSelect) return;
    const options = state.products.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
    elements.reviewProductSelect.innerHTML = options || `<option value="Electric Neon Sour Worms">Electric Neon Sour Worms</option>`;
  }

  function openReviewModal(defaultProduct = '') {
    if (!elements.reviewModal) return;
    if (elements.reviewProductSelect && defaultProduct) {
      elements.reviewProductSelect.value = defaultProduct;
    }
    elements.reviewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeReviewModal() {
    if (!elements.reviewModal) return;
    elements.reviewModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ---------------------------------------------------------------------------
  // SellAuth Configuration, Categories & API Sync
  // ---------------------------------------------------------------------------
  function loadSellAuthCategories() {
    try {
      const saved = localStorage.getItem('sugardrop_sellauth_categories');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          state.sellauth.categories = parsed;
          return;
        }
      }
    } catch (e) {
      console.warn('Could not load saved SellAuth categories:', e);
    }
    state.sellauth.categories = JSON.parse(JSON.stringify(DEFAULT_SELLAUTH_CATEGORIES));
  }

  function saveSellAuthCategories() {
    try {
      localStorage.setItem('sugardrop_sellauth_categories', JSON.stringify(state.sellauth.categories));
    } catch (e) {
      console.warn('Could not save SellAuth categories:', e);
    }
    renderCategoryPills();
    renderSellAuthConfigCategories();
    renderProducts();
  }

  function initSellAuthConfig() {
    if (elements.inputConfigShopId) {
      elements.inputConfigShopId.value = state.sellauth.shopId;
    }
    if (elements.inputConfigShopUrl) {
      elements.inputConfigShopUrl.value = state.sellauth.shopUrl;
    }
    if (elements.inputConfigApiKey) {
      elements.inputConfigApiKey.value = state.sellauth.apiKey;
    }
    if (elements.selectConfigTheme) {
      elements.selectConfigTheme.value = state.sellauth.theme;
    }

    renderSellAuthConfigCategories();
  }

  function renderSellAuthConfigCategories() {
    if (!elements.sellauthCategoriesList) return;
    if (elements.catCountBadge) {
      elements.catCountBadge.textContent = state.sellauth.categories.length;
    }

    if (state.sellauth.categories.length === 0) {
      elements.sellauthCategoriesList.innerHTML = `
        <div style="color: var(--text-muted); font-size: 0.82rem; text-align: center; padding: 0.8rem;">
          No categories defined. Click "+ Add Category" or "Reset Defaults".
        </div>
      `;
      return;
    }

    elements.sellauthCategoriesList.innerHTML = state.sellauth.categories.map((cat, idx) => `
      <div class="sellauth-cat-item">
        <div class="sellauth-cat-info">
          <span style="font-size: 1.1rem;">${cat.icon || getCategoryIcon(cat.name)}</span>
          <strong style="color: #ffffff;">${cat.name}</strong>
          <span class="sellauth-cat-id-badge">ID: ${cat.id || (idx + 1)}</span>
        </div>
        <div class="sellauth-cat-actions">
          <button type="button" class="sellauth-cat-del-btn" data-index="${idx}" title="Remove category">✕</button>
        </div>
      </div>
    `).join('');

    // Attach delete listeners
    elements.sellauthCategoriesList.querySelectorAll('.sellauth-cat-del-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = Number(e.currentTarget.dataset.index);
        state.sellauth.categories.splice(idx, 1);
        saveSellAuthCategories();
      });
    });
  }

  async function syncCategoriesFromSellAuth() {
    const shopId = elements.inputConfigShopId ? elements.inputConfigShopId.value.trim() : state.sellauth.shopId;
    const apiKey = elements.inputConfigApiKey ? elements.inputConfigApiKey.value.trim() : state.sellauth.apiKey;

    if (!shopId) {
      showToast('Please enter your SellAuth Shop ID first.', 'error');
      return;
    }

    if (!apiKey) {
      showToast('Please enter your SellAuth API Key from dash.sellauth.com/api to sync live categories.', 'info');
      if (elements.inputConfigApiKey) elements.inputConfigApiKey.focus();
      return;
    }

    const syncBtn = elements.btnSyncCategories;
    const originalText = syncBtn ? syncBtn.innerHTML : '';
    if (syncBtn) {
      syncBtn.disabled = true;
      syncBtn.innerHTML = '<span>⏳ Syncing...</span>';
    }

    showToast('Connecting to SellAuth API...', 'info');

    try {
      const url = `/api/sellauth/categories?shopId=${encodeURIComponent(shopId)}&apiKey=${encodeURIComponent(apiKey)}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || `SellAuth API returned status ${res.status}`);
      }

      // SellAuth returns { data: [ ...categories ] } or [ ...categories ]
      const rawCategories = Array.isArray(data) ? data : (data.data || []);

      if (rawCategories.length === 0) {
        showToast('Connected to SellAuth, but no categories were found in your shop. You can create categories in your SellAuth dashboard.', 'info');
      } else {
        state.sellauth.categories = rawCategories.map((c, i) => ({
          id: c.id || (i + 1),
          name: c.name || `Category ${i + 1}`,
          path: c.path || (c.name ? c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : `cat-${i + 1}`),
          icon: getCategoryIcon(c.name)
        }));

        state.sellauth.apiKey = apiKey;
        localStorage.setItem('sellauth_api_key', apiKey);

        saveSellAuthCategories();
        showToast(`Successfully synced ${state.sellauth.categories.length} categories from SellAuth!`, 'success');
      }
    } catch (err) {
      console.error('SellAuth sync error:', err);
      showToast(`Could not sync from SellAuth: ${err.message}`, 'error');
    } finally {
      if (syncBtn) {
        syncBtn.disabled = false;
        syncBtn.innerHTML = originalText;
      }
    }
  }

  function saveSellAuthConfig(shopId, shopUrl, apiKey, theme) {
    state.sellauth.shopId = shopId.trim() || '12345';
    state.sellauth.shopUrl = shopUrl.trim().replace(/\/$/, '') || 'https://candystore.sellauth.com';
    state.sellauth.apiKey = apiKey ? apiKey.trim() : '';
    state.sellauth.theme = theme || 'dark';

    localStorage.setItem('sellauth_shop_id', state.sellauth.shopId);
    localStorage.setItem('sellauth_shop_url', state.sellauth.shopUrl);
    localStorage.setItem('sellauth_api_key', state.sellauth.apiKey);
    localStorage.setItem('sellauth_theme', state.sellauth.theme);

    saveSellAuthCategories();
    closeConfigModal();

    showToast('SellAuth configuration & categories updated successfully!', 'success');
  }

  /**
   * Constructs the official SellAuth Checkout URL for single or multi-item purchases
   * Format: https://cowhousecandy.mysellauth.com/checkout/init?shopId=263182&cart=851052:1504509:1&v=3&mode=page
   */
  function buildSellAuthCheckoutUrl(cartItems) {
    const shopId = state.sellauth.shopId || '263182';
    const shopUrl = (state.sellauth.shopUrl || 'https://cowhousecandy.mysellauth.com').replace(/\/+$/, '');

    const cartString = cartItems.map(item => {
      const pId = parseInt(item.productId || item.sellauthProductId || item.id, 10);
      const fullProduct = state.products.find(p => p.sellauthProductId === pId || p.id === pId);
      const vId = parseInt(item.variantId || (fullProduct ? fullProduct.sellauthVariantId : null), 10) || '';
      const qty = Math.max(1, parseInt(item.quantity, 10) || 1);
      return `${pId}:${vId}:${qty}`;
    }).join(',');

    const params = new URLSearchParams({
      shopId: String(shopId),
      cart: cartString,
      v: '3',
      mode: 'page'
    });

    return `${shopUrl}/checkout/init?${params.toString()}`;
  }

  /**
   * Brings the user directly to the official SellAuth Checkout
   * Also triggers the post-purchase review invitation prompt!
   * @param {Array<{productId: number|string, variantId?: number|string, quantity: number}>} cartItems 
   */
  function triggerSellAuthCheckout(cartItems) {
    if (!cartItems || cartItems.length === 0) {
      showToast('Your cart is empty! Add some sweet treats first.', 'info');
      return;
    }

    triggerConfetti();

    const shopId = state.sellauth.shopId || '263182';
    const shopUrl = (state.sellauth.shopUrl || 'https://cowhousecandy.mysellauth.com').replace(/\/+$/, '');

    // Normalize cart items with proper productId, variantId, quantity
    const normalizedCart = cartItems.map(item => {
      const pId = parseInt(item.productId || item.sellauthProductId || item.id, 10);
      const fullProduct = state.products.find(p => p.sellauthProductId === pId || p.id === pId);
      const vId = parseInt(item.variantId || (fullProduct ? fullProduct.sellauthVariantId : null), 10) || undefined;
      const qty = Math.max(1, parseInt(item.quantity, 10) || 1);
      return {
        productId: pId,
        variantId: vId,
        quantity: qty
      };
    });

    // Find the primary product name for the post-purchase review modal
    const firstCartId = normalizedCart[0]?.productId;
    const targetProduct = state.products.find(p => p.sellauthProductId === firstCartId || p.id === firstCartId);
    const productName = targetProduct ? targetProduct.name : 'Candy Treats';

    // Hook: prompt for review after checkout
    setupPostPurchaseReviewHook(productName);

    // Build the official SellAuth direct checkout page URL
    const checkoutUrl = buildSellAuthCheckoutUrl(normalizedCart);

    showToast('Taking you to SellAuth secure checkout... 🛒', 'success');

    // Attempt SellAuth embed in page mode if available
    let openedViaEmbed = false;
    if (window.sellAuth && typeof window.sellAuth.open === 'function') {
      try {
        window.sellAuth.open({
          shopId: parseInt(shopId, 10),
          shopUrl: shopUrl,
          cart: normalizedCart,
          modal: false, // Page mode: brings user directly to SellAuth checkout!
          newTab: true
        });
        openedViaEmbed = true;
      } catch (err) {
        console.warn('[Cowhouse] SellAuth.open page mode fallback:', err);
      }
    }

    // Direct window navigation (guaranteed to bring user to checkout)
    if (!openedViaEmbed) {
      const win = window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = checkoutUrl;
      }
    }
  }

  function setupPostPurchaseReviewHook(productName) {
    // Listen for SellAuth checkout success message
    const onMessage = (event) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data && (data.event === 'sellauth:success' || data.type === 'sellauth:success' || data === 'sellauth:success')) {
          window.removeEventListener('message', onMessage);
          setTimeout(() => {
            promptPostPurchaseReview(productName);
          }, 1200);
        }
      } catch (e) {}
    };

    window.addEventListener('message', onMessage);

    // Also schedule a friendly post-checkout review invitation toast after 10 seconds
    setTimeout(() => {
      promptPostPurchaseReview(productName);
    }, 10000);
  }

  function promptPostPurchaseReview(productName) {
    if (document.getElementById('post-purchase-review-toast')) return;

    const toast = document.createElement('div');
    toast.id = 'post-purchase-review-toast';
    toast.className = 'toast toast-success';
    toast.style.cursor = 'pointer';
    toast.innerHTML = `
      <span class="toast-icon">✍️</span>
      <span class="toast-msg">
        Thank you for your order! <strong>Click here to leave a verified review.</strong>
      </span>
    `;

    toast.addEventListener('click', () => {
      toast.remove();
      openReviewModal(productName);
    });

    if (elements.toastContainer) {
      elements.toastContainer.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 10000);
    }
  }

  // ---------------------------------------------------------------------------
  // Product Catalog Rendering & Filtering
  // ---------------------------------------------------------------------------
  function renderProducts() {
    if (!elements.productsGrid) return;

    let filtered = [...state.products];

    // Filter by SellAuth Category
    if (state.activeCategory !== 'all') {
      const activeKey = state.activeCategory.toLowerCase();
      filtered = filtered.filter(p => {
        const pCat = (p.category || '').toLowerCase();
        const pCatId = String(p.sellauthCategoryId || '');
        const pCatName = (p.categoryName || '').toLowerCase();
        const pCatPath = (p.sellauthCategoryPath || '').toLowerCase();

        return (
          pCat === activeKey ||
          pCatId === activeKey ||
          pCatName === activeKey ||
          pCatPath === activeKey
        );
      });
    }

    // Filter by Dietary tag
    if (state.activeDietary !== 'all') {
      filtered = filtered.filter(p => 
        p.dietary && p.dietary.some(d => d.toLowerCase().includes(state.activeDietary.toLowerCase()))
      );
    }

    // Filter by Search Query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.flavorNotes && p.flavorNotes.some(f => f.toLowerCase().includes(q)))
      );
    }

    // Sort
    if (state.sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      // Default: popularity
      filtered.sort((a, b) => (b.viewsToday || b.reviewCount) - (a.viewsToday || a.reviewCount));
    }

    // Check empty state
    if (filtered.length === 0) {
      elements.productsGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🍬</div>
          <h3>No treats matched your craving!</h3>
          <p>Try searching for something else like "sour", "chocolate", or "freeze-dried".</p>
          <button class="btn-primary" id="btn-reset-filters" style="margin-top: 1.2rem;">View All Treats</button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.activeCategory = 'all';
          state.activeDietary = 'all';
          state.searchQuery = '';
          if (elements.searchInput) elements.searchInput.value = '';
          updateCategoryPills();
          updateDietaryChips();
          renderProducts();
        });
      }
      return;
    }

    // Render Cards
    const { shopId, shopUrl } = state.sellauth;

    elements.productsGrid.innerHTML = filtered.map(product => {
      const sellauthCartPayload = JSON.stringify([{ productId: product.sellauthProductId || product.id, variantId: product.sellauthVariantId || '', quantity: 1 }]);
      
      const flavorChipsHtml = product.flavorNotes 
        ? product.flavorNotes.slice(0, 3).map(fn => `<span class="flavor-chip">${fn}</span>`).join('') 
        : '';

      const originalPriceHtml = product.originalPrice 
        ? `<s>$${product.originalPrice.toFixed(2)}</s>` 
        : '';

      const savingsHtml = product.savingsText
        ? `<div class="savings-pill">⚡ ${product.savingsText}</div>`
        : '';

      // Sensory meter display
      let sensoryHtml = '';
      if (typeof product.sourMeter === 'number' && product.sourMeter > 0) {
        const bolts = '⚡'.repeat(product.sourMeter) + '⚪'.repeat(Math.max(0, 5 - product.sourMeter));
        sensoryHtml = `
          <div class="product-sensory-bar">
            <span class="sensory-label">Sour Level:</span>
            <span class="sensory-meter">${bolts}</span>
          </div>
        `;
      } else if (product.texture) {
        sensoryHtml = `
          <div class="product-sensory-bar">
            <span class="sensory-label">Texture:</span>
            <span style="font-weight: 700; color: #ffffff;">${product.texture}</span>
          </div>
        `;
      }

      return `
        <article class="product-card" data-product-id="${product.id}">
          <div class="product-image-box">
            <span class="product-badge badge-${product.badgeType || 'hot'}">${product.badge}</span>
            <div class="live-viewers-pill">
              <span class="live-dot"></span>
              <span>${product.viewsToday || Math.floor(Math.random() * 40 + 20)} viewing now</span>
            </div>
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80'" />
            <div class="product-overlay-actions">
              <button class="btn-quickview-trigger" title="Quick View" data-action="quickview" data-product-id="${product.id}">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </button>
            </div>
          </div>

          <div class="product-card-body">
            <div class="product-meta-row">
              <span class="product-category-tag">${product.categoryName}</span>
              <div class="product-rating">
                ★ <span>${product.rating.toFixed(1)}</span>
                <span class="count">(${product.reviewCount})</span>
              </div>
            </div>

            <h3 class="product-title">${product.name}</h3>
            <p class="product-tagline">${product.tagline}</p>

            ${sensoryHtml}

            <div class="product-flavor-chips">
              ${flavorChipsHtml}
            </div>

            <div class="product-price-row">
              <div class="product-price">
                $${product.price.toFixed(2)} ${originalPriceHtml}
              </div>
              <span class="product-weight">${product.weight}</span>
            </div>

            ${savingsHtml}

            <div class="product-card-actions">
              <button class="btn-add-cart" data-action="add-cart" data-product-id="${product.id}">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                Add
              </button>

              <!-- SellAuth Direct Checkout Trigger Button -->
              <button 
                class="btn-buy-sellauth" 
                data-sellauth-shop="${shopId}" 
                data-sellauth-shop-url="${shopUrl}" 
                data-sellauth-cart='${sellauthCartPayload}'
                data-sellauth-modal="false"
                data-sellauth-ignore
                data-action="buy-now" 
                data-product-id="${product.id}"
                title="Instant Checkout via SellAuth"
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                Buy Now
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderCategoryPills() {
    if (!elements.categoryPills) return;

    let html = `
      <button class="category-pill ${state.activeCategory === 'all' ? 'active' : ''}" data-category="all">
        🌈 All Treats
      </button>
    `;

    (state.sellauth.categories || []).forEach(cat => {
      const key = (cat.path || String(cat.id)).toLowerCase();
      const isActive = (
        state.activeCategory.toLowerCase() === key ||
        state.activeCategory === String(cat.id) ||
        state.activeCategory.toLowerCase() === (cat.name || '').toLowerCase()
      );
      const icon = cat.icon || getCategoryIcon(cat.name);
      html += `
        <button class="category-pill ${isActive ? 'active' : ''}" data-category="${key}">
          ${icon} ${cat.name}
        </button>
      `;
    });

    elements.categoryPills.innerHTML = html;
  }

  function updateCategoryPills() {
    if (!elements.categoryPills) return;
    const pills = elements.categoryPills.querySelectorAll('.category-pill');
    pills.forEach(pill => {
      const key = (pill.dataset.category || '').toLowerCase();
      if (key === state.activeCategory.toLowerCase()) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  function updateDietaryChips() {
    if (!elements.dietaryFilters) return;
    const chips = elements.dietaryFilters.querySelectorAll('.chip-filter');
    chips.forEach(chip => {
      if (chip.dataset.dietary === state.activeDietary) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Shopping Cart Logic & Free Shipping Progress Bar
  // ---------------------------------------------------------------------------
  function loadSavedCart() {
    try {
      const saved = localStorage.getItem('sugardrop_cart');
      if (saved) {
        state.cart = JSON.parse(saved);
      }
    } catch (e) {
      state.cart = [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem('sugardrop_cart', JSON.stringify(state.cart));
    } catch (e) {
      console.warn('Could not save cart:', e);
    }
    updateCartDrawer();
  }

  function addToCart(productId, quantity = 1) {
    const product = state.products.find(p => p.id === Number(productId));
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        sellauthProductId: product.sellauthProductId,
        sellauthVariantId: product.sellauthVariantId,
        name: product.name,
        price: product.price,
        image: product.image,
        weight: product.weight,
        quantity: quantity
      });
    }

    saveCart();
    bumpCartBadge();
    triggerConfetti();
    showToast(`Added ${product.name} to cart! 🍬`, 'success');
  }

  function updateCartQuantity(productId, delta) {
    const index = state.cart.findIndex(i => i.id === Number(productId));
    if (index === -1) return;

    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    saveCart();
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== Number(productId));
    saveCart();
  }

  function bumpCartBadge() {
    if (!elements.cartCountBadge) return;
    elements.cartCountBadge.classList.add('bump');
    setTimeout(() => {
      elements.cartCountBadge.classList.remove('bump');
    }, 400);
  }

  function updateCartDrawer() {
    const totalCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);

    // Update Badges
    if (elements.cartCountBadge) {
      elements.cartCountBadge.textContent = totalCount;
      elements.cartCountBadge.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    // Subtotal Calculation
    const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const discountAmount = subtotal * (state.discountPercent / 100);
    const freeShippingThreshold = 35.00;
    const shipping = subtotal >= freeShippingThreshold ? 0 : 4.99;
    const total = Math.max(0, subtotal - discountAmount) + shipping;

    // Update Free Shipping Progress Bar
    if (elements.shippingProgressFill && elements.shippingProgressText) {
      const needed = Math.max(0, freeShippingThreshold - subtotal);
      const percentage = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

      elements.shippingProgressFill.style.width = `${percentage}%`;

      if (subtotal >= freeShippingThreshold) {
        elements.shippingProgressFill.classList.add('unlocked');
        elements.shippingProgressText.innerHTML = `<span>🎉</span> <span>You unlocked <strong>FREE Melt-Proof Express Shipping!</strong></span>`;
      } else {
        elements.shippingProgressFill.classList.remove('unlocked');
        elements.shippingProgressText.innerHTML = `<span>🚚</span> <span>Add <strong>$${needed.toFixed(2)}</strong> more for <strong>FREE Shipping!</strong></span>`;
      }
    }

    // Toggle Empty State vs Items
    if (state.cart.length === 0) {
      if (elements.cartEmptyState) elements.cartEmptyState.style.display = 'block';
      if (elements.cartItemsContainer) elements.cartItemsContainer.style.display = 'none';
      if (elements.cartDrawerFooter) elements.cartDrawerFooter.style.display = 'none';
      return;
    }

    if (elements.cartEmptyState) elements.cartEmptyState.style.display = 'none';
    if (elements.cartItemsContainer) elements.cartItemsContainer.style.display = 'flex';
    if (elements.cartDrawerFooter) elements.cartDrawerFooter.style.display = 'block';

    // Render cart items
    elements.cartItemsContainer.innerHTML = state.cart.map(item => `
      <div class="cart-item-row" data-product-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80'" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-weight">${item.weight || '8 oz'}</div>
          <div class="cart-item-controls">
            <div class="quantity-stepper">
              <button class="stepper-btn" data-action="cart-minus" data-product-id="${item.id}">−</button>
              <span class="stepper-val">${item.quantity}</span>
              <button class="stepper-btn" data-action="cart-plus" data-product-id="${item.id}">+</button>
            </div>
          </div>
        </div>
        <div class="cart-item-right">
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
          <button class="btn-remove-item" data-action="cart-remove" data-product-id="${item.id}" title="Remove Item">Remove</button>
        </div>
      </div>
    `).join('');

    if (elements.cartSubtotalElem) elements.cartSubtotalElem.textContent = `$${subtotal.toFixed(2)}`;
    
    if (elements.cartDiscountRow) {
      if (state.discountPercent > 0) {
        elements.cartDiscountRow.style.display = 'flex';
        if (elements.cartDiscountElem) elements.cartDiscountElem.textContent = `-$${discountAmount.toFixed(2)} (${state.discountPercent}% OFF)`;
      } else {
        elements.cartDiscountRow.style.display = 'none';
      }
    }

    if (elements.cartShippingElem) {
      elements.cartShippingElem.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    }

    if (elements.cartTotalElem) {
      elements.cartTotalElem.textContent = `$${total.toFixed(2)}`;
    }

    // Update SellAuth Checkout Button with multi-item cart JSON payload
    if (elements.btnCartCheckout) {
      const sellauthCartPayload = state.cart.map(item => ({
        productId: item.sellauthProductId || item.id,
        variantId: item.sellauthVariantId || '',
        quantity: item.quantity
      }));

      elements.btnCartCheckout.setAttribute('data-sellauth-ignore', 'true');
      elements.btnCartCheckout.setAttribute('data-sellauth-shop', state.sellauth.shopId);
      elements.btnCartCheckout.setAttribute('data-sellauth-shop-url', state.sellauth.shopUrl);
      elements.btnCartCheckout.setAttribute('data-sellauth-cart', JSON.stringify(sellauthCartPayload));
      elements.btnCartCheckout.setAttribute('data-sellauth-modal', 'false');
    }
  }

  // ---------------------------------------------------------------------------
  // Quick View Modal
  // ---------------------------------------------------------------------------
  function openQuickView(productId) {
    const product = state.products.find(p => p.id === Number(productId));
    if (!product || !elements.quickViewModal || !elements.quickViewContent) return;

    const sellauthCartPayload = JSON.stringify([{ productId: product.sellauthProductId, quantity: 1 }]);
    const originalPriceHtml = product.originalPrice ? `<s>$${product.originalPrice.toFixed(2)}</s>` : '';

    elements.quickViewContent.innerHTML = `
      <div class="quickview-grid">
        <div class="quickview-image-wrap">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80'" />
        </div>
        <div class="quickview-info">
          <span class="product-category-tag" style="margin-bottom: 0.4rem; display: inline-block;">${product.categoryName}</span>
          <h2>${product.name}</h2>
          <div class="quickview-price-bar">
            <span class="quickview-price">$${product.price.toFixed(2)}</span>
            ${originalPriceHtml}
            <span style="font-size: 0.85rem; color: #10b981; font-weight: 700;">In Stock (${product.stockCount || 12} left)</span>
          </div>
          <p class="quickview-desc">${product.description}</p>

          <div class="quickview-nutrition-table">
            <div class="nutri-col">
              <strong>${product.nutrition.calories || '110 kcal'}</strong>
              <span>Calories</span>
            </div>
            <div class="nutri-col">
              <strong>${product.nutrition.servingSize || '30g'}</strong>
              <span>Serving</span>
            </div>
            <div class="nutri-col">
              <strong>${product.nutrition.totalSugar || '18g'}</strong>
              <span>Sugar</span>
            </div>
            <div class="nutri-col">
              <strong>${product.nutrition.sodium || '15mg'}</strong>
              <span>Sodium</span>
            </div>
          </div>

          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.5;">
            <strong>Ingredients:</strong> ${product.ingredients}
          </div>

          <div class="quickview-actions">
            <button class="btn-secondary" data-action="add-cart" data-product-id="${product.id}" style="flex: 1;">
              Add to Cart
            </button>
            <button 
              class="btn-primary" 
              data-action="buy-now" 
              data-product-id="${product.id}"
              data-sellauth-shop="${state.sellauth.shopId}" 
              data-sellauth-shop-url="${state.sellauth.shopUrl}" 
              data-sellauth-cart='${sellauthCartPayload}'
              data-sellauth-modal="false"
              data-sellauth-ignore
              style="flex: 1.35;"
            >
              ⚡ Instant SellAuth Checkout
            </button>
          </div>
        </div>
      </div>
    `;

    elements.quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    if (!elements.quickViewModal) return;
    elements.quickViewModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ---------------------------------------------------------------------------
  // SellAuth Configuration Modal Handlers
  // ---------------------------------------------------------------------------
  function openConfigModal() {
    if (!elements.configModal) return;
    initSellAuthConfig();
    elements.configModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeConfigModal() {
    if (!elements.configModal) return;
    elements.configModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ---------------------------------------------------------------------------
  // Flash Drop Timer
  // ---------------------------------------------------------------------------
  function initFlashTimer() {
    if (!elements.countdownHours || !elements.countdownMins || !elements.countdownSecs) return;
    let remainingSeconds = 14 * 3600 + 42 * 60 + 18;

    function tick() {
      if (remainingSeconds <= 0) {
        remainingSeconds = 24 * 3600;
      }
      remainingSeconds--;

      const h = Math.floor(remainingSeconds / 3600);
      const m = Math.floor((remainingSeconds % 3600) / 60);
      const s = remainingSeconds % 60;

      if (elements.countdownHours) elements.countdownHours.textContent = String(h).padStart(2, '0');
      if (elements.countdownMins) elements.countdownMins.textContent = String(m).padStart(2, '0');
      if (elements.countdownSecs) elements.countdownSecs.textContent = String(s).padStart(2, '0');
    }

    tick();
    setInterval(tick, 1000);
  }

  // ---------------------------------------------------------------------------
  // Confetti Particle Engine
  // ---------------------------------------------------------------------------
  function triggerConfetti() {
    const canvas = elements.confettiCanvas;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#ff2a6d', '#8b5cf6', '#06b6d4', '#f59e0b', '#10b981', '#ffffff'];

    for (let i = 0; i < 70; i++) {
      pieces.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.8) * 16,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    let frames = 0;
    function animate() {
      frames++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rotation += p.rSpeed;
        p.opacity -= 0.015;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (frames < 75) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    requestAnimationFrame(animate);
  }

  // ---------------------------------------------------------------------------
  // FAQ Accordion
  // ---------------------------------------------------------------------------
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      if (questionBtn) {
        questionBtn.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          faqItems.forEach(other => other.classList.remove('active'));
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Toast Notifications
  // ---------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    if (!elements.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${type === 'success' ? '🍭' : '✨'}</span>
      <span class="toast-msg">${message}</span>
    `;

    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ---------------------------------------------------------------------------
  // Global Event Listeners Setup
  // ---------------------------------------------------------------------------
  function setupEventListeners() {
    // Header Scroll Effect
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });

    // Category Filter Pills Click
    if (elements.categoryPills) {
      elements.categoryPills.addEventListener('click', (e) => {
        const pill = e.target.closest('.category-pill');
        if (!pill) return;
        state.activeCategory = pill.dataset.category;
        updateCategoryPills();
        renderProducts();
      });
    }

    // Dietary Chips Click
    if (elements.dietaryFilters) {
      elements.dietaryFilters.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip-filter');
        if (!chip) return;
        state.activeDietary = chip.dataset.dietary;
        updateDietaryChips();
        renderProducts();
      });
    }

    // Search Input
    if (elements.searchInput) {
      let debounceTimer;
      elements.searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          state.searchQuery = e.target.value;
          renderProducts();
        }, 180);
      });
    }

    // Sort Dropdown
    if (elements.sortSelect) {
      elements.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
      });
    }

    // Delegate Clicks on Products Grid
    if (elements.productsGrid) {
      elements.productsGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        const action = btn.dataset.action;
        const productId = btn.dataset.productId;

        if (action === 'add-cart') {
          addToCart(productId, 1);
        } else if (action === 'quickview') {
          openQuickView(productId);
        } else if (action === 'buy-now') {
          const product = state.products.find(p => p.id === Number(productId));
          if (product) {
            triggerSellAuthCheckout([{ 
              productId: product.sellauthProductId, 
              variantId: product.sellauthVariantId, 
              quantity: 1 
            }]);
          }
        }
      });
    }

    // Delegate Clicks in Quick View Details
    if (elements.quickViewContent) {
      elements.quickViewContent.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        const action = btn.dataset.action;
        const productId = btn.dataset.productId;

        if (action === 'add-cart') {
          addToCart(productId, 1);
          closeQuickView();
        } else if (action === 'buy-now') {
          const product = state.products.find(p => p.id === Number(productId));
          if (product) {
            triggerSellAuthCheckout([{ 
              productId: product.sellauthProductId, 
              variantId: product.sellauthVariantId, 
              quantity: 1 
            }]);
          }
        }
      });
    }

    // Cart Drawer Open / Close
    if (elements.btnOpenCart) {
      elements.btnOpenCart.addEventListener('click', () => {
        if (elements.cartDrawer) elements.cartDrawer.classList.add('open');
        if (elements.cartBackdrop) elements.cartBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    }

    function closeCartDrawer() {
      if (elements.cartDrawer) elements.cartDrawer.classList.remove('open');
      if (elements.cartBackdrop) elements.cartBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (elements.btnCloseCart) elements.btnCloseCart.addEventListener('click', closeCartDrawer);
    if (elements.cartBackdrop) elements.cartBackdrop.addEventListener('click', closeCartDrawer);

    // Cart Item Steppers & Remove
    if (elements.cartItemsContainer) {
      elements.cartItemsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        const action = btn.dataset.action;
        const productId = btn.dataset.productId;

        if (action === 'cart-plus') {
          updateCartQuantity(productId, 1);
        } else if (action === 'cart-minus') {
          updateCartQuantity(productId, -1);
        } else if (action === 'cart-remove') {
          removeFromCart(productId);
        }
      });
    }

    // In-Cart Upsell
    if (elements.btnAddUpsell) {
      elements.btnAddUpsell.addEventListener('click', () => {
        const existingUpsell = state.cart.find(i => i.id === 999);
        if (existingUpsell) {
          existingUpsell.quantity += 1;
        } else {
          state.cart.push({
            id: 999,
            sellauthProductId: 999,
            name: "Mystery Mini Sour Pocket Pack",
            price: 3.99,
            weight: "2 oz (56g)",
            image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=200&q=80",
            quantity: 1
          });
        }
        saveCart();
        bumpCartBadge();
        triggerConfetti();
        showToast("Mystery Mini Sour Pack added to cart! 🍬", "success");
      });
    }

    // Cart Drawer Checkout Button Click
    if (elements.btnCartCheckout) {
      elements.btnCartCheckout.addEventListener('click', () => {
        const sellauthCart = state.cart.map(i => ({
          productId: i.sellauthProductId || i.id,
          variantId: i.sellauthVariantId,
          quantity: i.quantity
        }));
        triggerSellAuthCheckout(sellauthCart);
      });
    }

    // Promo Code Form
    if (elements.btnApplyPromo && elements.promoInput) {
      elements.btnApplyPromo.addEventListener('click', () => {
        const code = elements.promoInput.value.trim().toUpperCase();
        if (code === 'SUGAR15' || code === 'SWEET10') {
          state.discountPercent = code === 'SUGAR15' ? 15 : 10;
          state.promoCodeApplied = code;
          updateCartDrawer();
          triggerConfetti();
          showToast(`Coupon code ${code} applied! Enjoy your discount. 🎉`, 'success');
        } else if (code === '') {
          showToast('Please enter a coupon code.', 'info');
        } else {
          showToast('Invalid coupon code. Try SUGAR15 for 15% off!', 'info');
        }
      });
    }

    // Flash Drop Button
    if (elements.btnFlashBuy) {
      elements.btnFlashBuy.addEventListener('click', () => {
        const bundle = state.products.find(p => p.id === 110) || state.products[0];
        triggerSellAuthCheckout([{ productId: bundle.sellauthProductId, quantity: 1 }]);
      });
    }

    // Reviews System Events
    if (elements.btnOpenWriteReview) {
      elements.btnOpenWriteReview.addEventListener('click', () => openReviewModal());
    }

    if (elements.btnCloseReviewModal) {
      elements.btnCloseReviewModal.addEventListener('click', closeReviewModal);
    }

    if (elements.reviewModal) {
      elements.reviewModal.addEventListener('click', (e) => {
        if (e.target === elements.reviewModal) closeReviewModal();
      });
    }

    if (elements.formSubmitReview) {
      elements.formSubmitReview.addEventListener('submit', (e) => {
        e.preventDefault();
        const author = elements.reviewAuthorName ? elements.reviewAuthorName.value.trim() : 'Verified Buyer';
        const stars = elements.reviewStarsVal ? Number(elements.reviewStarsVal.value) : 5;
        const product = elements.reviewProductSelect ? elements.reviewProductSelect.value : 'Artisan Candy';
        const body = elements.reviewBodyText ? elements.reviewBodyText.value.trim() : '';

        if (!body) return;

        const newReview = {
          id: Date.now(),
          name: author,
          stars: stars,
          productName: product,
          text: body,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };

        state.reviews.unshift(newReview);
        saveReviews();
        closeReviewModal();
        triggerConfetti();
        showToast('Thank you for your verified review! 🌟', 'success');

        // Reset form
        elements.formSubmitReview.reset();
      });
    }

    // Modal Close Buttons & Backdrop Clicks
    if (elements.btnCloseQuickView) elements.btnCloseQuickView.addEventListener('click', closeQuickView);
    if (elements.quickViewModal) {
      elements.quickViewModal.addEventListener('click', (e) => {
        if (e.target === elements.quickViewModal) closeQuickView();
      });
    }

    // SellAuth Config Modal (Accessible from footer)
    if (elements.btnOpenConfig) elements.btnOpenConfig.addEventListener('click', openConfigModal);
    if (elements.btnCloseConfig) elements.btnCloseConfig.addEventListener('click', closeConfigModal);
    if (elements.configModal) {
      elements.configModal.addEventListener('click', (e) => {
        if (e.target === elements.configModal) closeConfigModal();
      });
    }

    // SellAuth Categories Actions
    if (elements.btnSyncCategories) {
      elements.btnSyncCategories.addEventListener('click', syncCategoriesFromSellAuth);
    }

    if (elements.btnResetCategories) {
      elements.btnResetCategories.addEventListener('click', () => {
        state.sellauth.categories = JSON.parse(JSON.stringify(DEFAULT_SELLAUTH_CATEGORIES));
        saveSellAuthCategories();
        showToast('Reset to default SellAuth candy categories.', 'info');
      });
    }

    if (elements.btnAddCategory) {
      elements.btnAddCategory.addEventListener('click', () => {
        const name = prompt('Enter new SellAuth Category name (e.g., "Cotton Candy", "Licorice", "Sour Drops"):');
        if (!name || !name.trim()) return;

        const cleanName = name.trim();
        const slug = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const nextId = state.sellauth.categories.length > 0 
          ? Math.max(...state.sellauth.categories.map(c => Number(c.id) || 0)) + 1 
          : 1;

        state.sellauth.categories.push({
          id: nextId,
          name: cleanName,
          path: slug,
          icon: getCategoryIcon(cleanName)
        });

        saveSellAuthCategories();
        showToast(`Added SellAuth category: "${cleanName}"`, 'success');
      });
    }

    if (elements.formConfig) {
      elements.formConfig.addEventListener('submit', (e) => {
        e.preventDefault();
        const shopId = elements.inputConfigShopId ? elements.inputConfigShopId.value : '12345';
        const shopUrl = elements.inputConfigShopUrl ? elements.inputConfigShopUrl.value : 'https://candystore.sellauth.com';
        const apiKey = elements.inputConfigApiKey ? elements.inputConfigApiKey.value : '';
        const theme = elements.selectConfigTheme ? elements.selectConfigTheme.value : 'dark';
        saveSellAuthConfig(shopId, shopUrl, apiKey, theme);
      });
    }

    // Escape key closes modals and drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeQuickView();
        closeConfigModal();
        closeReviewModal();
        closeCartDrawer();
      }
    });
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }


  // ---------------------------------------------------------------------------
  // Ambient Floating Candy Sparkles & Cursor Spotlight Engine
  // ---------------------------------------------------------------------------
  function initAmbientVisuals() {
    const canvas = document.getElementById('ambient-particles-canvas');
    const mouseGlow = document.getElementById('mouse-glow');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    // Palette of glowing candy sparkles matching dark luxury theme
    const colors = [
      'rgba(255, 42, 109, ',   // Neon Pink
      'rgba(6, 182, 212, ',    // Ice Cyan
      'rgba(192, 132, 252, ',  // Sweet Violet
      'rgba(251, 191, 36, '    // Honey Amber
    ];

    const particleCount = Math.min(42, Math.floor(width / 32));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3.8 + 1.2,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.25,
        speedY: Math.random() * 0.45 + 0.18,
        speedX: (Math.random() - 0.5) * 0.28,
        angle: Math.random() * Math.PI * 2,
        type: Math.random() > 0.6 ? 'star' : 'orb'
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let isMouseMoving = false;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      isMouseMoving = true;
    }, { passive: true });

    function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }

    function renderLoop() {
      if (document.hidden) {
        requestAnimationFrame(renderLoop);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse glow follower
      if (mouseGlow) {
        mouseX += (targetX - mouseX) * 0.12;
        mouseY += (targetY - mouseY) * 0.12;
        mouseGlow.style.transform = `translate3d(${(mouseX - 190).toFixed(1)}px, ${(mouseY - 190).toFixed(1)}px, 0)`;
      }

      for (let p of particles) {
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.angle) * 0.25;
        p.angle += 0.022;
        p.alpha += Math.sin(p.angle * 2) * 0.007;
        const currentAlpha = Math.max(0.12, Math.min(0.85, p.alpha));

        // Parallax repulsion from cursor
        if (isMouseMoving) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const force = (130 - dist) / 130;
            p.x += (dx / dist) * force * 1.6;
            p.y += (dy / dist) * force * 1.6;
          }
        }

        // Wrap boundaries
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // Render particle
        if (p.type === 'star') {
          drawStar(p.x, p.y, 4, p.size * 1.8, p.size * 0.6, `${p.colorPrefix}${currentAlpha})`);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.colorPrefix}${currentAlpha})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `${p.colorPrefix}0.75)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      requestAnimationFrame(renderLoop);
    }

    renderLoop();
  }

  // ---------------------------------------------------------------------------
  // Interactive 3D Card Hover Tilt Effect
  // ---------------------------------------------------------------------------
  function initCardTiltInteractivity() {
    const grid = elements.productsGrid;
    if (!grid) return;

    grid.addEventListener('mousemove', (e) => {
      const card = e.target.closest('.product-card');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-10px) scale(1.02)`;
    });

    grid.addEventListener('mouseleave', (e) => {
      const cards = grid.querySelectorAll('.product-card');
      cards.forEach(card => {
        card.style.transform = '';
      });
    }, true);

    // Reset card when mouse leaves individual card
    grid.addEventListener('mouseout', (e) => {
      const card = e.target.closest('.product-card');
      if (card && !card.contains(e.relatedTarget)) {
        card.style.transform = '';
      }
    });
  }

})();
