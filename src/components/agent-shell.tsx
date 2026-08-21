"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./chrome";
import { AgentDock } from "./docks";
import { LangToggle } from "./lang-toggle";
import { cn } from "./ui";
import {
  LayoutDashboard,
  Activity,
  UserPlus,
  Wallet,
  Store,
  Camera,
  BadgePercent,
  MapPin,
  MoreHorizontal,
  Menu,
  X,
  Smartphone,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { useT } from "@/lib/i18n";
import { useStore } from "@/lib/store";

const nav = [
  { href: "/agent", label: "Home", labelHa: "Gida", icon: LayoutDashboard },
  { href: "/agent/activity", label: "Tape", labelHa: "Ayyuka", icon: Activity },
  { href: "/agent/onboard", label: "Onboard shop", labelHa: "Shiga shago", icon: UserPlus },
  { href: "/agent/cash", label: "Cash assist", labelHa: "Kuɗin hannu", icon: Wallet },
  { href: "/agent/shops", label: "My shops", labelHa: "Shagunana", icon: Store },
  { href: "/agent/listings", label: "Help listings", labelHa: "Saka kaya", icon: Camera },
  { href: "/agent/visits", label: "Field visits", labelHa: "Ziyara", icon: MapPin },
  { href: "/agent/commissions", label: "Commission", labelHa: "Kashi", icon: BadgePercent },
  { href: "/agent/ussd", label: "USSD kiosk", labelHa: "USSD", icon: Smartphone },
  { href: "/agent/more", label: "More", labelHa: "Ƙari", icon: MoreHorizontal },
];

export function AgentShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const t = useT();
  const { lang } = useStore();
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
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{t("agent")}</p>
        <p className="text-xs text-emerald-800">Sadiya Ibrahim · AG-KANO-441</p>
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
                <Icon className="h-4 w-4" /> {lang === "ha" ? n.labelHa : n.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="glass-nav sticky top-0 z-10 flex items-center gap-2 px-3 py-2">
          <button className="grid h-11 w-11 place-items-center lg:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <p className="flex-1 text-sm font-semibold">{t("cashAssist")} · Kwari</p>
          <LangToggle compact />
        </div>
        <main className="flex-1 p-3 pb-24 sm:p-6 lg:pb-6">{children}</main>
      </div>
      <AgentDock />
    </div>
  );
}
