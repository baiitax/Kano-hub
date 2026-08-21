"use client";

import Link from "next/link";
import { brand } from "@/config/brand";
import { Footer, ProductThumb, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card } from "@/components/ui";
import { businesses, naira, platformKpis, products, revenueSeries } from "@/data/mock";
import { clusters } from "@/data/markets";
import {
  Boxes,
  Truck,
  BarChart3,
  Landmark,
  CheckCircle2,
  Shield,
  ArrowRight,
  ShoppingBag,
  Building2,
  BadgeCheck,
  MapPin,
  LayoutDashboard,
  Bike,
  Factory,
  Handshake,
  Scale,
} from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import type { LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; title: string; desc: string; href: string; audience: string }[] = [
  { icon: ShoppingBag, title: "Public Marketplace", desc: "Verified Kano shops, split-cart, same-day metro delivery.", href: "/marketplace", audience: "Customers" },
  { icon: LayoutDashboard, title: "Merchant OS", desc: "POS, stock, books, staff, settlement calendar, credit-pack.", href: "/merchant", audience: "Merchants" },
  { icon: Factory, title: "Supplier OS", desc: "Mill POs, bales, slots, trade-credit book.", href: "/supplier", audience: "Mills" },
  { icon: Boxes, title: "B2B wholesale floor", desc: "MOQ restock from Kwari, Dawanau, Sabon Gari, Sharada.", href: "/wholesale", audience: "B2B" },
  { icon: MapPin, title: "Market clusters", desc: "Stall maps of Kantin Kwari and five sister floors.", href: "/markets", audience: "Kano" },
  { icon: Handshake, title: "Agent + cash-assist", desc: "Onboard rumfa, partner cash-in/out, USSD kiosk.", href: "/agent", audience: "Agents" },
  { icon: Bike, title: "Rider + fleet HQ", desc: "Jobs, SLA, payouts, simulated live map.", href: "/logistics", audience: "Logistics" },
  { icon: Landmark, title: "Partner bank & loans", desc: "NIP, settlements, pipeline — licensed partners only.", href: "/bank", audience: "Finance" },
  { icon: Building2, title: "Association chapter", desc: "Kwari members, dues, mill pools, training.", href: "/association", audience: "Clusters" },
  { icon: Scale, title: "Gov / MDA desk", desc: "View-only LGA GMV for state and donors.", href: "/gov", audience: "Government" },
  { icon: Shield, title: "SOC + admin", desc: "Fraud, IAM, disputes, platform health.", href: "/security", audience: "Trust" },
  { icon: BarChart3, title: "Executive pack", desc: "GMV, jobs, unit economics for the board.", href: "/executive", audience: "Investors" },
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      <PublicHeader />

      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge tone="gold">Kano State · Digital Business Infrastructure</Badge>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-emerald-950 md:text-5xl">{brand.tagline}</h1>
            <p className="mt-4 max-w-xl text-lg text-slate-700">
              One operating system from <strong>Sharada mill gate</strong> to <strong>Kantin Kwari rumfa</strong> to a Hotoro
              doorstep. Sell online, run POS and books, restock in bales, collect through licensed partners, and show a
              bank RM a 90-day credit pack — without pretending KanoHub is a bank.
            </p>
            <p className="mt-3 text-sm font-semibold text-emerald-800">
              Sell · Manage · Collect · Deliver · Understand · Grow · Request financing (partners)
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
              <li>✓ Built for informal and formal Kano SMEs — Hausa toggle, agent kiosks, USSD prototype.</li>
              <li>✓ Split-cart across shops with partner hold until delivery or dispute release.</li>
              <li>✓ Illustrative prototype — financing not guaranteed.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/register" size="lg">
                Create your business
              </Button>
              <Button href="/marketplace" size="lg" variant="outline">
                Shop Kano
              </Button>
              <Button href="/how-it-works" size="lg" variant="ghost">
                How the OS works
              </Button>
            </div>
          </div>
          <Card className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="font-semibold">Aisha Fashion House</p>
                <p className="text-xs text-slate-500">Nassarawa · Kantin Kwari inlet · Verified</p>
              </div>
              <Badge tone="green">Credit-readiness 742</Badge>
            </div>
            <p className="text-3xl font-bold">{naira(4280500)}</p>
            <p className="text-xs text-slate-500">30-day sales · prototype, not live GMV</p>
            <div className="mt-3 h-28">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueSeries}>
                  <Area type="monotone" dataKey="revenue" stroke="#047857" fill="#04785733" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-lg bg-white/50 p-2">
                <p className="font-bold">284</p>
                Orders
              </div>
              <div className="rounded-lg bg-white/50 p-2">
                <p className="font-bold">T+1</p>
                Partner settle
              </div>
              <div className="rounded-lg bg-white/50 p-2">
                <p className="font-bold">14d</p>
                Mill terms*
              </div>
            </div>
            <p className="mt-3 text-[11px] text-slate-500">*Trade credit is a request to licensed partners — not a KanoHub loan.</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <p className="text-xs font-semibold uppercase text-amber-800">Illustrative prototype data</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [CheckCircle2, "Verified businesses", platformKpis.merchants.toLocaleString()],
            [Shield, "Partner-rail GMV (proto)", `₦${platformKpis.gmv}B`],
            [Truck, "Delivery legs", platformKpis.deliveries.toLocaleString()],
            [BarChart3, "Jobs supported", platformKpis.jobs.toLocaleString()],
          ].map(([I, t, v]) => (
            <Card key={t as string} className="flex items-center gap-3 p-5">
              <I className="h-6 w-6 text-emerald-700" />
              <div>
                <p className="text-xs text-slate-500">{t as string}</p>
                <p className="font-bold">{v as string}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-3xl font-bold text-emerald-950">Why Kano needs an OS, not another storefront</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Kantin Kwari still moves fabric in bales. Dawanau still prices rice by the sack. Sabon Gari still cashes notes
          at the stall. Generic marketplaces ignore mill MOQs, association dues, agent onboarding and the partner bank
          that actually settles ₦. KanoHub is the infrastructure layer: commerce + ops + logistics + a
          <em> credit-readiness file</em> a relationship manager can open.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["The stall", "Aisha runs POS, stock and a mill PO in one tape. Weekend sales hit Friday’s settlement calendar."],
            ["The mill", "Hassan at Sharada confirms Ankara bales, books a Zoo Road van slot, invoices 14-day partner terms."],
            ["The corridor", "Maryam pays once for Fashion House + Arewa Beauty. Funds sit on partner hold until each rider marks delivered."],
          ].map(([h, b]) => (
            <Card key={h} className="p-5">
              <p className="font-bold text-emerald-900">{h}</p>
              <p className="mt-2 text-sm text-slate-600">{b}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6">
        <h2 className="text-2xl font-bold">Mill → rumfa → doorstep</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-5">
          {[
            ["1. Mill", "Supplier OS · Sharada", "/supplier"],
            ["2. B2B floor", "Bales, bags, MOQ", "/wholesale"],
            ["3. Shop OS", "POS + books", "/merchant"],
            ["4. Split cart", "Hold per shop", "/cart"],
            ["5. Rider", "Simulated map", "/logistics"],
          ].map(([n, d, h]) => (
            <Link key={n} href={h}>
              <Card className="h-full p-4 hover:-translate-y-0.5">
                <p className="text-sm font-bold text-emerald-800">{n}</p>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-800">The stack</p>
            <h2 className="text-3xl font-bold text-emerald-950">Every desk in one prototype</h2>
            <p className="mt-1 text-slate-600">Investor, bank RM, association and MDA can click through real screens — not slides.</p>
          </div>
          <Badge tone="gold">Illustrative prototype</Badge>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.title + s.href} href={s.href}>
              <Card className="h-full p-5 transition hover:-translate-y-0.5 hover:bg-white/70">
                <div className="flex items-start justify-between">
                  <s.icon className="h-6 w-6 text-emerald-700" />
                  <span className="rounded-full bg-emerald-700/10 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-800">{s.audience}</span>
                </div>
                <p className="mt-3 font-semibold text-slate-900">{s.title}</p>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                <p className="mt-3 text-xs font-semibold text-emerald-800">
                  Open <ArrowRight className="inline h-3 w-3" />
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold">Six market clusters, stall-level</h2>
            <p className="text-sm text-slate-600">Simulated rumfa maps — not GPS. Open Kantin Kwari, Dawanau, Sabon Gari…</p>
          </div>
          <Link href="/markets" className="text-sm font-semibold text-emerald-800">
            All clusters →
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clusters.slice(0, 6).map((c) => (
            <Link key={c.id} href={`/markets/${c.slug}`}>
              <Card className="p-4 hover:-translate-y-0.5">
                <p className="font-bold">{c.name}</p>
                <p className="text-xs text-slate-500">
                  {c.lga} · {c.specialty}
                </p>
                <p className="mt-2 text-sm text-slate-600">{c.blurb}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="text-2xl font-bold">Who it is for</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["/for-merchants", "Merchants", "One OS for Zoo Road fashion houses and Gyadi-Gyadi beauty stores: POS that reduces stock, T+1 partner settlement, mill restock, dispute holds."],
            ["/for-customers", "Customers", "Shop several rumfa in one pay. Track Abdullahi on a simulated map. Open a hold if the shade is wrong."],
            ["/for-riders", "Riders & fleets", "Accept jobs, SLA clocks, HQ dispatch, payouts via partners."],
            ["/for-agents", "Agents", "Sadiya walks Kwari with a phone: photos, OTP, cash-assist on licensed rails, USSD for feature phones."],
            ["/association", "Associations", "Chapter dues, mill pool deals, training — not a regulator."],
            ["/for-partners", "Banks, MDA, donors", "Credit-pack 742, NIP desk, view-only LGA GMV. You underwrite. We do not."],
          ].map(([h, t, b]) => (
            <Link key={h} href={h}>
              <Card className="h-full p-5 hover:-translate-y-0.5">
                <p className="font-bold">{t}</p>
                <p className="mt-2 text-sm text-slate-600">{b}</p>
                <p className="mt-3 text-xs font-semibold text-emerald-800">Learn more →</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <Card className="glass-dark p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold">What a partner bank actually needs to see</h2>
          <p className="mt-4 max-w-3xl text-emerald-50">
            Not a pitch deck. A 90-day pack: GMV, returns, dispute rate, on-time payouts, mill POs, women-owned flag,
            LGA. Aisha’s illustrative score is <strong>742</strong>. Eligible shops may receive offers from participating
            licensed financial partners. <strong>Financing is not guaranteed.</strong> KanoHub is not a lender, deposit-taker
            or payment institution.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/merchant/credit-pack" className="bg-white text-emerald-900 hover:bg-emerald-50">
              Open credit pack
            </Button>
            <Button href="/merchant/settlement" variant="outline" className="border-white/40 text-white">
              Settlement calendar
            </Button>
            <Button href="/bank" variant="outline" className="border-white/40 text-white">
              Bank desk
            </Button>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Shops on the floor</h2>
          <Link href="/marketplace" className="text-sm font-semibold text-emerald-700">
            Marketplace
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((b) => (
            <Link key={b.id} href={`/shop/${b.slug}`}>
              <Card className="p-4">
                <div className="flex justify-between">
                  <p className="font-semibold">{b.name}</p>
                  {b.verified && <Badge tone="green">Verified</Badge>}
                </div>
                <p className="text-xs text-slate-500">
                  {b.category} · {b.lga} · {b.rating}★
                </p>
                <p className="mt-2 text-sm text-slate-600">{b.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Goods moving this week</h2>
          <Link href="/marketplace" className="text-sm font-semibold text-emerald-700">
            See all <ArrowRight className="inline h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((p) => (
            <Link key={p.id} href={`/product/${p.id}`}>
              <Card className="overflow-hidden">
                <ProductThumb kind={p.image} className="h-36 rounded-none" />
                <div className="p-4">
                  <p className="text-xs text-slate-500">{p.merchantName}</p>
                  <p className="font-semibold">{p.name}</p>
                  <p className="mt-1 font-bold text-emerald-800">{naira(p.price)}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="text-2xl font-bold">Trust, in writing</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            [Shield, "Partner rails", "Wallets, NIP, cash-assist and T+1 payouts are labelled as participating licensed financial partners."],
            [Scale, "No licence theatre", "We do not claim to be a bank, MFB, PSP or insurer. Credit-readiness is indicative."],
            [BadgeCheck, "Dispute hold", "Split-cart funds stay on hold until delivery or a buyer–merchant–rider case is released."],
          ].map(([I, h, b]) => (
            <Card key={h as string} className="p-5">
              <I className="h-5 w-5 text-emerald-800" />
              <p className="mt-2 font-bold">{h as string}</p>
              <p className="mt-1 text-sm text-slate-600">{b as string}</p>
            </Card>
          ))}
        </div>
        <Button href="/trust" variant="outline" className="mt-4" size="sm">
          Trust & safety
        </Button>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="text-2xl font-bold">What operators said (illustrative)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Aisha Abdullahi", "Fashion · Nassarawa", "POS and online stock finally match. Friday’s tape is Saturday’s mill PO."],
            ["Maryam Yusuf", "Customer · Tarauni", "One pay for two shops. Watched Abdullahi on the map to Hotoro."],
            ["Sadiya Ibrahim", "Agent · Kwari", "I photograph Stall 214, cash-in ₦85k on the partner rail, list Ankara before zuhur."],
            ["Alhaji Musa Kwari", "Association", "Dues and a 200-bale mill pool in one chapter desk — not another WhatsApp group."],
          ].map(([n, r, q]) => (
            <Card key={n} className="p-5">
              <p className="text-sm text-slate-700">“{q}”</p>
              <p className="mt-3 font-semibold">{n}</p>
              <p className="text-xs text-slate-500">{r}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-extrabold text-emerald-950">Walk the prototype</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
            Password for every desk: <span className="font-mono font-bold">kano123</span>. Demo Mode (bottom-right) switches
            merchant, mill, agent, association, bank, SOC, board and MDA view.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/login" size="lg">
              Sign in to a desk
            </Button>
            <Button href="/register" size="lg" variant="outline">
              Create a business
            </Button>
            <Button href="/contact" size="lg" variant="ghost">
              Talk to us
            </Button>
          </div>
        </Card>
      </section>
      <Footer />
    </div>
  );
}
