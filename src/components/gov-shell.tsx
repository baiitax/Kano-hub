"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./chrome";
import { GovDock } from "./docks";
import { cn } from "./ui";
import { LayoutDashboard, MapPin, Briefcase, Users, Landmark, FileText, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const nav = [
  { href: "/gov", label: "Economic desk", icon: LayoutDashboard },
  { href: "/gov/lgas", label: "LGA view", icon: MapPin },
  { href: "/gov/jobs", label: "Jobs & inclusion", icon: Briefcase },
  { href: "/gov/women", label: "Women-owned GMV", icon: Users },
  { href: "/gov/programmes", label: "Programmes", icon: Landmark },
  { href: "/gov/brief", label: "Donor brief", icon: FileText },
];

export function GovShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {open && <button className="fixed inset-0 z-20 bg-black/50 lg:hidden" onClick={() => setOpen(false)} />}
      <aside className={cn("fixed z-30 h-dvh w-64 overflow-y-auto border-r border-white/10 bg-slate-950 p-4 lg:static lg:block", open ? "block" : "hidden")}>
        <div className="flex items-center justify-between">
          <Logo light />
          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">MDA · view only</p>
        <p className="text-[10px] text-slate-500">Ministry of Commerce · illustrative · not an official return</p>
        <nav className="mt-4 space-y-0.5">
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={cn("flex min-h-10 items-center gap-2 rounded-lg px-2 py-2 text-sm", path === n.href ? "bg-emerald-700 text-white" : "text-slate-400 hover:bg-white/5")}
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
          <p className="flex-1 text-sm text-slate-300">State & donor conversations · read-only prototype</p>
        </div>
        <main className="flex-1 p-4 pb-28 lg:p-8">{children}</main>
      </div>
      <GovDock />
    </div>
  );
}
