"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead, StatCard } from "@/components/ui";
import { socHealth } from "@/data/soc";

export default function Page() {
  return (
    <PortalShell kind="security">
      <PageHead title="Service health" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Uptime 30d" value="99.96%" />
        <StatCard label="Open degradations" value="1" hint="Payment webhook" />
        <StatCard label="Error budget" value="71% left" />
      </div>
      <div className="mt-4 space-y-2">
        {socHealth.map((h) => (
          <Card key={h.svc} className="flex justify-between p-4 text-sm">
            <span className="font-semibold">{h.svc}</span>
            <span>
              {h.lat} · err {h.err}{" "}
              <Badge tone={h.status === "Healthy" ? "green" : "amber"}>{h.status}</Badge>
            </span>
          </Card>
        ))}
      </div>
    </PortalShell>
  );
}
