"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./chrome";
import { SupplierDock } from "./docks";
import { cn } from "./ui";
import {
  LayoutDashboard,
  Activity,
  ShoppingBag,
  FileText,
  Boxes,
  Warehouse,
  Users,
  BadgeCheck,
  Truck,
  Receipt,
  Wallet,
  Tags,
  BarChart3,
  UserCog,
  MoreHorizontal,
  Menu,
  X,
  Factory,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const nav = [
  { href: "/supplier", label: "Mill command", icon: LayoutDashboard },
  { href: "/supplier/activity", label: "Live tape", icon: Activity },
  { href: "/supplier/orders", label: "Purchase orders", icon: ShoppingBag },
  { href: "/supplier/quotes", label: "Quotes", icon: FileText },
  { href: "/supplier/catalogue", label: "Wholesale catalogue", icon: Boxes },
  { href: "/supplier/inventory", label: "Mill stock", icon: Warehouse },
  { href: "/supplier/buyers", label: "Merchant buyers", icon: Users },
  { href: "/supplier/credit", label: "Trade credit", icon: BadgeCheck },
  { href: "/supplier/deliveries", label: "Mill-to-shop", icon: Truck },
  { href: "/supplier/slots", label: "Dispatch slots", icon: Truck },
  { href: "/supplier/invoices", label: "Invoices", icon: Receipt },
  { href: "/supplier/wallet", label: "Settlements", icon: Wallet },
  { href: "/supplier/pricing", label: "MOQ & bales", icon: Tags },
  { href: "/supplier/returns", label: "Returns", icon: ShoppingBag },
  { href: "/supplier/reports", label: "Reports", icon: BarChart3 },
  { href: "/supplier/staff", label: "Mill staff", icon: UserCog },
  { href: "/supplier/more", label: "More", icon: MoreHorizontal },
];

export function SupplierShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen">
      {open && <button className="fixed inset-0 z-20 bg-slate-900/40 lg:hidden" onClick={() => setOpen(false)} aria-label="Close" />}
      <aside className={cn("glass fixed z-30 h-dvh w-[min(18rem,86vw)] overflow-y-auto p-4 lg:static lg:block", open ? "block" : "hidden")}>
        <div className="flex items-center justify-between">
          <Logo />
          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Supplier OS</p>
        <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-800">
          <Factory className="h-3.5 w-3.5" /> Kano Textile Mills · Sharada
        </p>
        <nav className="mt-4 space-y-0.5 pb-24">
          {nav.map((n) => {
            const Icon = n.icon;
            const active = path === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={cn("flex min-h-11 items-center gap-2 rounded-xl px-2.5 py-2 text-sm", active ? "bg-emerald-700 text-white" : "text-slate-600 hover:bg-white/50")}
              >
                <Icon className="h-4 w-4" /> {n.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/wholesale" className="text-xs font-semibold text-emerald-800">
          Public B2B wholesale →
        </Link>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="glass-nav sticky top-0 z-10 flex items-center gap-2 px-3 py-2">
          <button className="grid h-11 w-11 place-items-center lg:hidden" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
          <p className="flex-1 text-sm font-semibold">Mill · Kantin Kwari supply</p>
          <Link href="/wholesale" className="hidden text-xs font-semibold text-emerald-800 sm:block">
            B2B floor
          </Link>
        </div>
        <main className="flex-1 p-3 pb-24 sm:p-6 lg:pb-6">{children}</main>
      </div>
      <SupplierDock />
    </div>
  );
}
