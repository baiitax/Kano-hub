# KanoHub

**Digital Business Infrastructure for Kano**

A production-quality **Next.js prototype** of a complete digital OS for Kano State SMEs: public marketplace, merchant operating system, mill / B2B wholesale, rider + logistics HQ, neighbourhood **agents**, **Kantin Kwari** and other market clusters, association chapter, partner banking & lending desks, SOC, platform admin, executive board, and a **view-only** government / MDA economic desk.

> **Not a licensed bank, lender, payment institution, or insurer.**  
> Payments, wallets, cash-assist, trade credit, settlements and financing screens are **illustrative** and labelled *Powered by participating licensed financial partners*. **Financing is not guaranteed.** Figures are prototype data (₦, Kano LGAs, realistic names) — not live market statistics or official government returns.

---

## What it is

KanoHub is the connective tissue of Kano trade:

```
Mill (Sharada) → B2B wholesale floor → Merchant rumfa / POS
        ↓                                    ↓
   Association (Kwari)              Split-cart customer
        ↓                                    ↓
   Agent cash-assist + KYC          Rider + simulated map
        ↓                                    ↓
Partner settlement / credit-pack    Dispute hold (partner)
        ↓
Bank desk · Loan point · Gov/MDA view · Executive · SOC · Admin
```

Currency is **₦**. Brand lives in `src/config/brand.ts` (`KanoHub` · “Digital Business Infrastructure for Kano”). UI: glassmorphism, Inter / Plus Jakarta, emerald / royal / gold. **EN | HA** language toggle (persisted as `kanohub.lang`).

Maps are **simulated SVG overlays** (stall rows, rider paths). They are not GPS/OSM — the in-app preview has no network.

---

## Stack

| Layer | Choice |
|---|---|
| App | Next.js **14.2** App Router, React 18, TypeScript |
| Style | Tailwind CSS, Lucide icons |
| Charts | Recharts |
| State | Client `AppProvider` (`src/lib/store.tsx`) · session in `sessionStorage` key `kanohub.session` |
| Auth | Role gate `src/components/auth-gate.tsx` + `requiredRole()` in `src/data/accounts.ts` |
| Data | Centralised mocks under `src/data/` |

Path alias: `@/*` → `./src/*`.

```bash
npm install
npm run dev -- -H 0.0.0.0 -p 3000
```

