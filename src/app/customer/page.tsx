"use client";

import Link from "next/link";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card, StatCard } from "@/components/ui";
import { customerTape } from "@/data/customer-ops";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import { ChevronRight } from "lucide-react";

const links = [
  ["/customer/orders", "Orders"],
  ["/customer/disputes", "Dispute holds"],
  ["/customer/wallet", "Wallet"],
  ["/customer/activity", "Activity"],
  ["/customer/addresses", "Addresses"],
  ["/customer/saved", "Saved items"],
  ["/customer/following", "Following"],
  ["/customer/loyalty", "Loyalty"],
  ["/customer/reviews", "My reviews"],
  ["/customer/returns", "Returns"],
  ["/customer/messages", "Messages"],
  ["/customer/payments", "Payment methods"],
  ["/customer/security", "Security"],
];

export default function Page() {
  const { walletCustomer, session, orders } = useStore();
  const mine = orders.filter((o) => o.customer === "Maryam Yusuf");
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <p className="text-xs font-semibold uppercase text-emerald-800">21 Aug · 09:44 WAT</p>
        <h1 className="text-2xl font-extrabold">{session?.name || "Maryam Yusuf"}</h1>
        <p className="text-sm text-slate-500">Hotoro, Tarauni · VIP</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <StatCard label="Wallet" value={naira(walletCustomer)} />
          <StatCard label="Orders" value={String(mine.length || 12)} />
        </div>
        <Card className="mt-4 p-4">
          <div className="mb-2 flex justify-between">
            <p className="font-semibold">Activity</p>
            <Button href="/customer/activity" size="sm" variant="ghost">
              All
            </Button>
          </div>
          {customerTape.slice(0, 4).map((a) => (
            <p key={a.t + a.text} className="mt-2 text-sm">
              <span className="font-mono text-[11px] text-emerald-800">{a.t}</span> <Badge>{a.type}</Badge> {a.text}
            </p>
          ))}
        </Card>
        <div className="mt-4 space-y-2">
          {links.map(([h, l]) => (
            <Link key={h} href={h}>
              <Card className="flex min-h-14 items-center justify-between px-4">
                <span className="font-medium">{l}</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <CustomerBottom />
    </div>
  );
}
