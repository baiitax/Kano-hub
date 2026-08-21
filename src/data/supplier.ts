export type MillSku = {
  id: string;
  sku: string;
  name: string;
  category: string;
  unit: string;
  moq: number;
  bale?: number;
  wholesale: number;
  retailHint: number;
  stock: number;
  reorder: number;
  mill: string;
  millId: string;
  cluster: string;
  image: string;
  leadDays: number;
};

export type WholesalePo = {
  id: string;
  buyer: string;
  shop: string;
  lga: string;
  items: { sku: string; name: string; qty: number; unit: string; price: number }[];
  amount: number;
  status: string;
  credit: "Cash" | "7 days" | "14 days" | "21 days" | "30 days";
  date: string;
  slot: string;
  mill: string;
};

export const mills = [
  {
    id: "s1",
    slug: "kano-textile-mills",
    name: "Kano Textile Mills",
    category: "Fabric · Kantin Kwari supply",
    contact: "0805 331 0091",
    email: "mill@kanohub.ng",
    location: "Sharada Industrial Estate",
    lga: "Kumbotso",
    cluster: "Kantin Kwari",
    rating: 4.7,
    moq: "20 yards / 1 bale",
    verified: true,
    lead: "Same day–48h",
    creditDays: 14,
    gmv30: 18420000,
    skus: 214,
    buyers: 86,
    outstanding: 1240000,
    description:
      "Mill-gate wax print, guinea brocade and lining for Kantin Kwari and Nassarawa fashion houses. Bale and yard pricing.",
  },
  {
    id: "s2",
    slug: "northern-footwear",
    name: "Northern Footwear Dist.",
    category: "Footwear",
    contact: "0816 442 7780",
    email: "shoes@kanohub.ng",
    location: "France Road, Sabon Gari",
    lga: "Fagge",
    cluster: "Sabon Gari",
    rating: 4.5,
    moq: "12 pairs",
    verified: true,
    lead: "24h",
    creditDays: 7,
    gmv30: 6400000,
    skus: 88,
    buyers: 41,
    outstanding: 0,
    description: "Court sneakers, slippers and school shoes for Fagge and Zoo Road retailers.",
  },
  {
    id: "s3",
    slug: "arewa-wholesale-foods",
    name: "Arewa Wholesale Foods",
    category: "Grains & staples",
    contact: "0708 119 3344",
    email: "grains@kanohub.ng",
    location: "Dawanau grain corridor",
    lga: "Dawakin Tofa",
    cluster: "Dawanau",
    rating: 4.4,
    moq: "5 bags / 5 cartons",
    verified: true,
    lead: "Same day",
    creditDays: 7,
    gmv30: 22100000,
    skus: 62,
    buyers: 120,
    outstanding: 890000,
    description: "Rice, noodles, oil and beans for restaurants and neighbourhood shops. Sack units.",
  },
  {
    id: "s4",
    slug: "sharada-power-parts",
    name: "Sharada Power Parts",
    category: "Inverters & gensets",
    contact: "0809 441 2201",
    email: "power@kanohub.ng",
    location: "Sharada Phase II",
    lga: "Kumbotso",
    cluster: "Sharada",
    rating: 4.6,
    moq: "2 units",
    verified: true,
    lead: "2–5 days",
    creditDays: 21,
    gmv30: 9800000,
    skus: 34,
    buyers: 22,
    outstanding: 410000,
    description: "Inverter kits and 2.5kVA generators for Sabon Gari electronics traders.",
  },
];

