"use client";

import Link from "next/link";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Badge, Card } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import { useState } from "react";

export default function Orders() {
  const { orders } = useStore();
  const mine = orders.filter((o) => o.customer === "Maryam Yusuf");
  const [tab, setTab] = useState("All");
  const list = tab === "All" ? mine : mine.filter((o) => o.status === tab);
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-3 py-6 sm:px-4 sm:py-8">
        <h1 className="text-2xl font-extrabold">My orders</h1>
        <div className="-mx-3 mt-3 flex gap-2 overflow-x-auto px-3 pb-1 text-sm">
          {["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`shrink-0 rounded-full px-4 py-2.5 font-medium ${tab === t ? "bg-emerald-700 text-white" : "glass"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          {(list.length ? list : mine).map((o) => (
            <Link key={o.id} href={`/customer/orders/${o.id}`} className="block">
              <Card className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold">{o.id}</p>
                  <Badge tone={o.status === "Delivered" ? "green" : "amber"}>{o.status}</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-600">
                    {o.merchant} · {o.items.map((i) => i.name).join(", ")}
                  </p>
                <p className="mt-2 text-lg font-bold tabular-nums">{naira(o.amount)}</p>
                <p className="text-xs text-slate-500">{o.date} · {o.delivery}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <CustomerBottom />
    </div>
  );
}
