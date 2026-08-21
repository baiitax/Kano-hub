"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { socAlerts } from "@/data/intel";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Risk / fraud" actions={<Button href="/security" size="sm">Open SOC</Button>} />
      <ProtoNote>Simulated alerts. Full investigation lives in Security intel.</ProtoNote>
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <StatCard label="Open SOC" value="2" />
        <StatCard label="Watchlist" value="3" />
        <StatCard label="Blocked pay 24h" value="47" />
      </div>
      {socAlerts.map((a) => (
        <Card key={a.id} className="mb-2 p-3 text-sm">
          <div className="flex justify-between">
            <span className="font-semibold">
              {a.id} · {a.cat}
            </span>
            <Badge tone={a.sev === "Critical" ? "red" : "amber"}>{a.sev}</Badge>
          </div>
          <p className="text-slate-600">{a.detail}</p>
        </Card>
      ))}
    </AppShell>
  );
}
