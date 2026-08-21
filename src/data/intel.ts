export const loanPipeline = [
  { id: "LA-4412", merchant: "Aisha Fashion House", product: "Working capital", amount: 750000, score: 742, status: "Under review", lga: "Nassarawa", days: 2 },
  { id: "LA-4401", merchant: "Baita Electronics", product: "Inventory", amount: 2000000, score: 701, status: "Documents requested", lga: "Fagge", days: 5 },
  { id: "LA-4388", merchant: "Kano Fresh Foods", product: "Working capital", amount: 500000, score: 768, status: "Approved", lga: "Tarauni", days: 1 },
  { id: "LA-4370", merchant: "Sultan Gadgets", product: "Asset", amount: 3500000, score: 690, status: "Submitted", lga: "Kano Municipal", days: 0 },
  { id: "LA-4355", merchant: "Arewa Beauty Store", product: "Inventory", amount: 400000, score: 780, status: "Disbursed", lga: "Gwale", days: 12 },
  { id: "LA-4310", merchant: "Sabon Gari Electronics", product: "Working capital", amount: 300000, score: 612, status: "Rejected", lga: "Fagge", days: 8 },
];

export const loanBook = [
  { id: "LN-2291", merchant: "Arewa Beauty Store", principal: 400000, outstanding: 186000, next: "15 Sep 2026", status: "Current", dpd: 0 },
  { id: "LN-2210", merchant: "Nassarawa Foods", principal: 1000000, outstanding: 420000, next: "01 Sep 2026", status: "Current", dpd: 0 },
  { id: "LN-2188", merchant: "Hotoro Pharmacy", principal: 250000, outstanding: 88000, next: "08 Sep 2026", status: "Watch", dpd: 9 },
  { id: "LN-2104", merchant: "Dala Spare Parts", principal: 600000, outstanding: 210000, next: "22 Aug 2026", status: "Arrears", dpd: 21 },
];

export const bankTx = [
  { id: "SET-8821", type: "Merchant settlement", party: "Aisha Fashion House", amount: 428050, status: "Posted", time: "21 Aug 09:40" },
  { id: "SET-8819", type: "Card acquiring", party: "Payment partner", amount: 91200, status: "Posted", time: "21 Aug 09:12" },
  { id: "SET-8810", type: "Loan disbursement", party: "Arewa Beauty Store", amount: -400000, status: "Posted", time: "20 Aug 16:02" },
  { id: "SET-8801", type: "Collection", party: "LN-2291 repayment", amount: 45000, status: "Posted", time: "20 Aug 11:18" },
  { id: "SET-8794", type: "Failed NIP", party: "Walk-in POS", amount: 18500, status: "Failed", time: "20 Aug 10:01" },
];

export const socAlerts = [
  { id: "SOC-9102", sev: "Critical", cat: "Account takeover", entity: "Customer 0803•••1194", detail: "New device + 3 failed PIN then success from Kaduna ASN", time: "4 min ago", status: "Open" },
  { id: "SOC-9098", sev: "High", cat: "Payment anomaly", entity: "Order KH-2026-1798", detail: "Velocity: 4 high-value transfers in 9 minutes", time: "18 min ago", status: "Investigating" },
  { id: "SOC-9081", sev: "High", cat: "Merchant mule", entity: "Sabon Gari Electronics", detail: "Same device linked to 3 businesses", time: "1 hr ago", status: "Watch" },
  { id: "SOC-9066", sev: "Medium", cat: "Promo abuse", entity: "Coupon SALLAH10", detail: "Usage spike 12× baseline", time: "3 hr ago", status: "Contained" },
  { id: "SOC-9040", sev: "Low", cat: "Bot traffic", entity: "Marketplace search", detail: "Scraping pattern on /product", time: "Yesterday", status: "Closed" },
];

export const auditTrail = [
  { who: "Ops · Halima", action: "Approved verification", entity: "Aisha Fashion House", when: "21 Aug 08:11", before: "Pending", after: "Verified" },
  { who: "Risk · Tunde", action: "Flagged device", entity: "IMEI ••4412", when: "21 Aug 07:40", before: "Clean", after: "Watchlist" },
  { who: "Lender desk", action: "Requested documents", entity: "LA-4401", when: "20 Aug 16:22", before: "Under review", after: "Documents requested" },
  { who: "Aisha Abdullahi", action: "Assigned rider", entity: "KH-2026-1842", when: "21 Aug 09:20", before: "Ready", after: "Out for Delivery" },
];

export const watchlist = [
  { id: "WL-12", type: "Device", value: "Android • Chrome • Kano", risk: 86, reason: "Multi-account" },
  { id: "WL-19", type: "Phone", value: "0903 ••• 7788", risk: 71, reason: "Chargeback cluster" },
  { id: "WL-24", type: "Merchant", value: "Unnamed Fagge stall", risk: 64, reason: "Unverified + high GMV" },
];
