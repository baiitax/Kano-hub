"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./chrome";
import { cn } from "./ui";
import {
  LayoutDashboard,
  Landmark,
  FileText,
  Wallet,
  Users,
  Shield,
  BarChart3,
  BadgeCheck,
  AlertTriangle,
  Eye,
  Smartphone,
  ScrollText,
  Siren,
  Settings,
  Menu,
  X,
  Building2,
  CreditCard,
  BookOpen,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const bankNav = [
  { href: "/bank", label: "Bank overview", icon: LayoutDashboard },
  { href: "/bank/accounts", label: "Merchant accounts", icon: Landmark },
  { href: "/bank/transactions", label: "Ledger", icon: BookOpen },
  { href: "/bank/settlements", label: "Settlements", icon: Wallet },
  { href: "/bank/lending", label: "Lending desk", icon: BadgeCheck },
  { href: "/bank/risk", label: "Credit risk", icon: Shield },
  { href: "/bank/compliance", label: "Compliance", icon: FileText },
  { href: "/bank/reports", label: "Reports", icon: BarChart3 },
];

const loanNav = [
  { href: "/loans", label: "Loan point", icon: LayoutDashboard },
  { href: "/loans/pipeline", label: "Application pipeline", icon: FileText },
  { href: "/loans/portfolio", label: "Portfolio", icon: Landmark },
  { href: "/loans/collections", label: "Collections", icon: CreditCard },
  { href: "/loans/products", label: "Products", icon: BadgeCheck },
  { href: "/loans/officers", label: "Officers", icon: Users },
];

const socNav = [
  { href: "/security", label: "SOC command", icon: Siren },
  { href: "/security/alerts", label: "Alert queue", icon: AlertTriangle },
  { href: "/security/identities", label: "Identities", icon: Users },
  { href: "/security/devices", label: "Devices", icon: Smartphone },
  { href: "/security/fraud", label: "Fraud lab", icon: Eye },
  { href: "/security/watchlist", label: "Watchlist", icon: Shield },
  { href: "/security/audit", label: "Audit log", icon: ScrollText },
  { href: "/security/playbooks", label: "Playbooks", icon: FileText },
];

export function PortalShell({
  children,
  kind,
}: {
  children: ReactNode;
  kind: "bank" | "loans" | "security";
}) {
  const path = usePathname();
  const nav = kind === "bank" ? bankNav : kind === "loans" ? loanNav : socNav;
  const title =
    kind === "bank" ? "Participating bank desk" : kind === "loans" ? "Loan point / MFB" : "Security intelligence";
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen">
      {open && <button className="fixed inset-0 z-20 bg-slate-900/40 lg:hidden" onClick={() => setOpen(false)} />}
      <aside className={cn("glass fixed z-30 h-dvh w-64 overflow-y-auto p-4 lg:static lg:block", open ? "block" : "hidden")}>
        <div className="flex items-center justify-between">
          <Logo />
          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{title}</p>
        <p className="mt-1 text-[10px] text-amber-800">Prototype · licensed partners only</p>
        <nav className="mt-4 space-y-0.5">
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
        <div className="mt-6 space-y-1 text-xs">
          <Link href="/admin" className="block text-emerald-800">
            Platform admin
          </Link>
          <Link href="/merchant/financing" className="block text-emerald-800">
            Merchant financing
          </Link>
          <Link href="/security" className="block text-emerald-800">
            Security SOC
          </Link>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="glass-nav flex items-center gap-2 px-3 py-2">
          <button className="grid h-11 w-11 place-items-center lg:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <Building2 className="hidden h-4 w-4 text-emerald-800 sm:block" />
          <p className="flex-1 text-sm font-semibold">{title}</p>
          <Link href="/admin" className="text-xs font-semibold text-emerald-800">
            Admin
          </Link>
        </div>
        <main className="flex-1 p-3 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
