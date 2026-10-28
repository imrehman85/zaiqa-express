/* ===== Business settings: edit these to match your restaurant ===== */
export const SETTINGS = {
  name: "Zaiqa Express",
  phone: "0300 1234567",
  phoneHref: "tel:+923001234567",
  whatsapp: "923001234567", // international format, no "+"
  address: ["Shop 12, Main Boulevard", "Gulberg III, Lahore"],
  mapQuery: "Main Boulevard Gulberg III Lahore",
  currency: "Rs",
  prepMinutes: [15, 25],
  // 0 = Sunday ... 6 = Saturday. Times are 24h; a close past midnight uses values > 24.
  hours: { 0: [12, 25], 1: [12, 24], 2: [12, 24], 3: [12, 24], 4: [12, 24], 5: [14, 25], 6: [12, 25] } as Record<number, [number, number]>,
  hoursLabel: [
    ["Mon – Thu", "12:00 pm – 12:00 am"],
    ["Fri", "2:00 pm – 1:00 am"],
    ["Sat – Sun", "12:00 pm – 1:00 am"],
  ],
};

export type Tag = "best" | "hot" | "veg";
export type CategoryId = "all" | "burgers" | "chicken" | "pizza" | "karahi" | "bbq" | "sides" | "drinks" | "deal";

export interface MenuItem {
  id: string;
  cat: CategoryId;
  name: string;
  desc: string;
  price: number;
  img: string;
  emoji: string;
  tags: Tag[];
}

export const unsplash = (id: string, w = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "burgers", label: "🍔 Burgers & Wraps" },
  { id: "chicken", label: "🍗 Fried Chicken" },
  { id: "pizza", label: "🍕 Pizza" },
  { id: "karahi", label: "🍲 Biryani & Karahi" },
  { id: "bbq", label: "🔥 BBQ" },
  { id: "sides", label: "🍟 Sides & Naan" },
  { id: "drinks", label: "🥤 Drinks" },
];

export const TAG_STYLES: Record<Tag, { label: string; className: string }> = {
  best: { label: "Bestseller", className: "bg-saffron text-coal" },
  hot: { label: "Spicy", className: "bg-brand text-white" },
  veg: { label: "Veg", className: "bg-green text-white" },
};

export const MENU: MenuItem[] = [
  // Burgers & wraps
  { id: "smash", cat: "burgers", name: "Classic Smash Burger", desc: "Double-smashed beef patty, cheddar, pickles, onions and our house sauce on a toasted brioche.", price: 750, img: unsplash("1568901346375-23c9450c58cd"), emoji: "🍔", tags: ["best"] },
  { id: "zinger", cat: "burgers", name: "Zinger Burger", desc: "Crunchy spiced chicken fillet, iceberg lettuce and creamy mayo. A local legend.", price: 590, img: unsplash("1606755962773-d324e0a13086"), emoji: "🍔", tags: ["best"] },
  { id: "tikka-burger", cat: "burgers", name: "Tikka Burger", desc: "Chargrilled chicken tikka, mint chutney mayo, onions and fresh salad.", price: 650, img: unsplash("1550547660-d9450f859349"), emoji: "🍔", tags: ["hot"] },
  { id: "loaded-beef", cat: "burgers", name: "Loaded Beef Burger", desc: "Thick grilled beef patty, cheese, lettuce, tomato and smoky BBQ mayo.", price: 820, img: unsplash("1571091718767-18b5b1457add"), emoji: "🍔", tags: [] },
  { id: "shawarma", cat: "burgers", name: "Chicken Shawarma", desc: "Slow-roasted chicken, garlic toum, pickles and fries wrapped in pita.", price: 420, img: unsplash("1529006557810-274b9b2fc783"), emoji: "🌯", tags: ["best"] },

  // Fried chicken
  { id: "broast", cat: "chicken", name: "Crispy Broast (4 pcs)", desc: "Pressure-fried, juicy inside and crackling outside. Served with fries, bun and garlic sauce.", price: 1150, img: unsplash("1626082927389-6cd097cdc6ec"), emoji: "🍗", tags: ["best"] },
  { id: "wings", cat: "chicken", name: "Hot Wings (8 pcs)", desc: "Tossed in a fiery chilli glaze. Cool down with the ranch dip.", price: 690, img: unsplash("1567620832903-9fc6debc209f"), emoji: "🍗", tags: ["hot"] },
  { id: "nuggets", cat: "chicken", name: "Chicken Nuggets (10 pcs)", desc: "Golden, tender bites with your choice of dip. A kids' favourite.", price: 520, img: unsplash("1562967914-608f82629710"), emoji: "🍗", tags: [] },

  // Pizza
  { id: "tikka-pizza", cat: "pizza", name: "Chicken Tikka Pizza", desc: "Spicy tikka chunks, onions, green chillies and mozzarella. Medium 10\".", price: 1350, img: unsplash("1513104890138-7c749659a591"), emoji: "🍕", tags: ["hot"] },
  { id: "fajita-pizza", cat: "pizza", name: "Chicken Fajita Pizza", desc: "Fajita chicken, bell peppers, onions and loads of cheese. Medium 10\".", price: 1350, img: unsplash("1565299624946-b28f40a0ae38"), emoji: "🍕", tags: [] },

  // Biryani & karahi
  { id: "biryani", cat: "karahi", name: "Chicken Biryani", desc: "Fragrant basmati layered with spiced chicken, saffron and fried onions. Served with raita.", price: 650, img: unsplash("1563379091339-03b21ab4a4f8"), emoji: "🍚", tags: ["best", "hot"] },
  { id: "chicken-karahi", cat: "karahi", name: "Chicken Karahi (Half)", desc: "Wok-cooked with tomatoes, ginger, green chillies and fresh coriander. Serves 2.", price: 1450, img: unsplash("1603894584373-5ac82b2ae398"), emoji: "🍲", tags: ["best"] },
  { id: "mutton-karahi", cat: "karahi", name: "Mutton Karahi (Half)", desc: "Slow-cooked mutton in a peppery tomato masala. Serves 2.", price: 2450, img: unsplash("1545247181-516773cae754"), emoji: "🍲", tags: ["hot"] },
  { id: "achari-handi", cat: "karahi", name: "Chicken Achari Handi", desc: "Tangy pickling spices, tomatoes and tender chicken, slow-cooked in a clay handi. Serves 2.", price: 1350, img: unsplash("1596797038530-2c107229654b"), emoji: "🍲", tags: [] },
  { id: "butter-chicken", cat: "karahi", name: "Butter Chicken", desc: "Tandoori chicken simmered in a silky tomato, butter and cream gravy.", price: 1250, img: unsplash("1565557623262-b51c2513a641"), emoji: "🍲", tags: [] },
  { id: "daal", cat: "karahi", name: "Daal Mash Fry", desc: "Buttery white lentils finished with a sizzling garlic and cumin tarka.", price: 480, img: unsplash("1546833999-b9f581a1996d"), emoji: "🍲", tags: ["veg"] },

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

export const MENU_BY_ID: Record<string, MenuItem> = Object.fromEntries(MENU.map((m) => [m.id, m]));

export const money = (n: number) => `${SETTINGS.currency} ${n.toLocaleString("en-PK")}`;
