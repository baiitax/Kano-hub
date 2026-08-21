export const riderTape = [
  { t: "09:41", type: "Job", text: "DL-4412 accepted. Pickup Zoo Road — Aisha Fashion House." },
  { t: "09:28", type: "Nav", text: "En route pickup. Traffic light on Zoo Road. ETA 6 min." },
  { t: "09:20", type: "Pay", text: "Fee ₦1,500 credited pending POD." },
  { t: "08:55", type: "Done", text: "DL-4401 delivered Dala. Customer Sani Garba signed." },
  { t: "08:12", type: "Fuel", text: "Logged ₦2,200 petrol. Net today ₦16,300." },
];

export const companyTape = [
  { t: "09:44", type: "SLA", text: "Success 96.8% last 24h. 2 breaches in Fagge — Suleiman Bala delayed 12 min." },
  { t: "09:28", type: "Dispatch", text: "DL-4412 → Abdullahi Musa. Hotoro 6.2 km." },
  { t: "09:10", type: "Fleet", text: "KE-1104 offline 4h. Kabiru Sani pinged." },
  { t: "08:40", type: "COD", text: "COD hold ₦42,000 — photo POD missing on DL-4388." },
  { t: "08:11", type: "Pay", text: "Rider payout batch ₦1.84m queued for 18:00." },
];

export const zones = [
  { lga: "Nassarawa", jobs: 86, sla: "97.2%", riders: 14 },
  { lga: "Fagge", jobs: 74, sla: "94.1%", riders: 11 },
  { lga: "Tarauni", jobs: 61, sla: "98.0%", riders: 9 },
  { lga: "Dala", jobs: 28, sla: "95.4%", riders: 6 },
];

export const incidents = [
  { id: "IN-12", type: "Failed delivery", job: "DL-4388", rider: "Suleiman Bala", status: "Open" },
  { id: "IN-09", type: "COD mismatch", job: "DL-4290", rider: "Amina Yusuf", status: "Investigating" },
  { id: "IN-04", type: "Accident (minor)", job: "DL-4102", rider: "Kabiru Sani", status: "Closed" },
];

export const riderPayouts = [
  { id: "RP-21", when: "20 Aug", gross: 21400, fuel: 3200, net: 18200, status: "Paid" },
  { id: "RP-20", when: "19 Aug", gross: 19800, fuel: 2800, net: 17000, status: "Paid" },
  { id: "RP-19", when: "18 Aug", gross: 17600, fuel: 2500, net: 15100, status: "Paid" },
];
