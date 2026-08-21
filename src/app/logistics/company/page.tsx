"use client";

import Link from "next/link";
import { AppShell } from "@/components/chrome";
import { LiveMap, kanoPins } from "@/components/map";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { deliveries, naira } from "@/data/mock";
import { logisticsCompanies, riders } from "@/data/logistics";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  const co = logisticsCompanies[0];
  return (
    <AppShell kind="logistics">
      <PageHead
        title="Kano Express Logistics"
        sub="Fleet, riders and live dispatch · linked to merchant orders"
        actions={
          <Button href="/logistics" size="sm">
            Rider app
          </Button>
        }
      />
      <ProtoNote>Live map is a simulated Kano overlay for prototype demos — not GPS telemetry.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-4">
        <StatCard label="Fleet" value={`${co.fleet} bikes`} />
        <StatCard label="Riders" value={String(co.riders)} />
        <StatCard label="Orders today" value="312" />
        <StatCard label="Success rate" value={co.rate} />
      </div>
      <LiveMap
        className="mt-4 h-64 w-full sm:h-80"
        pickup={{ ...kanoPins.zoo, label: "Pickup" }}
        drop={{ ...kanoPins.hotoro, label: "Customer" }}
        riders={riders.map((r) => ({
          id: r.id,
          x: r.x,
          y: r.y,
          label: r.name,
          tone: r.status === "Offline" ? "idle" : "rider",
        }))}
      />
      <h2 className="mt-6 font-bold">Riders</h2>
      <div className="mt-2 grid gap-2 lg:grid-cols-2">
        {riders.map((r) => (
          <Card key={r.id} className="flex items-center justify-between p-4 text-sm">
            <div>
              <p className="font-semibold">{r.name}</p>
              <p className="text-slate-500">
                {r.bike} · {r.lga} · {r.today} jobs
              </p>
            </div>
            <div className="text-right">
              <Badge tone={r.status === "On trip" ? "amber" : r.status === "Online" ? "green" : "slate"}>{r.status}</Badge>
              <p className="mt-1 font-bold">{naira(r.earnings)}</p>
            </div>
          </Card>
        ))}
      </div>
      <h2 className="mt-6 font-bold">Dispatch queue</h2>
      <Card className="mt-2 divide-y divide-white/40">
        {deliveries.map((d) => (
          <div key={d.id} className="flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
            <div>
              <p className="font-semibold">
                {d.id} · {d.orderId}
              </p>
              <p className="text-slate-500">
                {d.customer} · {d.pickup} → {d.dropoff}
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" href={`/customer/orders/${d.orderId}`}>
                Customer
              </Button>
              <Button size="sm" variant="outline" href="/merchant/logistics">
                Merchant
              </Button>
              <Button size="sm" onClick={() => toast("Dispatched to Abdullahi Musa", d.id)}>
                Dispatch
              </Button>
            </div>
          </div>
        ))}
      </Card>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {logisticsCompanies.map((c) => (
          <Card key={c.id} className="p-4 text-sm">
            <p className="font-bold">{c.name}</p>
            <p>
              {c.riders} riders · {c.areas}
            </p>
            <p>Fees {c.fee}</p>
          </Card>
        ))}
      </div>
      <Link href="/admin/logistics" className="mt-4 inline-block text-sm font-semibold text-emerald-800">
        Platform logistics admin →
      </Link>
    </AppShell>
  );
}
