"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { socRules } from "@/data/soc";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="security">
      <PageHead title="Fraud lab" sub="Rules engine · precision / false-positive" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Rules live" value={String(socRules.filter((r) => r.state === "On").length)} />
        <StatCard label="Precision 7d" value="91%" />
        <StatCard label="False positive" value="3.2%" />
      </div>
      <div className="mt-4 space-y-2">
        {socRules.map((r) => (
          <Card key={r.id} className="flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
            <div>
              <p className="font-semibold">
                {r.id} · {r.name}
              </p>
              <p className="text-slate-500">
                Fires 7d: {r.fire} · FP {r.fp}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge tone={r.state === "Canary" ? "amber" : "green"}>{r.state}</Badge>
              <Button size="sm" variant="outline" onClick={() => toast(r.state === "On" ? "Paused" : "Armed", r.id)}>
                Toggle
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </PortalShell>
  );
}
