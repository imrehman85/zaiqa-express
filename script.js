/* ===== Business settings: edit these to match your restaurant ===== */
const SETTINGS = {
  name: "Zaiqa Express",
  whatsapp: "923001234567",      // international format, no "+"
  currency: "Rs",
  prepMinutes: [15, 25],
  // 0 = Sunday ... 6 = Saturday. Times are 24h; a close past midnight uses values > 24.
  hours: {
    0: [12, 25], 1: [12, 24], 2: [12, 24], 3: [12, 24], 4: [12, 24], 5: [14, 25], 6: [12, 25],
  },
};

const unsplash = (id, w = 600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "burgers", label: "🍔 Burgers & Wraps" },
  { id: "chicken", label: "🍗 Fried Chicken" },
  { id: "pizza", label: "🍕 Pizza" },
  { id: "karahi", label: "🍲 Biryani & Karahi" },
  { id: "bbq", label: "🔥 BBQ" },
  { id: "sides", label: "🍟 Sides & Naan" },
  { id: "drinks", label: "🥤 Drinks" },
];

const MENU = [
  // Burgers
  { id: "smash", cat: "burgers", name: "Classic Smash Burger", desc: "Double-smashed beef patty, cheddar, pickles, onions and our house sauce on a toasted brioche.", price: 750, img: unsplash("1568901346375-23c9450c58cd"), emoji: "🍔", tags: ["best"] },
  { id: "zinger", cat: "burgers", name: "Zinger Burger", desc: "Crunchy spiced chicken fillet, iceberg lettuce and creamy mayo. A local legend.", price: 590, img: unsplash("1606755962773-d324e0a13086"), emoji: "🍔", tags: ["best"] },
  { id: "tikka-burger", cat: "burgers", name: "Tikka Burger", desc: "Chargrilled chicken tikka, mint chutney mayo, onions and fresh salad.", price: 650, img: unsplash("1550547660-d9450f859349"), emoji: "🍔", tags: ["hot"] },

  { id: "loaded-beef", cat: "burgers", name: "Loaded Beef Burger", desc: "Thick grilled beef patty, cheese, lettuce, tomato and smoky BBQ mayo.", price: 820, img: unsplash("1571091718767-18b5b1457add"), emoji: "🍔", tags: [] },

  // Fried chicken
  { id: "broast", cat: "chicken", name: "Crispy Broast (4 pcs)", desc: "Pressure-fried, juicy inside and crackling outside. Served with fries, bun and garlic sauce.", price: 1150, img: unsplash("1626082927389-6cd097cdc6ec"), emoji: "🍗", tags: ["best"] },
  { id: "wings", cat: "chicken", name: "Hot Wings (8 pcs)", desc: "Tossed in a fiery chilli glaze. Cool down with the ranch dip.", price: 690, img: unsplash("1567620832903-9fc6debc209f"), emoji: "🍗", tags: ["hot"] },
  { id: "nuggets", cat: "chicken", name: "Chicken Nuggets (10 pcs)", desc: "Golden, tender bites with your choice of dip. A kids' favourite.", price: 520, img: unsplash("1562967914-608f82629710"), emoji: "🍗", tags: [] },

  // Pizza
  { id: "tikka-pizza", cat: "pizza", name: "Chicken Tikka Pizza", desc: "Spicy tikka chunks, onions, green chillies and mozzarella. Medium 10\".", price: 1350, img: unsplash("1513104890138-7c749659a591"), emoji: "🍕", tags: ["hot"] },
  { id: "fajita-pizza", cat: "pizza", name: "Chicken Fajita Pizza", desc: "Fajita chicken, bell peppers, onions and loads of cheese. Medium 10\".", price: 1350, img: unsplash("1565299624946-b28f40a0ae38"), emoji: "🍕", tags: [] },

  { id: "shawarma", cat: "burgers", name: "Chicken Shawarma", desc: "Slow-roasted chicken, garlic toum, pickles and fries wrapped in pita.", price: 420, img: unsplash("1529006557810-274b9b2fc783"), emoji: "🌯", tags: ["best"] },

  { id: "biryani", cat: "karahi", name: "Chicken Biryani", desc: "Fragrant basmati layered with spiced chicken, saffron and fried onions. Served with raita.", price: 650, img: unsplash("1563379091339-03b21ab4a4f8"), emoji: "🍚", tags: ["best", "hot"] },
  { id: "achari-handi", cat: "karahi", name: "Chicken Achari Handi", desc: "Tangy pickling spices, tomatoes and tender chicken, slow-cooked in a clay handi. Serves 2.", price: 1350, img: unsplash("1596797038530-2c107229654b"), emoji: "🍲", tags: [] },

  // Karahi
  { id: "chicken-karahi", cat: "karahi", name: "Chicken Karahi (Half)", desc: "Wok-cooked with tomatoes, ginger, green chillies and fresh coriander. Serves 2.", price: 1450, img: unsplash("1603894584373-5ac82b2ae398"), emoji: "🍲", tags: ["best"] },
  { id: "mutton-karahi", cat: "karahi", name: "Mutton Karahi (Half)", desc: "Slow-cooked mutton in a peppery tomato masala. Serves 2.", price: 2450, img: unsplash("1545247181-516773cae754"), emoji: "🍲", tags: ["hot"] },
  { id: "daal", cat: "karahi", name: "Daal Mash Fry", desc: "Buttery white lentils finished with a sizzling garlic and cumin tarka.", price: 480, img: unsplash("1546833999-b9f581a1996d"), emoji: "🍲", tags: ["veg"] },

  { id: "butter-chicken", cat: "karahi", name: "Butter Chicken", desc: "Tandoori chicken simmered in a silky tomato, butter and cream gravy.", price: 1250, img: unsplash("1565557623262-b51c2513a641"), emoji: "🍲", tags: [] },

  // BBQ
  { id: "seekh", cat: "bbq", name: "Beef Seekh Kebab (4 pcs)", desc: "Hand-minced, chargrilled skewers with onion rings and mint chutney.", price: 720, img: unsplash("1599487488170-d11ec9c172f0"), emoji: "🔥", tags: ["best"] },
  { id: "tikka", cat: "bbq", name: "Chicken Tikka (Leg)", desc: "Marinated overnight in yoghurt and spices, roasted over hot coals.", price: 520, img: unsplash("1610057099443-fde8c4d50f91"), emoji: "🔥", tags: ["hot"] },
  { id: "malai-boti", cat: "bbq", name: "Malai Boti (10 pcs)", desc: "Creamy, mild and melt-in-your-mouth chicken boti.", price: 890, img: unsplash("1628294895950-9805252327bc"), emoji: "🔥", tags: [] },

  // Sides
  { id: "loaded-fries", cat: "sides", name: "Loaded Fries", desc: "Fries piled with cheese sauce, jalapeños and chicken tikka bits.", price: 550, img: unsplash("1573080496219-bb080dd4f877"), emoji: "🍟", tags: [] },
  { id: "samosa", cat: "sides", name: "Samosa Chaat", desc: "Crushed samosas, chickpeas, yoghurt, tamarind and chaat masala.", price: 380, img: unsplash("1601050690597-df0568f70950"), emoji: "🥟", tags: ["veg"] },
  { id: "buns", cat: "sides", name: "Garlic Butter Buns (6 pcs)", desc: "Soft, fresh-baked buns brushed with garlic butter, with a spicy dip.", price: 320, img: unsplash("1606491956689-2ea866880c84"), emoji: "🫓", tags: ["veg"] },
  { id: "naan", cat: "sides", name: "Tandoori Naan", desc: "Fresh from the tandoor. The perfect partner for karahi.", price: 80, img: unsplash("1546833999-b9f581a1996d"), emoji: "🫓", tags: ["veg"] },

  // Drinks
  { id: "mint-margarita", cat: "drinks", name: "Mint Margarita", desc: "Fresh mint, lemon and crushed ice. Sweet, tangy and cooling.", price: 320, img: unsplash("1513558161293-cdaf765ed2fd"), emoji: "🍹", tags: [] },
  { id: "soft-drink", cat: "drinks", name: "Soft Drink (500ml)", desc: "Chilled cola, lemon-lime or orange.", price: 150, img: unsplash("1622483767028-3f66f32aef97"), emoji: "🥤", tags: [] },

  // Deal (shown in the deal band, not the grid)
  { id: "family-deal", cat: "deal", name: "Family Deal", desc: "Chicken biryani, chicken karahi (half), 4 naan and a 1.5L drink.", price: 3499, img: unsplash("1563379091339-03b21ab4a4f8"), emoji: "🍱", tags: [] },
];