export const millSkus: MillSku[] = [
  {
    id: "w1",
    sku: "KTM-ANK-6Y",
    name: "Ankara wax 6-yard (assorted)",
    category: "Fabric",
    unit: "bundle",
    moq: 10,
    bale: 40,
    wholesale: 9200,
    retailHint: 16500,
    stock: 840,
    reorder: 120,
    mill: "Kano Textile Mills",
    millId: "s1",
    cluster: "Kantin Kwari",
    image: "ankara",
    leadDays: 1,
  },
  {
    id: "w2",
    sku: "KTM-GBR-12",
    name: "Guinea brocade 12 yards",
    category: "Fabric",
    unit: "piece",
    moq: 5,
    wholesale: 28500,
    retailHint: 48000,
    stock: 126,
    reorder: 24,
    mill: "Kano Textile Mills",
    millId: "s1",
    cluster: "Kantin Kwari",
    image: "kaftan",
    leadDays: 2,
  },
  {
    id: "w3",
    sku: "KTM-LIN-50",
    name: "Cotton lining roll 50 yards",
    category: "Fabric",
    unit: "roll",
    moq: 4,
    wholesale: 14500,
    retailHint: 24000,
    stock: 38,
    reorder: 12,
    mill: "Kano Textile Mills",
    millId: "s1",
    cluster: "Kantin Kwari",
    image: "abaya",
    leadDays: 1,
  },
  {
    id: "w4",
    sku: "KTM-EMB-GOLD",
    name: "Gold embroidery thread carton",
    category: "Notions",
    unit: "carton",
    moq: 2,
    wholesale: 18000,
    retailHint: 28000,
    stock: 54,
    reorder: 10,
    mill: "Kano Textile Mills",
    millId: "s1",
    cluster: "Kantin Kwari",
    image: "kaftan",
    leadDays: 3,
  },
  {
    id: "w5",
    sku: "NFD-SNK-WHT",
    name: "White court sneakers (dozen)",
    category: "Footwear",
    unit: "dozen",
    moq: 1,
    wholesale: 168000,
    retailHint: 28500,
    stock: 22,
    reorder: 6,
    mill: "Northern Footwear Dist.",
    millId: "s2",
    cluster: "Sabon Gari",
    image: "sneakers",
    leadDays: 1,
  },
  {
    id: "w6",
    sku: "AWF-RIC-50",
    name: "Caprice 50kg rice (bag)",
    category: "Grains",
    unit: "bag",
    moq: 5,
    wholesale: 64000,
    retailHint: 78000,
    stock: 410,
    reorder: 80,
    mill: "Arewa Wholesale Foods",
    millId: "s3",
    cluster: "Dawanau",
    image: "rice",
    leadDays: 0,
  },
  {
    id: "w7",
    sku: "AWF-IND-40",
    name: "Indomie chicken carton (40)",
    category: "Staples",
    unit: "carton",
    moq: 10,
    wholesale: 15200,
    retailHint: 18500,
    stock: 96,
    reorder: 40,
    mill: "Arewa Wholesale Foods",
    millId: "s3",
    cluster: "Dawanau",
    image: "noodles",
    leadDays: 0,
  },
  {
    id: "w8",
    sku: "SPP-INV-15",
    name: "1.5kVA inverter + 200Ah (pair)",
    category: "Power",
    unit: "kit",
    moq: 2,
    wholesale: 310000,
    retailHint: 425000,
    stock: 14,
    reorder: 4,
    mill: "Sharada Power Parts",
    millId: "s4",
    cluster: "Sharada",
    image: "inverter",
    leadDays: 4,
  },
];

export const millPos: WholesalePo[] = [
  {
    id: "PO-8821",
    buyer: "Aisha Abdullahi",
    shop: "Aisha Fashion House",
    lga: "Nassarawa",
    items: [
      { sku: "KTM-ANK-6Y", name: "Ankara 6-yard", qty: 40, unit: "bundle", price: 9200 },
      { sku: "KTM-LIN-50", name: "Lining roll", qty: 4, unit: "roll", price: 14500 },
    ],
    amount: 426000,
    status: "Pending confirmation",
    credit: "14 days",
    date: "21 Aug 2026, 08:40",
    slot: "Today 16:00 · Zoo Road",
    mill: "Kano Textile Mills",
  },
  {
    id: "PO-8814",
    buyer: "Zainab Lawal",
    shop: "Arewa Beauty Store",
    lga: "Gwale",
    items: [{ sku: "KTM-EMB-GOLD", name: "Embroidery thread", qty: 3, unit: "carton", price: 18000 }],
    amount: 54000,
    status: "Picking",
    credit: "Cash",
    date: "21 Aug 2026, 07:15",
    slot: "Today 12:00 · Gyadi-Gyadi",
    mill: "Kano Textile Mills",
  },
  {
    id: "PO-8802",
    buyer: "Fatima Sani",
    shop: "Kano Fresh Foods",
    lga: "Tarauni",
    items: [{ sku: "AWF-RIC-50", name: "Caprice 50kg", qty: 12, unit: "bag", price: 64000 }],
    amount: 768000,
    status: "Out for delivery",
    credit: "7 days",
    date: "20 Aug 2026, 18:02",
    slot: "Hotoro GRA",
    mill: "Arewa Wholesale Foods",
  },
  {
    id: "PO-8788",
    buyer: "Musa Baita",
    shop: "Baita Electronics",
    lga: "Fagge",
    items: [{ sku: "SPP-INV-15", name: "1.5kVA kit", qty: 2, unit: "kit", price: 310000 }],
    amount: 620000,
    status: "Delivered",
    credit: "21 days",
    date: "18 Aug 2026",
    slot: "Sabon Gari",
    mill: "Sharada Power Parts",
  },
  {
    id: "PO-8771",
    buyer: "Umar Faruk",
    shop: "Kwari Stall 214",
    lga: "Kano Municipal",
    items: [{ sku: "KTM-GBR-12", name: "Guinea brocade", qty: 8, unit: "piece", price: 28500 }],
    amount: 228000,
    status: "Invoiced",
    credit: "14 days",
    date: "17 Aug 2026",
    slot: "Kantin Kwari gate",
    mill: "Kano Textile Mills",
  },
  {
    id: "PO-8750",
    buyer: "Aisha Abdullahi",
    shop: "Aisha Fashion House",
    lga: "Nassarawa",
    items: [{ sku: "NFD-SNK-WHT", name: "White sneakers dozen", qty: 2, unit: "dozen", price: 168000 }],
    amount: 336000,
    status: "Settled",
    credit: "Cash",
    date: "09 Aug 2026",
    slot: "Zoo Road",
    mill: "Northern Footwear Dist.",
  },
];

