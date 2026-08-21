"use client";
import { Logo } from "@/components/chrome";
import { RiderDock } from "@/components/docks";
import { Badge, Card, PageHead } from "@/components/ui";
import { deliveries, naira } from "@/data/mock";

export default function Page() {
  return (
    <div className="min-h-screen pb-28">
      <div className="glass-nav px-4 py-3">
        <Logo />
      </div>
      <div className="mx-auto max-w-lg px-3 py-4">
        <PageHead title="History" />
        {deliveries.map((d) => (
          <Card key={d.id} className="mb-2 p-4 text-sm">
            <div className="flex justify-between">
              <span className="font-semibold">{d.id}</span>
              <Badge tone={d.status === "Delivered" ? "green" : "amber"}>{d.status}</Badge>
            </div>
            <p>
              {d.pickup} → {d.dropoff}
            </p>
            <p className="text-slate-500">
              {d.customer} · {naira(d.fee)}
            </p>
          </Card>
        ))}
      </div>
      <RiderDock />
    </div>
  );
}