const TAG_LABELS = { best: ["Bestseller", "tag-best"], hot: ["Spicy", "tag-hot"], veg: ["Veg", "tag-veg"] };

/* ===== Helpers ===== */
const $ = (sel) => document.querySelector(sel);
const money = (n) => `${SETTINGS.currency} ${n.toLocaleString("en-PK")}`;
const byId = Object.fromEntries(MENU.map((m) => [m.id, m]));

function imgTag(item, cls = "") {
  return `<img src="${item.img}" alt="${item.name}" loading="lazy" class="${cls}" data-fallback="${item.emoji}">`;
}

// Replace any photo that fails to load with a warm gradient tile + emoji.
document.addEventListener("error", (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement) || !img.dataset.fallback) return;
  const div = document.createElement("div");
  div.className = "img-fallback";
  const fb = img.dataset.fallback;
  div.textContent = fb.length <= 2 ? fb : fb === "burger" ? "🍔" : "🍛";
  img.replaceWith(div);
}, true);

/* ===== Cart state ===== */
let cart = {};
try { cart = JSON.parse(localStorage.getItem("zx-cart") || "{}") || {}; } catch { cart = {}; }
for (const id of Object.keys(cart)) if (!byId[id]) delete cart[id];

const saveCart = () => { try { localStorage.setItem("zx-cart", JSON.stringify(cart)); } catch {} };
const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);
const cartTotal = () => Object.entries(cart).reduce((sum, [id, q]) => sum + byId[id].price * q, 0);

