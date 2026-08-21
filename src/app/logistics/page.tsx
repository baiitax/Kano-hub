"use client";

import Link from "next/link";
import { Logo } from "@/components/chrome";
import { LiveMap, kanoPins } from "@/components/map";
import { Badge, Button, Card, StatCard } from "@/components/ui";
import { deliveries, naira } from "@/data/mock";
import { riders } from "@/data/logistics";
import { useStore } from "@/lib/store";
import { useState } from "react";
import { Bike, Building2, Phone, Wallet } from "lucide-react";

export default function Page() {
  const { toast, updateOrder } = useStore();
  const [status, setStatus] = useState("Assigned");
  const job = deliveries[0];
  const me = riders[0];
  const steps = ["Accept", "Picked up", "In transit", "Delivered"];
  return (
    <div className="min-h-screen pb-28">
      <div className="glass-nav sticky top-0 z-20 flex items-center justify-between px-4 py-3">
        <Logo />
        <Badge tone="green">● Online</Badge>
      </div>
      <LiveMap
        className="h-56 w-full rounded-none sm:h-72 sm:rounded-none"
        pickup={{ ...kanoPins.zoo, label: "Aisha Fashion House" }}
        drop={{ ...kanoPins.hotoro, label: "Maryam Yusuf" }}
        caption="ETA 18 min · 6.2 km"
      />
      <div className="mx-auto max-w-lg space-y-3 px-3 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold">{me.name}</h1>
            <p className="text-xs text-slate-500">
              {me.bike} · {me.company}
            </p>
          </div>
          <StatCard label="Today" value={naira(me.earnings)} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <StatCard label="Jobs" value="18" />
          <StatCard label="Done" value="16" />
          <StatCard label="Active" value="2" />
        </div>

        <Card className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase text-emerald-800">Active job</p>
              <p className="font-bold">
                {job.id} · {job.orderId}
              </p>
              <p className="text-sm text-slate-600">
                {job.pickup} → {job.dropoff}
              </p>
            </div>
            <Badge tone="amber">{status}</Badge>
          </div>
          <p className="mt-2 text-sm">
            Customer <span className="font-semibold">{job.customer}</span> · {job.phone}
          </p>
          <p className="text-sm">
            Merchant Aisha Fashion House · Fee {naira(job.fee)} · {job.distance}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {steps.map((a) => (
              <Button
                key={a}
                size="sm"
                variant={status === a ? "primary" : "outline"}
                onClick={() => {
                  setStatus(a);
                  if (a === "Delivered") updateOrder(job.orderId, { status: "Delivered", delivery: "Delivered" });
                  if (a === "In transit") updateOrder(job.orderId, { status: "Out for Delivery", delivery: "In transit" });
                  toast(a, job.orderId);
                }}
              >
                {a}
              </Button>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button href={`/customer/orders/${job.orderId}`} variant="outline" size="sm">
              Customer track
            </Button>
            <Button href="/merchant/logistics" variant="outline" size="sm">
              Merchant view
            </Button>
            <Button href={`tel:${job.phone.replace(/\s/g, "")}`} variant="ghost" size="sm">
              <Phone className="h-4 w-4" /> Call customer
            </Button>
            <Button href="/shop/aisha-fashion-house" variant="ghost" size="sm">
              Open shop
            </Button>
          </div>
        </Card>

        <p className="text-sm font-semibold">Nearby jobs</p>
        {deliveries.map((d) => (
          <Link key={d.id} href="/logistics">
            <Card className="mb-2 p-3 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold">{d.id}</span>
                <span>{naira(d.fee)}</span>
              </div>
              <p className="text-slate-500">
                {d.pickup} → {d.dropoff}
              </p>
            </Card>
          </Link>
        ))}
      </div>
      <LogisticsDock />
    </div>
  );
}

export function LogisticsDock() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 p-3 lg:hidden">
      <nav className="pointer-events-auto mx-auto flex max-w-md items-center justify-around rounded-[1.85rem] border border-white/70 bg-white/85 px-2 py-2 shadow-[0_16px_40px_rgba(15,23,42,0.2)] backdrop-blur-xl">
        {[
          ["/logistics", Bike, "Jobs"],
          ["/logistics/company", Building2, "Company"],
          ["/merchant/logistics", Wallet, "Merchant"],
          ["/customer/orders", Phone, "Customer"],
        ].map(([h, Icon, l]) => (
          <Link key={h as string} href={h as string} className="flex min-w-[4.2rem] flex-col items-center gap-0.5 py-1 text-[10px] font-semibold text-slate-600">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-emerald-700/10 text-emerald-800">
              <Icon className="h-4 w-4" />
            </span>
            {l as string}
          </Link>
        ))}
      </nav>
    </div>
  );
}
