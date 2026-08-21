export const shopTape = [
  { t: "09:41", type: "Order", text: "KH-2026-1842 Maryam Yusuf paid ₦85,000 wallet — Men’s Emerald Kaftan." },
  { t: "09:28", type: "Stock", text: "Indomie carton hit 4 units. Reorder level 10. Supplier Arewa Wholesale tagged." },
  { t: "09:20", type: "Logistics", text: "Abdullahi Musa assigned to KH-2026-1842. ETA 18 min Hotoro." },
  { t: "09:14", type: "POS", text: "Walk-in cash ₦28,500 — White Court Sneakers ×1. Inventory −1." },
  { t: "08:55", type: "Chat", text: "Hauwa Bello asked if navy abaya ships today. Reply due." },
  { t: "08:40", type: "Money", text: "Settlement ₦142,000 posted to available wallet." },
  { t: "08:11", type: "Staff", text: "Khadija Usman clocked in as cashier." },
  { t: "Yesterday", type: "Review", text: "Sani Garba left 5★ on sneakers — “Comfortable for market days.”" },
];

export const returns = [
  { id: "RT-104", order: "KH-2026-1831", item: "Sneakers (size issue)", status: "Open", amount: 28500, customer: "Sani Garba" },
  { id: "RT-098", order: "KH-2026-1760", item: "Shea set (unopened)", status: "Refunded", amount: 12500, customer: "Maryam Yusuf" },
];

export const loyalty = [
  { name: "Maryam Yusuf", pts: 4860, tier: "VIP", visits: 12 },
  { name: "Sani Garba", pts: 1980, tier: "Repeat", visits: 7 },
  { name: "Hauwa Bello", pts: 1120, tier: "Rising", visits: 4 },
];

export const shopReviews = [
  { who: "Sani Garba", stars: 5, text: "Embroidery is clean. Delivery same afternoon.", when: "18 Aug" },
  { who: "Hauwa Bello", stars: 4, text: "Colour richer than photo. Would buy again.", when: "02 Aug" },
  { who: "Maryam Yusuf", stars: 5, text: "Shop replied on chat in minutes.", when: "21 Aug" },
];
