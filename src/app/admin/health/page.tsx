"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead, StatCard } from "@/components/ui";
import { health } from "@/data/ops";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Platform health" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Uptime 30d" value="99.96%" />
        <StatCard label="Degraded" value="1" hint="Partner webhook" />
        <StatCard label="Error budget" value="71% left" />
      </div>
      {health.map((h) => (
        <Card key={h.svc} className="mt-2 flex justify-between p-4 text-sm">
          <span className="font-semibold">{h.svc}</span>
          <span>
            p95 {h.p95} <Badge tone={h.status === "Healthy" ? "green" : "amber"}>{h.status}</Badge>
          </span>
        </Card>
      ))}
    </AppShell>
  );
}
