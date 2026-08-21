"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/lib/store";
import { cn } from "./ui";
import type { ComponentType } from "react";
import {
  Home,
  ShoppingBag,
  Package,
  Plus,
  MoreHorizontal,
  Search,
  Users,
  Wallet,
  Bike,
  Building2,
  LayoutDashboard,
  Store,
  Shield,
  Landmark,
  FileText,
  CreditCard,
  AlertTriangle,
  Eye,
  BarChart3,
  LineChart,
  BadgeCheck,
  LifeBuoy,
  Settings,
  Activity,
  MapPin,
  Warehouse,
  Factory,
  Handshake,
} from "lucide-react";

export function PhoneDock({
  items,
  path,
  hideOn = "md",
  center,
  badge,
  badgeLabel,
}: {
  items: readonly (readonly [string, ComponentType<{ className?: string }>, string])[];
  path: string;
  hideOn?: "md" | "lg";
  center?: string;
  badge?: number;
  badgeLabel?: string;
}) {
  return (
    <div className={cn("pointer-events-none fixed inset-x-0 bottom-0 z-30 p-3", hideOn === "lg" ? "lg:hidden" : "md:hidden")}>
      <nav className="pointer-events-auto mx-auto flex max-w-md items-end justify-around rounded-[1.85rem] border border-white/70 bg-white/80 px-1.5 py-1.5 shadow-[0_18px_50px_rgba(15,23,42,0.22)] backdrop-blur-2xl">
        {items.map(([href, Icon, label]) => {
          const active = path === href || (href !== items[0][0] && path.startsWith(href));
          const isCenter = center === href;
          return (
            <Link
              key={href + label}
              href={href}
              className={cn(
                "relative flex min-w-[3.6rem] flex-col items-center gap-0.5 px-1 py-1 text-[10px] font-semibold",
                active ? "text-emerald-800" : "text-slate-500"
              )}
            >
              <span
                className={cn(
                  "grid place-items-center rounded-2xl transition",
                  isCenter ? "-mt-5 h-12 w-12 bg-emerald-700 text-white shadow-lg shadow-emerald-700/30" : "h-9 w-9",
                  !isCenter && active && "bg-emerald-700/12"
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              {label}
              {badgeLabel === label && badge && badge > 0 ? (
                <span className="absolute right-1 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-emerald-700 px-1 text-[9px] text-white">
                  {badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export function MerchantDock() {
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="lg"
      center="/merchant/pos"
      path={path}
      items={[
        ["/merchant", Home, "Home"],
        ["/merchant/orders", ShoppingBag, "Orders"],
        ["/merchant/pos", Plus, "POS"],
        ["/merchant/wallet", Wallet, "Wallet"],
        ["/merchant/more", MoreHorizontal, "More"],
      ]}
    />
  );
}

export function CustomerDock() {
  const { cart } = useStore();
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="md"
      path={path}
      badge={cart.reduce((s, i) => s + i.qty, 0)}
      badgeLabel="Cart"
      items={[
        ["/marketplace", Home, "Home"],
        ["/marketplace/search", Search, "Search"],
        ["/customer/orders", Package, "Orders"],
        ["/cart", ShoppingBag, "Cart"],
        ["/customer", Users, "Me"],
      ]}
    />
  );
}

export function RiderDock() {
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="lg"
      center="/logistics"
      path={path}
      items={[
        ["/logistics", Bike, "Jobs"],
        ["/logistics/jobs", Package, "Queue"],
        ["/logistics/earnings", Wallet, "Pay"],
        ["/logistics/history", FileText, "History"],
        ["/logistics/activity", MoreHorizontal, "More"],
      ]}
    />
  );
}

export function CompanyDock() {
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="lg"
      path={path}
      items={[
        ["/logistics/company", LayoutDashboard, "HQ"],
        ["/logistics/company/dispatch", Bike, "Dispatch"],
        ["/logistics/company/riders", Users, "Riders"],
        ["/logistics/company/sla", AlertTriangle, "SLA"],
        ["/logistics/company/activity", MoreHorizontal, "More"],
      ]}
    />
  );
}

export function SupplierDock() {
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="lg"
      center="/supplier/orders"
      path={path}
      items={[
        ["/supplier", Factory, "Mill"],
        ["/supplier/orders", Package, "POs"],
        ["/supplier/catalogue", Warehouse, "Stock"],
        ["/supplier/wallet", Wallet, "Cash"],
        ["/supplier/more", MoreHorizontal, "More"],
      ]}
    />
  );
}

export function AgentDock() {
  const path = usePathname();
  const { lang } = useStore();
  const ha = lang === "ha";
  return (
    <PhoneDock
      hideOn="lg"
      center="/agent/cash"
      path={path}
      items={[
        ["/agent", Handshake, ha ? "Gida" : "Home"],
        ["/agent/onboard", Users, ha ? "Shago" : "Onboard"],
        ["/agent/cash", Wallet, ha ? "Kuɗi" : "Cash"],
        ["/agent/shops", Store, ha ? "Rumfa" : "Shops"],
        ["/agent/more", MoreHorizontal, ha ? "Ƙari" : "More"],
      ]}
    />
  );
}

export function AdminDock() {
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="lg"
      path={path}
      items={[
        ["/admin", LayoutDashboard, "Home"],
        ["/admin/activity", LineChart, "Tape"],
        ["/admin/merchants", Store, "Shops"],
        ["/admin/orders", ShoppingBag, "Orders"],
        ["/admin/tickets", MoreHorizontal, "More"],
      ]}
    />
  );
}

export function BankDock() {
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="lg"
      path={path}
      items={[
        ["/bank", Landmark, "Bank"],
        ["/bank/activity", Activity, "Tape"],
        ["/bank/nip", CreditCard, "NIP"],
        ["/bank/lending", BadgeCheck, "Credit"],
        ["/bank/settlements", Wallet, "Settle"],
      ]}
    />
  );
}

export function LoansDock() {
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="lg"
      path={path}
      items={[
        ["/loans", Home, "Desk"],
        ["/loans/pipeline", FileText, "Pipeline"],
        ["/loans/portfolio", Landmark, "Book"],
        ["/loans/collections", CreditCard, "Collect"],
        ["/loans/officers", MoreHorizontal, "More"],
      ]}
    />
  );
}

export function SecurityDock() {
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="lg"
      path={path}
      items={[
        ["/security", Shield, "SOC"],
        ["/security/activity", Activity, "Tape"],
        ["/security/alerts", AlertTriangle, "Alerts"],
        ["/security/cases", Eye, "Cases"],
        ["/security/fraud", MoreHorizontal, "More"],
      ]}
    />
  );
}

export function ExecutiveDock() {
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="lg"
      path={path}
      items={[
        ["/executive", BarChart3, "Home"],
        ["/executive/activity", Activity, "Live"],
        ["/executive/gmv", Landmark, "GMV"],
        ["/executive/lgas", MapPin, "LGAs"],
        ["/executive/board", MoreHorizontal, "Board"],
      ]}
    />
  );
}

export function AssocDock() {
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="lg"
      path={path}
      items={[
        ["/association", LayoutDashboard, "Home"],
        ["/association/members", Users, "Members"],
        ["/association/dues", Wallet, "Dues"],
        ["/association/deals", Package, "Deals"],
        ["/markets/kantin-kwari", Store, "Map"],
      ]}
    />
  );
}

export function GovDock() {
  const path = usePathname();
  return (
    <PhoneDock
      hideOn="lg"
      path={path}
      items={[
        ["/gov", Landmark, "Desk"],
        ["/gov/lgas", MapPin, "LGAs"],
        ["/gov/jobs", Users, "Jobs"],
        ["/gov/programmes", FileText, "Prog"],
        ["/gov/brief", MoreHorizontal, "Brief"],
      ]}
    />
  );
}
