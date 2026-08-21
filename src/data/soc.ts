export const socTape = [
  { t: "09:44:12", sev: "CRIT", src: "ATO", text: "SOC-9102 — step-up OTP failed twice after Kaduna ASN hop. Wallet ₦85,000 freeze recommended." },
  { t: "09:41:03", sev: "HIGH", src: "PAY", text: "NIP retry storm on KH-2026-1798. 4 credits in 9m. Rule R-VEL-04 fired." },
  { t: "09:33:51", sev: "INFO", src: "IAM", text: "Halima Usman assumed break-glass on merchant b6. Ticket KH-T-441 linked." },
  { t: "09:28:10", sev: "HIGH", src: "KYC", text: "Device graph: IMEI ••4412 now maps to 3 merchant IDs (Fagge cluster)." },
  { t: "09:12:44", sev: "MED", src: "MKT", text: "SALLAH10 redemptions 12× baseline. Auto-capped at 200/hr." },
  { t: "08:57:02", sev: "LOW", src: "BOT", text: "WAF: 1,842 404s on /product scrape. IP /24 throttled." },
  { t: "08:40:19", sev: "INFO", src: "LOG", text: "Rider KE-4412 location jitter within SLA. No collusion signal." },
  { t: "08:11:00", sev: "INFO", src: "AUD", text: "Verification approved Aisha Fashion House. Hash a91c… written." },
];

export const socCases = [
  { id: "CASE-882", alert: "SOC-9102", title: "Customer ATO — Kaduna ASN", sev: "Critical", owner: "Tunde Ade", status: "War room", opened: "09:40", sla: "25m left" },
  { id: "CASE-879", alert: "SOC-9098", title: "Payment velocity KH-2026-1798", sev: "High", owner: "Amina Bello", status: "Investigating", opened: "09:18", sla: "1h 12m" },
  { id: "CASE-870", alert: "SOC-9081", title: "Multi-merchant device graph", sev: "High", owner: "Tunde Ade", status: "Watch", opened: "08:28", sla: "4h" },
  { id: "CASE-851", alert: "SOC-9066", title: "Coupon farm SALLAH10", sev: "Medium", owner: "Halima Usman", status: "Contained", opened: "06:10", sla: "Met" },
];

export const socRules = [
  { id: "R-ATO-01", name: "New device + PIN fails ≥3 + success", fire: 14, fp: "2.1%", state: "On" },
  { id: "R-VEL-04", name: "Wallet credits ≥4 in 10 minutes", fire: 9, fp: "4.0%", state: "On" },
  { id: "R-DEV-07", name: "Same IMEI ≥2 merchant KYC", fire: 3, fp: "1.2%", state: "On" },
  { id: "R-CPN-02", name: "Coupon >8 uses / hour / user", fire: 22, fp: "6.4%", state: "On" },
  { id: "R-COD-03", name: "COD + new address + >₦150k", fire: 5, fp: "8.1%", state: "Canary" },
  { id: "R-BOT-11", name: "Search QPS > 30 from /24", fire: 41, fp: "0.4%", state: "On" },
];

export const socSessions = [
  { id: "S-1", who: "Maryam Yusuf", ip: "102.89.•••", loc: "Tarauni", device: "Tecno Spark", risk: 12, action: "Allow" },
  { id: "S-2", who: "Aisha Abdullahi", ip: "41.190.•••", loc: "Nassarawa", device: "iPhone 13", risk: 8, action: "Allow" },
  { id: "S-3", who: "Unknown", ip: "197.210.•••", loc: "Kaduna ASN", device: "Emulator", risk: 94, action: "Step-up" },
  { id: "S-4", who: "Umar Faruk", ip: "105.112.•••", loc: "Ungogo", device: "Infinix", risk: 41, action: "Monitor" },
  { id: "S-5", who: "Ops Halima", ip: "102.89.•••", loc: "Municipal", device: "Mac · Chrome", risk: 5, action: "Allow" },
];

export const socHealth = [
  { svc: "API gateway", status: "Healthy", lat: "42ms", err: "0.04%" },
  { svc: "Wallet ledger", status: "Healthy", lat: "18ms", err: "0.01%" },
  { svc: "Payment partner webhook", status: "Degraded", lat: "910ms", err: "1.8%" },
  { svc: "KYC vendor", status: "Healthy", lat: "1.2s", err: "0.3%" },
  { svc: "WAF", status: "Healthy", lat: "6ms", err: "0.00%" },
];

export const accessRoles = [
  { who: "Halima Usman", role: "Ops admin", last: "Now", mfa: "On" },
  { who: "Tunde Ade", role: "SOC lead", last: "4 min", mfa: "On" },
  { who: "Amina Bello", role: "Analyst L2", last: "18 min", mfa: "On" },
  { who: "Ibrahim Credit", role: "Bank desk (partner)", last: "1 hr", mfa: "On" },
];
