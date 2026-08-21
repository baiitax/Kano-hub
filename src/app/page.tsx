"use client";

import Link from "next/link";
import { brand } from "@/config/brand";
import { Footer, ProductThumb, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card } from "@/components/ui";
import { businesses, naira, platformKpis, products, revenueSeries } from "@/data/mock";
import {
  Store,
  Boxes,
  Wallet,
  BookOpen,
  Truck,
  BarChart3,
  Landmark,
  CheckCircle2,
  Shield,
  ArrowRight,
  ShoppingBag,
  Receipt,
  Users,
  Building2,
  CreditCard,
  BadgeCheck,
  Megaphone,
  UserCog,
  Sparkles,
  MapPin,
  LifeBuoy,
  LayoutDashboard,
  Smartphone,
  Bike,
  Factory,
} from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import type { LucideIcon } from "lucide-react";

const services: {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  audience: string;
}[] = [
  { icon: ShoppingBag, title: "Public Marketplace", desc: "Discover verified Kano shops, products and same-day delivery.", href: "/marketplace", audience: "Customers" },
  { icon: Store, title: "Digital Shop", desc: "Your branded storefront with products, hours and reviews.", href: "/shop/aisha-fashion-house", audience: "Merchants" },
  { icon: LayoutDashboard, title: "Merchant Operating System", desc: "One dashboard to run sales, stock, staff and cash.", href: "/merchant", audience: "Merchants" },
  { icon: Boxes, title: "Inventory", desc: "Stock value, low-stock alerts and movement history.", href: "/merchant/inventory", audience: "Merchants" },
  { icon: Receipt, title: "Point of Sale", desc: "Counter sales with cash, transfer, card or wallet.", href: "/merchant/pos", audience: "Merchants" },
  { icon: ShoppingBag, title: "Orders & Fulfilment", desc: "Accept, process, refund and assign riders.", href: "/merchant/orders", audience: "Merchants" },
  { icon: Users, title: "Customer CRM", desc: "Repeat buyers, VIP tags and money owed.", href: "/merchant/customers", audience: "Merchants" },
  { icon: Building2, title: "Suppliers & Wholesale", desc: "Find distributors, request quotes, restock.", href: "/suppliers", audience: "B2B" },
  { icon: CreditCard, title: "Expenses", desc: "Rent, salary, transport — with receipts.", href: "/merchant/expenses", audience: "Merchants" },
  { icon: BookOpen, title: "Accounting", desc: "P&L, cash flow, tax summary. Export PDF/CSV.", href: "/merchant/accounting", audience: "Merchants" },
  { icon: Receipt, title: "Invoices", desc: "Create, send and record payments.", href: "/merchant/invoices", audience: "Merchants" },
  { icon: Wallet, title: "Payments & Wallet", desc: "Collect, settle and withdraw via licensed partners.", href: "/merchant/wallet", audience: "Finance" },
  { icon: Landmark, title: "Business Banking UI", desc: "Partner-powered transfers, bills and statements.", href: "/merchant/banking", audience: "Finance" },
  { icon: Truck, title: "Logistics", desc: "Request pickup, track riders, delivery fees.", href: "/merchant/logistics", audience: "Logistics" },
  { icon: Bike, title: "Rider App", desc: "Accept jobs, navigate, mark delivered, earn.", href: "/logistics", audience: "Riders" },
  { icon: Factory, title: "Logistics Company", desc: "Fleet, drivers, service areas and pricing.", href: "/logistics/company", audience: "Logistics" },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Revenue, categories, best days, AI tips.", href: "/merchant/analytics", audience: "Merchants" },
  { icon: BadgeCheck, title: "Financial Profile", desc: "Credit-readiness score from sales history.", href: "/merchant/financial-profile", audience: "Finance" },
  { icon: Landmark, title: "Financing Marketplace", desc: "Prototype partner offers — not a loan guarantee.", href: "/merchant/financing", audience: "Finance" },
  { icon: Megaphone, title: "Marketing & Coupons", desc: "Discounts, flash sales, WhatsApp broadcasts.", href: "/merchant/marketing", audience: "Merchants" },
  { icon: UserCog, title: "Staff & Roles", desc: "Owner, cashier, inventory, accountant permissions.", href: "/merchant/staff", audience: "Merchants" },
  { icon: Shield, title: "Verification", desc: "Phone, ID, address and documents.", href: "/merchant/business", audience: "Trust" },
  { icon: Sparkles, title: "AI Business Assistant", desc: "Ask about sales, stock and profit (prototype).", href: "/merchant/ai", audience: "Merchants" },
  { icon: Smartphone, title: "Customer Wallet", desc: "Balance, top-up, pay merchants.", href: "/customer/wallet", audience: "Customers" },
  { icon: MapPin, title: "Kano Economic Dashboard", desc: "LGA activity for government and partners.", href: "/admin/kano", audience: "Government" },
  { icon: LayoutDashboard, title: "Admin Console", desc: "Merchants, payments, disputes, risk.", href: "/admin", audience: "Ops" },
  { icon: BarChart3, title: "Executive / Investor", desc: "GMV, jobs, unit economics (illustrative).", href: "/executive", audience: "Investors" },
  { icon: LifeBuoy, title: "Support", desc: "Help, tickets and live chat UI.", href: "/support", audience: "Everyone" },
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <Badge tone="gold">Kano State · Digital Business OS</Badge>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-emerald-950 md:text-5xl">{brand.tagline}</h1>
            <p className="mt-4 max-w-xl text-lg text-slate-700">{brand.description}</p>
            <p className="mt-3 text-sm font-semibold text-emerald-800">Sell · Manage · Collect · Deliver · Understand · Grow · Access financing</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/register" size="lg">
                Create Your Business
              </Button>
              <Button href="/marketplace" size="lg" variant="outline">
                Explore Marketplace
              </Button>
              <Button href="/merchant" size="lg" variant="ghost">
                Open Merchant OS
              </Button>
            </div>
          </div>
          <Card className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-semibold">Aisha Fashion House</p>
              <Badge tone="green">Verified</Badge>
            </div>
            <p className="text-3xl font-bold">{naira(4280500)}</p>
            <p className="text-xs text-slate-500">Sales · last 30 days · prototype</p>
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
                <p className="font-bold">173</p>
                Customers
              </div>
              <div className="rounded-lg bg-white/50 p-2">
                <p className="font-bold">742</p>
                Credit readiness
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <Card className="p-4">
          <form action="/marketplace/search" className="flex flex-col gap-3 md:flex-row">
            <input name="q" placeholder="What are you looking for? Fashion, Phones, Food…" className="flex-1 rounded-xl border border-white/60 bg-white/40 px-3 py-3 outline-none" />
            <select className="rounded-xl border border-white/60 bg-white/40 px-3 py-3" defaultValue="Kano">
              <option>Kano</option>
            </select>
            <Button href="/marketplace/search?q=sneakers" size="lg">
              Search
            </Button>
          </form>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Fashion", "Phones", "Food", "Electronics", "Beauty", "Groceries"].map((c) => (
              <Link key={c} href={`/marketplace/category/${c.toLowerCase()}`} className="rounded-full border border-white/70 bg-white/40 px-3 py-1 text-sm backdrop-blur">
                {c}
              </Link>
            ))}
          </div>
        </Card>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-800">All services</p>
            <h2 className="text-3xl font-bold text-emerald-950">The complete KanoHub ecosystem</h2>
            <p className="mt-1 text-slate-600">Every module is live in this prototype. Tap a card to open it.</p>
          </div>
          <Badge tone="gold">Illustrative prototype</Badge>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.title + s.href} href={s.href}>
              <Card className="h-full p-5 transition hover:-translate-y-0.5 hover:bg-white/70">
                <div className="flex items-start justify-between">
                  <s.icon className="h-6 w-6 text-emerald-700" />
                  <span className="rounded-full bg-emerald-700/10 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-800">
                    {s.audience}
                  </span>
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

      <section className="mx-auto max-w-7xl px-4 pb-10">
        <h2 className="text-2xl font-bold">How it works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-6">
          {["Create your business", "Add products", "Start selling", "Manage finances", "Deliver orders", "Grow"].map((s, i) => (
            <Card key={s} className="p-4">
              <p className="text-emerald-700 font-bold">{i + 1}</p>
              <p className="mt-2 font-semibold">{s}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured businesses</h2>
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
          <h2 className="text-2xl font-bold">Marketplace preview</h2>
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

      <section className="mx-auto max-w-7xl px-4 py-10">
        <Card className="glass-dark p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold">Build a stronger financial profile as your business grows</h2>
          <p className="mt-4 max-w-3xl text-emerald-50">
            Verified sales + payment history + business records + cash-flow history can help participating financial
            partners assess financing eligibility. Eligible businesses may receive financing offers from participating
            financial partners. Financing is not guaranteed. Payment and banking screens are powered by licensed partners
            — KanoHub is not a bank or lender.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/merchant/financial-profile" className="bg-white text-emerald-900 hover:bg-emerald-50">
              Financial profile
            </Button>
            <Button href="/merchant/financing" variant="outline" className="border-white/40 text-white">
              Financing marketplace
            </Button>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="text-2xl font-bold">Logistics you can see</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Order placed", "Rider assigned", "Pickup", "In transit", "Delivered"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className="glass rounded-full px-4 py-2 text-sm font-semibold text-emerald-900">{s}</div>
              {i < 4 && <ArrowRight className="h-4 w-4 text-slate-400" />}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <p className="text-xs font-semibold uppercase text-amber-800">Illustrative prototype data</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [CheckCircle2, "Verified businesses", platformKpis.merchants.toLocaleString()],
            [Shield, "Secure payments", `₦${platformKpis.gmv}B GMV`],
            [Truck, "Trusted logistics", platformKpis.deliveries.toLocaleString() + " trips"],
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
      <Footer />
    </div>
  );
}
