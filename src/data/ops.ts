export const opsTape = [
  { t: "09:44", type: "SOC", text: "SOC-9102 ATO in war room. Wallet freeze recommended. Owner Tunde." },
  { t: "09:40", type: "Pay", text: "Settlement batch ₦182.4m queued — 3 exceptions on NIP desk." },
  { t: "09:28", type: "KYC", text: "Verification queue: 14 pending. Sabon Gari Electronics still Tier 1." },
  { t: "09:20", type: "Log", text: "KH-2026-1842 rider assigned. SLA clock 54 min average holding." },
  { t: "09:12", type: "Shop", text: "214 merchants activated this morning. Nassarawa + Gwale lead." },
  { t: "08:55", type: "Ticket", text: "KH-T-441 payout delay — Aisha Fashion House. Priority high." },
  { t: "08:40", type: "Credit", text: "LA-4388 approved at partner desk. Disbursement file pending." },
  { t: "08:11", type: "Audit", text: "Halima approved verification Aisha Fashion House. Hash written." },
];

export const health = [
  { svc: "API", status: "Healthy", p95: "42ms" },
  { svc: "Checkout", status: "Healthy", p95: "210ms" },
  { svc: "Partner webhook", status: "Degraded", p95: "910ms" },
  { svc: "Search", status: "Healthy", p95: "38ms" },
  { svc: "Notifications", status: "Healthy", p95: "120ms" },
];

export const flags = [
  { key: "sallah_promo", on: true, note: "SALLAH10 live" },
  { key: "hausa_default", on: false, note: "Pilot Nassarawa only" },
  { key: "cod_cap", on: true, note: "₦150k new address" },
  { key: "new_pos_ui", on: true, note: "100% merchants" },
];
