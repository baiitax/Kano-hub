"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { brand } from "@/config/brand";
import { useStore } from "@/lib/store";
import { Button, cn } from "./ui";
import {
  Bell,
  LayoutDashboard,
  Package,
  ShoppingBag,
  Wallet,
  Truck,
  BarChart3,
  Landmark,
  Users,
  Settings,
  LifeBuoy,
  Store,
  Boxes,
  Receipt,
  CreditCard,
  LineChart,
  BadgeCheck,
  Megaphone,
  UserCog,
  Building2,
  Search,
  Home,
  MoreHorizontal,
  Plus,
  Shield,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import type { Role } from "@/types";

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-700 text-sm font-extrabold text-white">
        {brand.shortName}
      </span>
      <span className={cn("text-lg font-extrabold tracking-tight", light ? "text-white" : "text-slate-900")}>
        {brand.name}
      </span>
    </Link>
  );
}

export function DemoSwitcher() {
  const { role, setRole, lang, setLang } = useStore();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const go = (r: Role, path: string) => {
    setRole(r);
    setOpen(false);
    router.push(path);
  };
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="glass-dark fixed bottom-20 right-4 z-40 rounded-full px-4 py-2.5 text-xs font-bold text-white md:bottom-6"
      >
        Demo Mode
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-slate-900/40" onClick={() => setOpen(false)}>
          <div
            className="glass absolute bottom-0 right-0 m-4 w-80 rounded-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-3 text-sm font-bold">View as</p>
            <div className="grid gap-2">
              {(
                [
                  ["customer", "Customer — Maryam Yusuf", "/marketplace"],
                  ["merchant", "Merchant — Aisha Fashion House", "/merchant"],
                  ["rider", "Rider — Abdullahi Musa", "/logistics"],
                  ["supplier", "Supplier — Kano Textile Mills", "/supplier"],
                  ["admin", "Platform Admin", "/admin"],
                  ["executive", "Executive / Investor", "/executive"],
                ] as const
              ).map(([r, label, path]) => (
                <button
                  key={r}
                  onClick={() => go(r, path)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-left text-sm",
                    role === r ? "border-emerald-600 bg-emerald-50" : "border-slate-200"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span>Language</span>
              <button
                className="rounded-md border px-2 py-1 font-semibold"
                onClick={() => setLang(lang === "en" ? "ha" : "en")}
              >
                {lang === "en" ? "English → Hausa" : "Hausa → English"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Toasts() {
  const { toasts } = useStore();
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 space-y-2">
      {toasts.map((t) => (
        <div key={t.id} className="pointer-events-auto rounded-xl bg-slate-900 px-4 py-3 text-sm text-white shadow-lg">
          <p className="font-semibold">{t.title}</p>
          {t.body && <p className="text-slate-300">{t.body}</p>}
        </div>
      ))}
    </div>
  );
}

export function PublicHeader() {
  const { cart, lang } = useStore();
  const [q, setQ] = useState("");
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const goSearch = (e?: FormEvent) => {
    e?.preventDefault();
    router.push("/marketplace/search?q=" + encodeURIComponent(q || "sneakers"));
  };
  const count = cart.reduce((s, i) => s + i.qty, 0);
  return (
    <header className="glass-nav sticky top-0 z-30">
      <div className="mx-auto max-w-7xl px-3 py-2 sm:px-4 sm:py-3">
        <div className="flex items-center gap-2">
          <Logo />
          <form className="hidden min-w-0 flex-1 items-center gap-2 lg:flex" onSubmit={goSearch}>
            <div className="flex flex-1 items-center rounded-2xl border border-white/60 bg-white/50 px-3">
              <Search className="h-4 w-4 shrink-0 text-slate-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={lang === "ha" ? "Me kake nema?" : "Search Kano shops & products"}
                className="w-full bg-transparent px-2 py-2.5 text-sm outline-none"
              />
            </div>
            <span className="flex items-center gap-1 rounded-xl border border-white/60 bg-white/40 px-3 py-2.5 text-xs font-medium text-slate-600">
              <MapPin className="h-3 w-3" /> Kano
            </span>
          </form>
          <nav className="ml-auto hidden items-center gap-3 text-sm font-medium text-slate-700 xl:flex">
            <Link href="/#services">Services</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/suppliers">Wholesale</Link>
            <Link href="/login">Sign in</Link>
            <Button href="/register" size="sm">
              Create business
            </Button>
          </nav>
          <div className="ml-auto flex items-center gap-1 lg:ml-2">
            <Link href="/notifications" className="grid h-11 w-11 place-items-center rounded-xl hover:bg-white/50" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="relative grid h-11 w-11 place-items-center rounded-xl hover:bg-white/50" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-emerald-700 px-1 text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </Link>
            <button className="grid h-11 w-11 place-items-center rounded-xl xl:hidden" onClick={() => setMenu(!menu)} aria-label="Menu">
              {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <form className="mt-2 flex items-center gap-2 lg:hidden" onSubmit={goSearch}>
          <div className="flex flex-1 items-center rounded-2xl border border-white/60 bg-white/50 px-3">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products, shops…"
              className="w-full bg-transparent px-2 py-2.5 text-sm outline-none"
            />
          </div>
          <span className="hidden items-center gap-1 rounded-xl bg-white/40 px-2 py-2 text-xs sm:flex">
            <MapPin className="h-3 w-3" /> Kano
          </span>
        </form>
      </div>
      {menu && (
        <div className="space-y-1 border-t border-white/40 px-4 py-3 xl:hidden">
          {[
            ["/#services", "All services"],
            ["/marketplace", "Marketplace"],
            ["/suppliers", "Wholesale"],
            ["/customer/orders", "My orders"],
            ["/customer/wallet", "Wallet"],
            ["/login", "Sign in"],
            ["/register", "Create business"],
            ["/merchant", "Merchant OS"],
          ].map(([h, l]) => (
            <Link key={h} href={h} className="block rounded-xl px-3 py-3 text-sm font-medium hover:bg-white/50" onClick={() => setMenu(false)}>
              {l}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

const merchantNav = [
  { href: "/merchant", label: "Dashboard", icon: LayoutDashboard },
  { href: "/marketplace", label: "Marketplace", icon: Store },
  { href: "/merchant/orders", label: "Orders", icon: ShoppingBag },
  { href: "/merchant/products", label: "Products", icon: Package },
  { href: "/merchant/inventory", label: "Inventory", icon: Boxes },
  { href: "/merchant/pos", label: "Point of Sale", icon: Receipt },
  { href: "/merchant/sales", label: "Sales", icon: LineChart },
  { href: "/merchant/customers", label: "Customers", icon: Users },
  { href: "/merchant/suppliers", label: "Suppliers", icon: Building2 },
  { href: "/merchant/expenses", label: "Expenses", icon: CreditCard },
  { href: "/merchant/accounting", label: "Accounting", icon: Landmark },
  { href: "/merchant/invoices", label: "Invoices", icon: Receipt },
  { href: "/merchant/payments", label: "Payments", icon: Wallet },
  { href: "/merchant/wallet", label: "Wallet", icon: Wallet },
  { href: "/merchant/banking", label: "Business Banking", icon: Landmark },
  { href: "/merchant/logistics", label: "Logistics", icon: Truck },
  { href: "/merchant/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/merchant/financial-profile", label: "Financial Profile", icon: BadgeCheck },
  { href: "/merchant/financing", label: "Financing", icon: Landmark },
  { href: "/merchant/marketing", label: "Marketing", icon: Megaphone },
  { href: "/merchant/staff", label: "Staff", icon: UserCog },
  { href: "/merchant/business", label: "Business Profile", icon: Store },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/support", label: "Support", icon: LifeBuoy },
];

const adminNav = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/merchants", label: "Merchants", icon: Store },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { href: "/admin/payments", label: "Payments", icon: Wallet },
  { href: "/admin/logistics", label: "Logistics", icon: Truck },
  { href: "/admin/partners", label: "Financial Partners", icon: Landmark },
  { href: "/admin/financing", label: "Financing", icon: BadgeCheck },
  { href: "/admin/verification", label: "Verification", icon: Shield },
  { href: "/admin/disputes", label: "Disputes", icon: LifeBuoy },
  { href: "/admin/risk", label: "Risk / Fraud", icon: Shield },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/kano", label: "Kano Economy", icon: MapPin },
  { href: "/admin/reports", label: "Reports", icon: LineChart },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function AppShell({
  children,
  kind = "merchant",
}: {
  children: ReactNode;
  kind?: "merchant" | "admin" | "logistics" | "supplier";
}) {
  const path = usePathname();
  const nav = kind === "admin" ? adminNav : merchantNav;
  const [open, setOpen] = useState(false);
  const title =
    kind === "admin" ? "Operations Console" : kind === "logistics" ? "Rider" : kind === "supplier" ? "Supplier" : "Aisha Fashion House";
  return (
    <div className="flex min-h-screen">
      {open && <button className="fixed inset-0 z-20 bg-slate-900/40 lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu" />}
      <aside
        className={cn(
          "glass fixed z-30 h-dvh w-[min(18rem,86vw)] overflow-y-auto border-r border-white/40 p-4 scrollbar-thin lg:static lg:block lg:h-screen lg:w-64",
          open ? "block" : "hidden"
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button className="grid h-10 w-10 place-items-center rounded-xl lg:hidden" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{title}</p>
        {kind === "merchant" && (
          <div className="mt-2 flex items-center gap-2 rounded-lg bg-emerald-50/80 px-2 py-1.5 text-xs text-emerald-800">
            <BadgeCheck className="h-3.5 w-3.5" /> Verified Business
          </div>
        )}
        <nav className="mt-4 space-y-0.5 pb-24">
          {nav.map((n) => {
            const active = path === n.href;
            const Icon = n.icon;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center gap-2 rounded-xl px-2.5 py-2 text-sm",
                  active ? "bg-emerald-700 text-white" : "text-slate-600 hover:bg-white/50"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" /> {n.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="glass-nav sticky top-0 z-10 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3">
          <button className="grid h-11 w-11 place-items-center rounded-xl lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden min-w-0 flex-1 items-center rounded-2xl border border-white/60 bg-white/40 px-3 py-2 text-sm text-slate-500 md:flex">
            <Search className="mr-2 h-4 w-4" /> Search products, orders, customers…
          </div>
          <Link href="/merchant/pos" className="hidden rounded-xl bg-emerald-700 px-3 py-2 text-xs font-bold text-white sm:inline-flex lg:hidden">
            POS
          </Link>
          <Link href="/notifications" className="grid h-11 w-11 place-items-center rounded-xl" aria-label="Notifications">
            <Bell className="h-5 w-5 text-slate-600" />
          </Link>
          <Link href="/merchant/ai" className="hidden text-xs font-semibold text-emerald-700 md:block">
            AI
          </Link>
          <div className="h-9 w-9 rounded-full bg-emerald-700 text-center text-sm font-bold leading-9 text-white">A</div>
        </div>
        <main className={cn("flex-1 animate-in p-3 sm:p-5 lg:p-6", kind === "merchant" && "pb-24 lg:pb-6")}>{children}</main>
      </div>
      {kind === "merchant" && <MerchantMobileNav />}
    </div>
  );
}

function MerchantMobileNav() {
  const path = usePathname();
  const items = [
    ["/merchant", Home, "Home"],
    ["/merchant/orders", ShoppingBag, "Orders"],
    ["/merchant/pos", Plus, "POS"],
    ["/merchant/products", Package, "Products"],
    ["/merchant/more", MoreHorizontal, "More"],
  ] as const;
  return (
    <nav className="glass-nav safe-bottom fixed bottom-0 left-0 right-0 z-30 grid grid-cols-5 px-1 pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-1 lg:hidden">
      {items.map(([href, Icon, label]) => {
        const active = path === href || (href !== "/merchant" && path.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            className={cn("flex min-h-12 flex-col items-center justify-center gap-0.5 text-[10px] font-medium", active ? "text-emerald-800" : "text-slate-500")}
          >
            <span className={cn("grid h-9 w-9 place-items-center rounded-2xl", href === "/merchant/pos" && "bg-emerald-700 text-white", active && href !== "/merchant/pos" && "bg-emerald-700/10")}>
              <Icon className="h-5 w-5" />
            </span>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export function CustomerBottom() {
  const { cart } = useStore();
  const path = usePathname();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const items = [
    ["/marketplace", Home, "Home"],
    ["/marketplace/search", Search, "Search"],
    ["/customer/orders", Package, "Orders"],
    ["/cart", ShoppingBag, "Cart"],
    ["/customer/profile", Users, "Account"],
  ] as const;
  return (
    <nav className="glass-nav fixed bottom-0 left-0 right-0 z-30 grid grid-cols-5 pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-1 md:hidden">
      {items.map(([href, Icon, label]) => {
        const active = path === href || (href !== "/marketplace" && path.startsWith(href));
        return (
          <Link key={href} href={href} className={cn("relative flex min-h-12 flex-col items-center justify-center gap-0.5 text-[10px] font-medium", active ? "text-emerald-800" : "text-slate-500")}>
            <Icon className="h-5 w-5" />
            {label}
            {label === "Cart" && count > 0 && (
              <span className="absolute right-[18%] top-0 grid h-4 min-w-4 place-items-center rounded-full bg-emerald-700 px-1 text-[9px] text-white">
                {count}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export function ProductThumb({ kind, className }: { kind: string; className?: string }) {
  const bg: Record<string, string> = {
    kaftan: "from-emerald-700 to-emerald-900",
    sneakers: "from-slate-200 to-slate-400",
    abaya: "from-indigo-800 to-slate-900",
    noodles: "from-red-500 to-orange-600",
    phone: "from-blue-600 to-slate-800",
    inverter: "from-amber-500 to-yellow-700",
    beauty: "from-rose-300 to-amber-200",
    ankara: "from-yellow-500 to-red-600",
  };
  return (
    <div className={cn("rounded-xl bg-gradient-to-br", bg[kind] || "from-emerald-600 to-blue-800", className)} />
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-5">
        <div>
          <Logo light />
          <p className="mt-3 text-sm text-slate-400">{brand.subtitle}</p>
        </div>
        {[
          ["Company", ["About", "Careers", "Contact"]],
          ["Marketplace", ["Categories", "Shops", "Deals"]],
          ["For Businesses", ["Merchant OS", "POS", "Financing"]],
          ["Legal", ["Privacy", "Terms", "Responsible Financing"]],
        ].map(([h, links]) => (
          <div key={h as string}>
            <p className="font-semibold text-white">{h as string}</p>
            <ul className="mt-2 space-y-1 text-sm">
              {(links as string[]).map((l) => (
                <li key={l}>
                  <Link href="/support" className="hover:text-white">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © 2026 {brand.name}. Prototype for demonstration. Payment and financing services provided through licensed partners.
      </p>
    </footer>
  );
}
