export const monthly = [
  { m: "Mar", gmv: 0.28, merchants: 4200, customers: 9800, orders: 14200, take: 4.1 },
  { m: "Apr", gmv: 0.41, merchants: 5100, customers: 14100, orders: 19800, take: 6.2 },
  { m: "May", gmv: 0.58, merchants: 6400, customers: 19200, orders: 26400, take: 9.4 },
  { m: "Jun", gmv: 0.79, merchants: 7800, customers: 26800, orders: 34100, take: 13.1 },
  { m: "Jul", gmv: 1.12, merchants: 9400, customers: 36100, orders: 48200, take: 18.6 },
  { m: "Aug", gmv: 1.54, merchants: 12840, customers: 54230, orders: 61200, take: 24.8 },
];

export const sectors = [
  { name: "Fashion & apparel", gmv: 1.42, merchants: 2840, growth: 22 },
  { name: "Electronics & phones", gmv: 1.18, merchants: 1620, growth: 14 },
  { name: "Food & groceries", gmv: 0.86, merchants: 2210, growth: 31 },
  { name: "Beauty", gmv: 0.41, merchants: 980, growth: 27 },
  { name: "Spare parts", gmv: 0.38, merchants: 740, growth: 11 },
  { name: "Pharmacy", gmv: 0.22, merchants: 310, growth: 9 },
  { name: "Services", gmv: 0.19, merchants: 890, growth: 18 },
  { name: "Other", gmv: 0.16, merchants: 1250, growth: 8 },
];

export const execActivity = [
  { t: "09:41", type: "GMV", text: "Intraday GMV crossed ₦186m — Friday peak running 12% ahead of last week." },
  { t: "09:18", type: "Merchant", text: "214 merchants activated this morning. Nassarawa + Gwale leading." },
  { t: "08:55", type: "Credit", text: "Partner desk approved LA-4388 Kano Fresh Foods ₦500,000 (illustrative)." },
  { t: "08:40", type: "Logistics", text: "Delivery success 96.8% last 24h. 2 SLA breaches in Fagge flagged to Kano Express." },
  { t: "08:12", type: "Risk", text: "SOC contained SOC-9102 ATO attempt. Wallet freeze 30 min. No loss." },
  { t: "07:50", type: "People", text: "Jobs-supported counter +86 (riders + stall assistants, modelled)." },
  { t: "Yesterday", type: "Board", text: "Q3 pack circulated: take rate 1.82%, contribution 41.6%, payback 4.1 months." },
  { t: "Yesterday", type: "Government", text: "LGA brief requested by Kano Ministry of Commerce — Tarauni & Municipal slides ready." },
];

export const cohorts = [
  { month: "Mar", m1: 100, m2: 71, m3: 64, m4: 58 },
  { month: "Apr", m1: 100, m2: 74, m3: 66, m4: 61 },
  { month: "May", m1: 100, m2: 76, m3: 68, m4: 63 },
  { month: "Jun", m1: 100, m2: 78, m3: 70, m4: 0 },
  { month: "Jul", m1: 100, m2: 80, m3: 0, m4: 0 },
];

export const unitEcon = [
  { k: "Take rate", v: "1.82%", n: "Marketplace + POS acquiring share (partners)" },
  { k: "Contribution margin", v: "41.6%", n: "After payment, cloud, support" },
  { k: "CAC (merchant)", v: "₦1,240", n: "Field + digital, last 90 days" },
  { k: "Payback", v: "4.1 mo", n: "Gross profit / CAC" },
  { k: "ARPU merchant", v: "₦18,400", n: "Monthly platform revenue / active" },
  { k: "AOV", v: "₦18,400", n: "Orders blended" },
  { k: "Order frequency", v: "3.2 / mo", n: "Active customers" },
  { k: "Merchant retention M3", v: "68%", n: "May cohort" },
];

export const boardDecisions = [
  { id: "BD-14", title: "Northern corridor expansion", status: "In review", owner: "CEO", due: "15 Sep 2026" },
  { id: "BD-13", title: "Partner MFB term sheet", status: "Approved", owner: "CFO", due: "01 Sep 2026" },
  { id: "BD-12", title: "Rider insurance pilot", status: "Open", owner: "COO", due: "30 Sep 2026" },
  { id: "BD-11", title: "Hausa-first app localisation", status: "In delivery", owner: "CPO", due: "12 Oct 2026" },
];

export const risks = [
  { id: "ER-1", title: "Regulatory perimeter", sev: "High", note: "Must not imply banking/lending licence. Partner contracts required." },
  { id: "ER-2", title: "Concentration — Fagge electronics", sev: "Med", note: "22% GMV. Diversify food & fashion onboarding." },
  { id: "ER-3", title: "Cash collection in informal trade", sev: "Med", note: "COD + transfer mix; reconciliation lag T+1." },
  { id: "ER-4", title: "SOC ATO attempts", sev: "Med", note: "Contained. Step-up OTP live." },
];