function setQty(id, qty) {
  if (qty <= 0) delete cart[id];
  else cart[id] = qty;
  saveCart();
  renderCart();
  updateDishButtons(id);
}

function addToCart(id) {
  setQty(id, (cart[id] || 0) + 1);
  toast(`Added ${byId[id].name}`);
  const c = $("#cartCount");
  c.classList.remove("bump"); void c.offsetWidth; c.classList.add("bump");
}

/* ===== Menu rendering ===== */
let activeCat = "all";
let query = "";

function renderTabs() {
  $("#categoryTabs").innerHTML = CATEGORIES.map((c) =>
    `<button class="tab" role="tab" data-cat="${c.id}" aria-selected="${c.id === activeCat}">${c.label}</button>`
  ).join("");
}

function dishAction(item) {
  const q = cart[item.id];
  if (!q) return `<button class="add-btn" data-add="${item.id}" aria-label="Add ${item.name}">+ Add</button>`;
  return `<div class="qty-inline" aria-label="${item.name} quantity">
      <button data-dec="${item.id}" aria-label="Remove one">−</button><span>${q}</span><button data-inc="${item.id}" aria-label="Add one">+</button>
    </div>`;
}

function renderMenu() {
  const q = query.trim().toLowerCase();
  const items = MENU.filter((m) => m.cat !== "deal")
    .filter((m) => activeCat === "all" || m.cat === activeCat)
    .filter((m) => !q || `${m.name} ${m.desc}`.toLowerCase().includes(q));

  $("#menuGrid").innerHTML = items.map((m, i) => `
    <article class="dish" style="animation-delay:${Math.min(i, 8) * 40}ms">
      <div class="dish-img">
        ${imgTag(m)}
        <div class="dish-tags">${m.tags.map((t) => `<span class="tag ${TAG_LABELS[t][1]}">${TAG_LABELS[t][0]}</span>`).join("")}</div>
      </div>
      <div class="dish-body">
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <div class="dish-foot">
          <span class="price">${money(m.price)}</span>
          <span class="dish-action" data-action-for="${m.id}">${dishAction(m)}</span>
        </div>
      </div>
    </article>`).join("");
  $("#menuEmpty").hidden = items.length > 0;
}

function updateDishButtons(id) {
  const slot = document.querySelector(`[data-action-for="${id}"]`);
  if (slot) slot.innerHTML = dishAction(byId[id]);
}

/* ===== Drawer / checkout ===== */
let step = "cart"; // cart | checkout | confirm

