"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./chrome";
import { ExecutiveDock } from "./docks";
import { cn } from "./ui";
import {
  LayoutDashboard,
  TrendingUp,
  Store,
  Users,
  PieChart,
  MapPin,
  Landmark,
  Truck,
  Briefcase,
  Activity,
  Gavel,
  AlertTriangle,
  Menu,
  X,
  Layers,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { useStore } from "@/lib/store";

const nav = [
  { href: "/executive", label: "Command centre", icon: LayoutDashboard },
  { href: "/executive/activity", label: "Live activity", icon: Activity },
  { href: "/executive/gmv", label: "GMV & take rate", icon: TrendingUp },
  { href: "/executive/growth", label: "Growth & cohorts", icon: PieChart },
  { href: "/executive/merchants", label: "Merchant health", icon: Store },
  { href: "/executive/customers", label: "Customers", icon: Users },
  { href: "/executive/economics", label: "Unit economics", icon: Landmark },
  { href: "/executive/lgas", label: "LGA penetration", icon: MapPin },
  { href: "/executive/sectors", label: "Sectors", icon: Layers },
  { href: "/executive/financing", label: "Credit (partners)", icon: Landmark },
  { href: "/executive/logistics", label: "Logistics", icon: Truck },
  { href: "/executive/jobs", label: "Jobs & inclusion", icon: Briefcase },
  { href: "/executive/risks", label: "Enterprise risks", icon: AlertTriangle },
  { href: "/executive/board", label: "Board pack", icon: Gavel },
];

export function ExecShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { session } = useStore();
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {open && <button className="fixed inset-0 z-20 bg-black/50 lg:hidden" onClick={() => setOpen(false)} />}
      <aside className={cn("fixed z-30 h-dvh w-64 overflow-y-auto border-r border-white/10 bg-slate-950/95 p-4 lg:static lg:block", open ? "block" : "hidden")}>
        <div className="flex items-center justify-between">
          <Logo light />
          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">Executive office</p>
        <p className="text-[10px] text-slate-500">{session?.name || "Board"} · Illustrative figures</p>
        <nav className="mt-4 space-y-0.5 pb-24">
          {nav.map((n) => {
            const Icon = n.icon;
            const active = path === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={cn("flex min-h-10 items-center gap-2 rounded-lg px-2 py-2 text-sm", active ? "bg-emerald-700 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white")}
              >
                <Icon className="h-4 w-4" /> {n.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-3">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <p className="flex-1 text-sm font-semibold text-slate-300">KanoHub · Confidential board workspace</p>
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">LIVE FEED</span>
        </div>
        <main className="flex-1 p-4 pb-28 lg:p-8">{children}</main>
      </div>
      <ExecutiveDock />
    </div>
  );
}
