"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./chrome";
import { AssocDock } from "./docks";
import { cn } from "./ui";
import { LayoutDashboard, Users, Wallet, Package, GraduationCap, Store, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const nav = [
  { href: "/association", label: "Chapter home", icon: LayoutDashboard },
  { href: "/association/members", label: "Members / rumfa", icon: Users },
  { href: "/association/dues", label: "Dues", icon: Wallet },
  { href: "/association/deals", label: "Bulk mill deals", icon: Package },
  { href: "/association/training", label: "Training", icon: GraduationCap },
  { href: "/markets/kantin-kwari", label: "Kwari map", icon: Store },
];

export function AssocShell({ children }: { children: ReactNode }) {
  const path = usePathname();
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
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Association</p>
        <p className="text-xs text-emerald-800">Kantin Kwari Traders Association</p>
        <nav className="mt-4 space-y-0.5">
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={cn("flex min-h-11 items-center gap-2 rounded-xl px-2.5 py-2 text-sm", path === n.href ? "bg-emerald-700 text-white" : "text-slate-600 hover:bg-white/50")}
              >
                <Icon className="h-4 w-4" /> {n.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="glass-nav flex items-center gap-2 px-3 py-2">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <p className="flex-1 text-sm font-semibold">Chapter desk · not a regulator</p>
        </div>
        <main className="flex-1 p-3 pb-24 sm:p-6">{children}</main>
      </div>
      <AssocDock />
    </div>
  );
}
