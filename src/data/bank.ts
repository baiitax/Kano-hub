export const bankTape = [
  { t: "09:44", type: "NIP", text: "NIP credit ₦85,000 Maryam Yusuf → Aisha Fashion House wallet. Posted." },
  { t: "09:40", type: "SET", text: "Intraday settlement batch ₦182.4m — 1,204 merchants, 3 exceptions." },
  { t: "09:28", type: "KYC", text: "Tier-2 upgrade queued for Sabon Gari Electronics (docs incomplete)." },
  { t: "09:12", type: "CARD", text: "Acquiring auth ₦42,000 Hauwa Bello · Visa · approved." },
  { t: "08:55", type: "LOAN", text: "LA-4388 Kano Fresh Foods approved ₦500,000 — awaiting disbursement file." },
  { t: "08:40", type: "AML", text: "STR draft: 4 credits / 9 min on KH-2026-1798. Routed to compliance." },
  { t: "08:11", type: "NIBSS", text: "T+1 file generated. Hash e7c1… Cut-off 22:00 WAT." },
  { t: "Yesterday", type: "COL", text: "LN-2104 Dala Spare Parts 21 DPD — SMS + field visit logged." },
];

export const nipQueue = [
  { id: "NIP-9921", dir: "In", party: "Maryam Yusuf", amount: 85000, status: "Posted", ref: "KH-2026-1842" },
  { id: "NIP-9918", dir: "Out", party: "Sterling ****4412", amount: 200000, status: "Posted", ref: "WD-170" },
  { id: "NIP-9904", dir: "In", party: "Walk-in POS", amount: 18500, status: "Failed", ref: "POS-timeout" },
  { id: "NIP-9890", dir: "Out", party: "Kano Textile Mills", amount: 420000, status: "Pending", ref: "PO-229" },
];

export const exceptions = [
  { id: "EX-441", type: "Name mismatch", amount: 125000, merchant: "Baita Electronics", age: "2h" },
  { id: "EX-438", type: "Duplicate NIP", amount: 18500, merchant: "Walk-in POS", age: "4h" },
  { id: "EX-401", type: "Unmatched settlement", amount: 9100, merchant: "Arewa Beauty", age: "1d" },
];

export const kycQueue = [
  { merchant: "Sabon Gari Electronics", tier: "1 → 2", gap: "Utility bill", risk: "Med" },
  { merchant: "Dala Spare Parts", tier: "2 → 3", gap: "CAC + BVN", risk: "High" },
  { merchant: "Aisha Fashion House", tier: "2", gap: "None", risk: "Low" },
];

export const nostro = [
  { rail: "NIBSS Instant", bal: 412000000, status: "Open" },
  { rail: "Card scheme (partner)", bal: 88000000, status: "Open" },
  { rail: "Collections pool", bal: 26500000, status: "Open" },
];