Open the preview or [http://localhost:3000](http://localhost:3000). Demo Mode (bottom-right) switches roles.

---

## Demo login

**Password for every account: `kano123`**

Prototype OTP: **`482910`**.

| Role | Login | Home |
|---|---|---|
| Customer — Maryam Yusuf | `maryam@kanohub.ng` / `08032201194` | `/marketplace` · hub `/customer` |
| Merchant — Aisha Fashion House | `aisha@kanohub.ng` / `08034412290` | `/merchant` |
| Rider — Abdullahi Musa (KE-4412) | `08064412291` | `/logistics` |
| Supplier — Kano Textile Mills | `mill@kanohub.ng` / `08053310091` | `/supplier` |
| Agent — Sadiya Ibrahim (Kwari) | `agent@kanohub.ng` / `08072201188` | `/agent` |
| Association — Alhaji Musa Kwari | `assoc@kanohub.ng` | `/association` |
| Gov/MDA view — Dr. Amina Commerce | `gov@kanohub.ng` | `/gov` |
| Platform ops — Halima Usman | `ops@kanohub.ng` | `/admin` |
| Bank desk | `bank@kanohub.ng` | `/bank` |
| Loan point | `loans@kanohub.ng` | `/loans` |
| SOC | `soc@kanohub.ng` | `/security` |
| Executive / board | `exec@kanohub.ng` | `/executive` |

Admin may open other desks; other roles cannot. `/settings` and `/notifications` require any signed-in user. `/suppliers` and `/wholesale` are public; mill OS (`/supplier/*`) is supplier-only. Wholesale **cart/checkout** requires merchant.

---

## Roles, portals, and pages

### Public & marketing

Landing (`/`), about, how-it-works, for-merchants / customers / riders / **agents** / partners, pricing, trust, FAQ, contact, press, legal.

### Customer commerce

- Marketplace, search, categories, product gallery (photos in `public/products/`), shops, cart, checkout.
- **Split-cart**: one basket, many shops, ₦1,500 rider **per pickup**. Checkout creates a `SPLIT-…` parent and a **held** leg per merchant (partner escrow language).
- Seed basket **`SPLIT-2026-441`**: Ankara (Aisha Fashion House) + shea (Arewa Beauty).
- Track order: simulated map + rider + hold amount.
- Wallet, loyalty, returns, reviews, **dispute holds** (`/customer/disputes`).

### Merchant OS (`/merchant`)

Dashboard tape, POS (stock + wallet), orders, products, inventory, customers, suppliers, **wholesale POs**, expenses, accounting, tax, invoices, payments, wallet, **settlement calendar** (`/merchant/settlement`), **credit pack** (`/merchant/credit-pack` — 90-day GMV, returns, disputes, score **742** for partner RMs), banking UI, logistics, analytics, financial profile, financing marketplace (prototype offers), marketing, staff, AI assistant, **dispute holds**, reports, loyalty, returns.

### Supplier OS + B2B (`/supplier`, `/wholesale`)

Kano Textile Mills (Sharada) mill command: POs, quotes, catalogue (yards / bales / cartons), mill stock, buyers, **trade credit book** (partner), mill-to-shop map, dispatch slots, invoices, settlements, MOQ, returns, reports, staff.

Public **B2B floor** `/wholesale` — Kantin Kwari, Dawanau, Sabon Gari, Sharada mills. Mill profiles `/suppliers/[id]`.

### Logistics

Rider app (`/logistics`): jobs, queue, earnings, history, vehicle, performance.  
Company HQ (`/logistics/company`): dispatch, fleet, riders, zones, SLA, payouts, incidents, pricing, reports. Simulated live map.

### Markets / clusters (`/markets`)

Stall SVG maps (not GPS): **Kantin Kwari**, **Sabon Gari**, **Dawanau**, **Singer Market**, **Kofar Wambai**, **Sharada**. Open / busy / closed rumfa, GMV, hours, association.

### Agent + cash-assist (`/agent`)

Onboard rumfa (photos, stall ID, OTP), **cash-in / cash-out** via participating partners (float + limit), shops, listing help, field visits on Kwari map, commission, USSD kiosk prototype `*347*KH#`.

### Association (`/association`)

Kantin Kwari Traders Association: members / rumfa, dues, bulk mill deals, training. **Not a regulator.**

### Gov / MDA (`/gov`) — view only

Ministry of Commerce conversation pack: LGA GMV, jobs, women-owned GMV (~41%), programmes, donor brief. **Illustrative — not official statistics.** KanoHub is not a government agency or tax authority.

### Partner finance

- **Bank desk** `/bank` — accounts, ledger, NIP, cards, settlements, exceptions, KYC, treasury, lending, collections, risk, AML, limits, reports.
- **Loan point** `/loans` — pipeline, portfolio, collections, products, officers.

### Trust & ops

- **SOC** `/security` — alerts, cases, identities, devices, sessions, fraud, payment intel, watchlist, IAM, health, audit, playbooks.
- **Admin** `/admin` — merchants, customers, orders, catalog, payments, payouts, logistics, suppliers, partners, financing, verification, disputes, tickets, risk, audit, analytics, Kano economy, marketing, content, flags, staff, announcements, health.
- **Executive** `/executive` — GMV, growth, merchants, customers, unit economics, LGAs, sectors, financing (partners), logistics, jobs, risks, board pack.

Each dashboard has its **own phone dock**. Routes are **role-protected**.

---

## Trust rules (product copy)

- Always: *Illustrative prototype data.*
- Money: *Powered by participating licensed financial partners.*
- Credit: *Financing not guaranteed.* Credit-readiness **742** is an **indicative** platform metric, not a bureau score.
- Dispute hold / split-cart escrow: partner settlement illustration — **KanoHub is not an escrow bank.**
- Cash-assist / agent float: partner rails, not KanoHub deposits.
- Gov desk: not a census, tax return, or official MDA system.

---

## Hausa

Header, marketplace, clusters, and Agent OS use `src/lib/i18n.ts`. Toggle **EN | HA** in the public header, merchant bar, agent desk, Demo Mode, and Settings.

---

## Project layout

```
src/app/           Next.js routes (marketplace, merchant, supplier, agent, …)
src/components/    chrome, docks, shells, maps, stall-map, lang-toggle, auth-gate
src/data/          mock.ts, supplier, markets, agent, association, gov, trust, bank, soc…
src/lib/           store.tsx, i18n.ts
src/config/        brand.ts
public/products/   product photos (not colour blocks)
```

---

## Scripts

| Command | Use |
|---|---|
| `npm run dev -- -H 0.0.0.0 -p 3000` | Dev server (bind all interfaces) |
| `npm run build` | Production build |
| `npm run start` | Serve build |

---

## Disclaimer

© 2026 KanoHub. Prototype for demonstration, investor, government, bank, logistics and SME-association conversations. Payment, banking, cash-assist and financing services, if any, would be provided only through **licensed partners**. KanoHub does not take deposits, issue loans, underwrite insurance, or act as a payment institution.
