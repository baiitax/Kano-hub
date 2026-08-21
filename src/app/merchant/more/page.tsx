"use client";
import { AppShell } from "@/components/chrome";
import Link from "next/link";
import { Card } from "@/components/ui";
import {
  Package,
  Boxes,
  Users,
  Building2,
  Landmark,
  BarChart3,
  BadgeCheck,
  Megaphone,
  UserCog,
  Settings,
  Wallet,
  Truck,
  Sparkles,
  Store,
  ChevronRight,
} from "lucide-react";

const links = [
  ["/merchant/activity", "Live activity", BarChart3],
  ["/merchant/returns", "Returns", Package],
  ["/merchant/reviews", "Reviews", BadgeCheck],
  ["/merchant/loyalty", "Loyalty", Megaphone],
  ["/merchant/reports", "Reports", BarChart3],
  ["/merchant/tax", "Tax summary", Landmark],
  ["/merchant/inventory", "Inventory", Boxes],
  ["/merchant/customers", "Customers", Users],
  ["/merchant/suppliers", "Suppliers", Building2],
  ["/merchant/wholesale", "Wholesale POs", Boxes],
  ["/wholesale", "B2B mill floor", Store],
  ["/merchant/accounting", "Accounting", Landmark],
  ["/merchant/wallet", "Wallet", Wallet],
  ["/merchant/settlement", "Settlement", Landmark],
  ["/merchant/credit-pack", "Credit pack", BadgeCheck],
  ["/merchant/disputes", "Disputes", Package],
  ["/merchant/logistics", "Logistics", Truck],
  ["/merchant/analytics", "Analytics", BarChart3],
  ["/merchant/financial-profile", "Financial profile", BadgeCheck],
  ["/merchant/financing", "Financing", Landmark],
  ["/merchant/marketing", "Marketing", Megaphone],
  ["/merchant/ai", "AI assistant", Sparkles],
  ["/merchant/staff", "Staff", UserCog],
  ["/merchant/business", "Business profile", Store],
  ["/settings", "Settings", Settings],
] as const;

export default function Page() {
  return (
    <AppShell>
      <h1 className="text-2xl font-extrabold">More</h1>
      <p className="text-sm text-slate-600">Everything else in your operating system</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map(([h, l, Icon]) => (
          <Link key={h} href={h}>
            <Card className="flex min-h-14 items-center justify-between px-4">
              <span className="flex items-center gap-3 font-medium">
                <Icon className="h-4 w-4 text-emerald-800" />
                {l}
              </span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </Card>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
