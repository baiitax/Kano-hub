export const agentProfile = {
  name: "Sadiya Ibrahim",
  code: "AG-KANO-441",
  phone: "0807 220 1188",
  cluster: "Kantin Kwari + Nassarawa",
  lga: "Kano Municipal",
  shops: 38,
  pendingKyc: 4,
  commissionMtd: 186400,
  cashFloat: 240000,
  partnerLimit: 500000,
};

export const agentShops = [
  { id: "b1", name: "Aisha Fashion House", lga: "Nassarawa", status: "Live", last: "Today", cash: true },
  { id: "stall", name: "Kwari Stall 214", lga: "Municipal", status: "Live", last: "Yesterday", cash: true },
  { id: "new1", name: "Hajiya Lami Rumfa C22", lga: "Municipal", status: "KYC photos", last: "Today", cash: false },
  { id: "new2", name: "Gyadi-Gyadi Provisions", lga: "Gwale", status: "Phone OTP", last: "21 Aug", cash: false },
  { id: "b5", name: "Arewa Beauty Store", lga: "Gwale", status: "Live", last: "18 Aug", cash: true },
];

export const agentCash = [
  { id: "CI-901", type: "Cash-in", party: "Aisha Fashion House", amount: 85000, time: "09:12", status: "Posted" },
  { id: "CO-774", type: "Cash-out", party: "Maryam Yusuf", amount: 25000, time: "09:40", status: "Posted" },
  { id: "CI-902", type: "Cash-in", party: "Kwari Stall 214", amount: 120000, time: "10:05", status: "Pending partner" },
  { id: "CO-775", type: "Cash-out", party: "Abdullahi Musa (rider)", amount: 18500, time: "10:22", status: "Posted" },
];

export const agentVisits = [
  { t: "08:10", text: "Photo of Stall 214 storefront · Kantin Kwari row B." },
  { t: "08:40", text: "Helped Aisha list 6-yard Ankara bundle from mill PO." },
  { t: "09:12", text: "Cash-in ₦85,000 for Aisha — partner wallet (illustrative)." },
  { t: "09:40", text: "Maryam cash-out ₦25,000 at Zoo Road kiosk." },
  { t: "10:05", text: "Kwari Stall 214 cash-in queued — awaiting partner rail." },
];

export const agentLeads = [
  { name: "Mallam Sani — Singer Market", need: "POS + listings", cluster: "singer" },
  { name: "Fatima beans — Dawanau", need: "Sack catalogue", cluster: "dawanau" },
  { name: "Genset row — Sabon Gari", need: "KYC + cash-in", cluster: "sabon" },
];
