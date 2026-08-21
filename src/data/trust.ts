export const settlementCalendar = [
  { day: "Fri 21 Aug", window: "22:00 WAT T+1", gmv: 428000, fee: 7710, hold: 45500, net: 374790, status: "Queued" },
  { day: "Thu 20 Aug", window: "Posted", gmv: 612000, fee: 11016, hold: 0, net: 600984, status: "Settled" },
  { day: "Wed 19 Aug", window: "Posted", gmv: 390000, fee: 7020, hold: 25000, net: 357980, status: "Partial hold" },
  { day: "Tue 18 Aug", window: "Posted", gmv: 510000, fee: 9180, hold: 0, net: 500820, status: "Settled" },
];

export const exceptions = [
  { id: "EX-12", type: "Dispute hold", ref: "DSP-441", amount: 25000, note: "Arewa Beauty · shade" },
  { id: "EX-09", type: "Split-cart lag", ref: "SPLIT-2026-441", amount: 12500, note: "Beauty leg awaiting pickup" },
];

export const creditPack = {
  score: 742,
  period: "90 days to 21 Aug 2026",
  gmv: 12840000,
  orders: 284,
  returnsPct: 2.1,
  disputes: 1,
  onTimePayout: "97%",
  lga: "Nassarawa",
  cluster: "Kantin Kwari inlet",
  womenOwned: true,
  cashflow: [
    { m: "Jun", gmv: 3.9 },
    { m: "Jul", gmv: 4.1 },
    { m: "Aug", gmv: 4.28 },
  ],
};
