"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./chrome";
import { CompanyDock } from "./docks";
import { cn } from "./ui";
import {
  LayoutDashboard,
  Radio,
  Bike,
  MapPin,
  Truck,
  Timer,
  Wallet,
  AlertTriangle,
  CreditCard,
  BarChart3,
  Activity,
  Menu,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const nav = [
  { href: "/logistics/company", label: "Command", icon: LayoutDashboard },
  { href: "/logistics/company/activity", label: "Live tape", icon: Activity },
  { href: "/logistics/company/dispatch", label: "Dispatch", icon: Radio },
  { href: "/logistics/company/riders", label: "Riders", icon: Bike },
  { href: "/logistics/company/fleet", label: "Fleet", icon: Truck },
  { href: "/logistics/company/zones", label: "Zones / LGAs", icon: MapPin },
  { href: "/logistics/company/sla", label: "SLA", icon: Timer },
  { href: "/logistics/company/payouts", label: "Rider payouts", icon: Wallet },
  { href: "/logistics/company/incidents", label: "Incidents", icon: AlertTriangle },
  { href: "/logistics/company/pricing", label: "Pricing", icon: CreditCard },
  { href: "/logistics/company/reports", label: "Reports", icon: BarChart3 },
];

export function CompanyShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen">
      {open && <button className="fixed inset-0 z-20 bg-slate-900/40 lg:hidden" onClick={() => setOpen(false)} />}
      <aside className={cn("glass fixed z-30 h-dvh w-64 overflow-y-auto p-4 lg:static lg:block", open ? "block" : "hidden")}>
        <div className="flex items-center justify-between">
          <Logo />
          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Kano Express HQ</p>
        <nav className="mt-4 space-y-0.5 pb-24">
          {nav.map((n) => {
            const Icon = n.icon;
            const active = path === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={cn("flex min-h-10 items-center gap-2 rounded-xl px-2 py-2 text-sm", active ? "bg-emerald-700 text-white" : "text-slate-600 hover:bg-white/50")}
              >
                <Icon className="h-4 w-4" /> {n.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/logistics" className="text-xs font-semibold text-emerald-800">
          Rider app →
        </Link>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="glass-nav flex items-center gap-2 px-3 py-2">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <p className="flex-1 text-sm font-semibold">Fleet command</p>
        </div>
        <main className="flex-1 p-3 pb-24 sm:p-6">{children}</main>
      </div>
      <CompanyDock />
    </div>
  );
}