function renderCart() {
  const count = cartCount();
  const total = cartTotal();
  $("#cartCount").textContent = count;
  $("#mobileCartCount").textContent = `${count} ${count === 1 ? "item" : "items"}`;
  $("#mobileCartTotal").textContent = money(total);
  $("#mobileCartBar").hidden = count === 0 || $("#cartDrawer").classList.contains("open");
  $("#subtotal").textContent = money(total);
  $("#total").textContent = money(total);

  const entries = Object.entries(cart);
  $("#cartList").innerHTML = entries.map(([id, q]) => {
    const m = byId[id];
    return `<li class="cart-item">
      <div class="cart-item-img">${imgTag(m)}</div>
      <div>
        <h4>${m.name}</h4>
        <div class="line-price">${money(m.price * q)}</div>
      </div>
      <div class="qty">
        <button data-dec="${id}" aria-label="Remove one ${m.name}">−</button><span>${q}</span><button data-inc="${id}" aria-label="Add one ${m.name}">+</button>
      </div>
    </li>`;
  }).join("");
  $("#cartEmpty").hidden = entries.length > 0;
  updatePrimary();
}

function updatePrimary() {
  const btn = $("#primaryAction");
  $("#drawerFoot").hidden = step === "confirm";
  btn.disabled = cartCount() === 0;
  btn.textContent = step === "checkout" ? `Place order · ${money(cartTotal())}` : "Continue to pickup details";
}

function showStep(next) {
  step = next;
  $("#cartView").hidden = next !== "cart";
  $("#checkoutView").hidden = next !== "checkout";
  $("#confirmView").hidden = next !== "confirm";
  $("#drawerTitle").textContent = next === "confirm" ? "All done" : next === "checkout" ? "Checkout" : "Your order";
  updatePrimary();
  $("#cartDrawer .drawer-body:not([hidden])")?.scrollTo(0, 0);
}

function openDrawer() {
  const d = $("#cartDrawer");
  d.classList.add("open");
  d.setAttribute("aria-hidden", "false");
  $("#drawerOverlay").hidden = false;
  document.body.classList.add("drawer-open");
  $("#mobileCartBar").hidden = true;
  setTimeout(() => $("#cartCloseBtn").focus(), 50);
}

function closeDrawer() {
  const d = $("#cartDrawer");
  d.classList.remove("open");
  d.setAttribute("aria-hidden", "true");
  $("#drawerOverlay").hidden = true;
  document.body.classList.remove("drawer-open");
  if (step === "confirm") showStep("cart");
  renderCart();
}

function buildSlots() {
  const sel = $("#slotSelect");
  const start = new Date(Date.now() + 30 * 60000);
  start.setMinutes(Math.ceil(start.getMinutes() / 15) * 15, 0, 0);
  const opts = [];
  for (let i = 0; i < 16; i++) {
    const t = new Date(start.getTime() + i * 15 * 60000);
    const label = t.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    const day = t.getDate() !== new Date().getDate() ? " (tomorrow)" : "";
    opts.push(`<option value="${label}${day}">${label}${day}</option>`);
  }
  sel.innerHTML = opts.join("");
}

function validate(form) {
  let ok = true;
  for (const input of form.querySelectorAll("input[required]")) {
    const valid = input.value.trim() !== "" && input.checkValidity();
    input.closest(".field").classList.toggle("invalid", !valid);
    if (!valid && ok) { input.focus(); ok = false; }
  }
  return ok;
}

function placeOrder() {
  const form = $("#checkoutView");
  if (!validate(form)) return;
  const data = Object.fromEntries(new FormData(form));
  const orderNo = String(Math.floor(1000 + Math.random() * 9000));
  const pickup = data.when === "later" ? data.slot : `ASAP (about ${SETTINGS.prepMinutes.join("–")} min)`;
  const lines = Object.entries(cart).map(([id, q]) => `${q} x ${byId[id].name} = ${money(byId[id].price * q)}`);
  const total = money(cartTotal());

  $("#orderNumber").textContent = `#${orderNo}`;
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  $("#confirmDetails").innerHTML = `
    <div><span>Name</span><strong>${esc(data.name)}</strong></div>
    <div><span>Pickup</span><strong>${esc(pickup)}</strong></div>
    <div><span>Items</span><strong>${cartCount()}</strong></div>
    <div><span>Pay at counter</span><strong>${total}</strong></div>`;

  const msg = [
    `*New takeaway order #${orderNo}*`,
    ``,
    ...lines,
    ``,
    `*Total: ${total}* (pay at collection)`,
    `Pickup: ${pickup}`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.notes ? `Notes: ${data.notes}` : "",
  ].filter((l, i, a) => l !== "" || a[i - 1] !== "").join("\n");
  $("#whatsappBtn").href = `https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent(msg)}`;

  cart = {};
  saveCart();
  form.reset();
  $("#slotSelect").hidden = true;
  renderMenu();
  renderCart();
  showStep("confirm");
}