export const millQuotes = [
  { id: "QT-441", shop: "Aisha Fashion House", sku: "Guinea brocade 200 pcs", amount: 5200000, status: "Open", expires: "28 Aug 2026" },
  { id: "QT-438", shop: "Kwari Stall 88", sku: "Ankara 200 bundles", amount: 1840000, status: "Sent", expires: "25 Aug 2026" },
  { id: "QT-430", shop: "Arewa Beauty", sku: "Thread 20 cartons", amount: 360000, status: "Accepted", expires: "22 Aug 2026" },
];

export const millBuyers = [
  { id: "b1", name: "Aisha Fashion House", lga: "Nassarawa", orders: 18, spend: 2140000, creditLimit: 500000, used: 85000, terms: "14 days", risk: "Watch", last: "21 Aug" },
  { id: "b5", name: "Arewa Beauty Store", lga: "Gwale", orders: 6, spend: 410000, creditLimit: 150000, used: 0, terms: "Cash", risk: "Good", last: "21 Aug" },
  { id: "stall", name: "Kwari Stall 214", lga: "Kano Municipal", orders: 11, spend: 980000, creditLimit: 300000, used: 228000, terms: "14 days", risk: "Good", last: "17 Aug" },
  { id: "b3", name: "Kano Fresh Foods", lga: "Tarauni", orders: 9, spend: 1880000, creditLimit: 800000, used: 768000, terms: "7 days", risk: "Good", last: "20 Aug" },
  { id: "b2", name: "Baita Electronics", lga: "Fagge", orders: 4, spend: 1240000, creditLimit: 1000000, used: 410000, terms: "21 days", risk: "Watch", last: "18 Aug" },
];

export const millTape = [
  { t: "08:41", type: "PO", text: "PO-8821 from Aisha Fashion House — 40 Ankara + 4 lining · ₦426,000 · 14-day terms." },
  { t: "08:12", type: "Stock", text: "Lining rolls below reorder (38 vs 12 min). Suggest mill shift tonight." },
  { t: "07:16", type: "Pick", text: "Warehouse bay 2 started PO-8814 thread cartons for Gyadi-Gyadi." },
  { t: "06:50", type: "Credit", text: "Kwari Stall 214 utilisation 76% of ₦300k limit." },
  { t: "Yest", type: "Delivery", text: "12 bags Caprice left Dawanau for Hotoro GRA — rider pool Kano Express." },
  { t: "Yest", type: "Quote", text: "QT-441 guinea brocade 200 pcs sent to Aisha — expires 28 Aug." },
  { t: "19 Aug", type: "Settle", text: "Partner wallet credited ₦1.84m mill GMV (illustrative, licensed partners)." },
];

export const millSlots = [
  { id: "sl1", window: "Today 10:00–12:00", zone: "Kantin Kwari gate", capacity: "8 vans", booked: 6 },
  { id: "sl2", window: "Today 14:00–16:00", zone: "Zoo Road / Nassarawa", capacity: "6 vans", booked: 4 },
  { id: "sl3", window: "Today 16:00–18:00", zone: "Gyadi-Gyadi / Gwale", capacity: "4 vans", booked: 2 },
  { id: "sl4", window: "Tomorrow 08:00–11:00", zone: "Dawanau → metro", capacity: "10 trucks", booked: 3 },
];

export const millInvoices = [
  { id: "MINV-2201", shop: "Aisha Fashion House", amount: 426000, status: "Draft", due: "04 Sep 2026" },
  { id: "MINV-2194", shop: "Kwari Stall 214", amount: 228000, status: "Overdue", due: "14 Aug 2026" },
  { id: "MINV-2188", shop: "Arewa Beauty Store", amount: 54000, status: "Paid", due: "21 Aug 2026" },
  { id: "MINV-2170", shop: "Baita Electronics", amount: 620000, status: "Open", due: "08 Sep 2026" },
];

export const millStaff = [
  { name: "Hassan Dangote", role: "Mill manager", last: "Now" },
  { name: "Hauwa Sharada", role: "Credit clerk", last: "4 min" },
  { name: "Sani Pickface", role: "Warehouse", last: "Now" },
  { name: "Maryam Dispatch", role: "Slots", last: "11 min" },
];

export const millSeries = [
  { d: "Mon", gmv: 2100000, pos: 11 },
  { d: "Tue", gmv: 1840000, pos: 9 },
  { d: "Wed", gmv: 2610000, pos: 14 },
  { d: "Thu", gmv: 1980000, pos: 10 },
  { d: "Fri", gmv: 3200000, pos: 18 },
  { d: "Sat", gmv: 4100000, pos: 22 },
  { d: "Sun", gmv: 1590000, pos: 7 },
];
