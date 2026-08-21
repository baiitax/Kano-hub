"use client";
import { Logo } from "@/components/chrome";
import { RiderDock } from "@/components/docks";
import { Badge, Card, PageHead, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { riderPayouts } from "@/data/fleet";

export default function Page() {
  return (
    <div className="min-h-screen pb-28">
      <div className="glass-nav px-4 py-3">
        <Logo />
      </div>
      <div className="mx-auto max-w-lg px-3 py-4">
        <PageHead title="Earnings" sub="Abdullahi Musa · KE-4412" />
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Today" value={naira(18500)} />
          <StatCard label="This week" value={naira(91200)} />
          <StatCard label="Tips" value={naira(1200)} />
          <StatCard label="Fuel logged" value={naira(2200)} />
        </div>
        {riderPayouts.map((p) => (
          <Card key={p.id} className="mt-3 flex justify-between p-4 text-sm">
            <span>
              {p.when} · gross {naira(p.gross)}
            </span>
            <span>
              net {naira(p.net)} <Badge tone="green">{p.status}</Badge>
            </span>
          </Card>
        ))}
      </div>
      <RiderDock />
    </div>
  );
}
