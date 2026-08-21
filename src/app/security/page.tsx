"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { socAlerts } from "@/data/intel";
import { LiveMap, kanoPins } from "@/components/map";
import { riders } from "@/data/logistics";

export default function Page() {
  const open = socAlerts.filter((a) => a.status === "Open" || a.status === "Investigating").length;
  return (
    <PortalShell kind="security">
      <PageHead title="Security intelligence · SOC" sub="Monitoring marketplace, wallets, logistics and credit desks" />
      <ProtoNote>Simulated detections. No real PII. For investor / ops demonstration.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Open incidents" value={String(open)} hint="MTTA 11 min" />
        <StatCard label="Blocked payments (24h)" value="47" />
        <StatCard label="Watchlist entities" value="3" />
        <StatCard label="System health" value="99.96%" />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card className="divide-y divide-white/40">
          <p className="p-3 font-semibold">Priority queue</p>
          {socAlerts.slice(0, 4).map((a) => (
            <div key={a.id} className="p-3 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold">{a.cat}</span>
                <Badge tone={a.sev === "Critical" ? "red" : a.sev === "High" ? "amber" : "slate"}>{a.sev}</Badge>
              </div>
              <p className="text-slate-600">{a.detail}</p>
              <p className="text-xs text-slate-400">
                {a.entity} · {a.time}
              </p>
            </div>
          ))}
          <div className="p-3">
            <Button href="/security/alerts" size="sm">
              Full alert queue
            </Button>
          </div>
        </Card>
        <div>
          <p className="mb-2 text-sm font-semibold">Geo of flagged sessions (illustrative)</p>
          <LiveMap
            className="h-64"
            pickup={{ ...kanoPins.zoo, label: "Shop" }}
            drop={{ ...kanoPins.hotoro, label: "Customer" }}
            riders={riders.map((r) => ({ id: r.id, x: r.x, y: r.y, label: r.name, tone: "idle" as const }))}
            live={false}
          />
        </div>
      </div>
    </PortalShell>
  );
}