/* ===== Opening status ===== */
function renderOpenStatus() {
  const el = $("#openStatus");
  const now = new Date();
  const h = now.getHours() + now.getMinutes() / 60;
  const today = SETTINGS.hours[now.getDay()];
  const yesterday = SETTINGS.hours[(now.getDay() + 6) % 7];
  const open = (h >= today[0] && h < today[1]) || (yesterday[1] > 24 && h < yesterday[1] - 24);
  el.textContent = open ? "Open now, taking orders" : "Closed now. Opens again at noon";
  el.className = `open-status ${open ? "open" : "closed"}`;
}

/* ===== Toast ===== */
let toastTimer;
function toast(text) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ===== Events ===== */
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-add],[data-inc],[data-dec],[data-cat]");
  if (!t) return;
  if (t.dataset.add) addToCart(t.dataset.add);
  else if (t.dataset.inc) setQty(t.dataset.inc, (cart[t.dataset.inc] || 0) + 1);
  else if (t.dataset.dec) setQty(t.dataset.dec, (cart[t.dataset.dec] || 0) - 1);
  else if (t.dataset.cat) { activeCat = t.dataset.cat; renderTabs(); renderMenu(); }
});

$("#menuSearch").addEventListener("input", (e) => {
  query = e.target.value;
  if (query && activeCat !== "all") { activeCat = "all"; renderTabs(); }
  renderMenu();
});

$("#cartOpenBtn").addEventListener("click", openDrawer);
$("#mobileCartBar").addEventListener("click", openDrawer);
$("#cartCloseBtn").addEventListener("click", closeDrawer);
$("#drawerOverlay").addEventListener("click", closeDrawer);
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && $("#cartDrawer").classList.contains("open")) closeDrawer(); });

$("#browseMenuBtn").addEventListener("click", () => { closeDrawer(); location.hash = "#menu"; });
$("#backToCart").addEventListener("click", () => showStep("cart"));
$("#newOrderBtn").addEventListener("click", () => { showStep("cart"); closeDrawer(); location.hash = "#menu"; });

$("#primaryAction").addEventListener("click", () => {
  if (step === "cart") { buildSlots(); showStep("checkout"); }
  else if (step === "checkout") placeOrder();
});
$("#checkoutView").addEventListener("submit", (e) => { e.preventDefault(); placeOrder(); });
$("#checkoutView").addEventListener("input", (e) => {
  if (e.target.matches("input[required]")) e.target.closest(".field").classList.remove("invalid");
});
$("#checkoutView").addEventListener("change", (e) => {
  if (e.target.name === "when") $("#slotSelect").hidden = e.target.value !== "later";
});

const toggle = $("#menuToggle");
toggle.addEventListener("click", () => {
  const open = $("#mainNav").classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
$("#mainNav").addEventListener("click", (e) => {
  if (e.target.tagName === "A") { $("#mainNav").classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
});

/* ===== Theme (light / dark) ===== */
const themeBtn = $("#themeToggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#15100d" : "#d9441c";
}

themeBtn.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  try { localStorage.setItem("zx-theme", next); } catch {}
  applyTheme(next);
});

// Follow the system setting until the visitor picks a theme themselves.
systemDark.addEventListener("change", (e) => {
  let saved = null;
  try { saved = localStorage.getItem("zx-theme"); } catch {}
  if (!saved) applyTheme(e.matches ? "dark" : "light");
});

window.addEventListener("scroll", () => {
  $(".site-header").classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

/* ===== Init ===== */
$("#year").textContent = new Date().getFullYear();
applyTheme(document.documentElement.getAttribute("data-theme") || "light");
renderTabs();
renderMenu();
renderCart();
renderOpenStatus();
