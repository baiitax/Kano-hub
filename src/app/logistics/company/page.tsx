"use client";
import { CompanyShell } from "@/components/logistics-shell";
import { LiveMap, kanoPins } from "@/components/map";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { companyTape } from "@/data/fleet";
import { deliveries, naira } from "@/data/mock";
import { logisticsCompanies, riders } from "@/data/logistics";

export default function Page() {
  const co = logisticsCompanies[0];
  return (
    <CompanyShell>
      <PageHead title="Kano Express command" sub="21 Aug 09:44 WAT · fleet + dispatch" />
      <ProtoNote>Map is a simulated Kano overlay — not live GPS telemetry.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-4">
        <StatCard label="Fleet" value={`${co.fleet} bikes`} />
        <StatCard label="On shift" value="38" hint={`${co.riders} rostered`} />
        <StatCard label="Jobs today" value="312" />
        <StatCard label="SLA" value={co.rate} />
      </div>
      <LiveMap
        className="mt-4 h-56 sm:h-72"
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
      <Card className="mt-4 p-4">
        <div className="mb-2 flex justify-between">
          <p className="font-semibold">HQ tape</p>
          <Button href="/logistics/company/activity" size="sm" variant="ghost">
            All
          </Button>
        </div>
        {companyTape.slice(0, 4).map((e) => (
          <p key={e.t + e.text} className="mt-1 text-sm">
            <span className="font-mono text-xs text-emerald-800">{e.t}</span> <Badge>{e.type}</Badge> {e.text}
          </p>
        ))}
      </Card>
      <Card className="mt-3 p-4 text-sm">
        Open dispatch {deliveries.length} · payouts {naira(1840000)} queued · 2 SLA breaches Fagge
      </Card>
    </CompanyShell>
  );
}
